// Custom hook for handling map markers
import { useState, useRef } from 'react';

// Custom marker icon configuration
const createCustomIcon = () => {
    return {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: 'orange',
        fillOpacity: 1,
        strokeColor: 'red',
        strokeWeight: 2,
        scale: 2,
        anchor: new window.google.maps.Point(12, 24),
    };
};

// Function to fetch data from Spring Boot backend
const fetchLocations = async () => {
    try {
        const response = await fetch('http://35.212.165.13:8080/vacantbuildings/addresses');//gcp ip
        const addresses = await response.json();
        // Append location details to each address
        const formattedAddresses = addresses.map(address => 
            `${address}, Winnipeg, Manitoba, Canada`
        );
        console.log('Fetched addresses:', formattedAddresses);
        return formattedAddresses;
    } catch (error) {
        console.error('Error fetching addresses:', error);
        return [];
    }
};

export const useMarkers = (map, setSelectedAddress) => {
    const [markers, setMarkers] = useState([]);
    const infoWindow = useRef(null);

    const addMarkersToMap = async () => {
        if (!map || !window.google) return;

        // Clear existing markers
        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);

        // Add click listener to map to close info window and panel
        map.addListener('click', () => {
            if (infoWindow.current) {
                infoWindow.current.close();
            }
            setSelectedAddress(null);
        });

        const addresses = await fetchLocations();
        console.log('Processing addresses:', addresses);

        if (addresses.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();
            const geocoder = new window.google.maps.Geocoder();
            const newMarkers = [];

            // Process each address
            for (const address of addresses) {
                try {
                    const result = await new Promise((resolve, reject) => {
                        geocoder.geocode({ address }, (results, status) => {
                            if (status === 'OK' && results[0]) {
                                resolve(results[0]);
                            } else {
                                reject(status);
                            }
                        });
                    });

                    const marker = new window.google.maps.Marker({
                        map: map,
                        position: result.geometry.location,
                        title: address,
                        animation: window.google.maps.Animation.DROP,
                        icon: createCustomIcon()
                    });

                    // Add click listener
                    marker.addListener('click', () => {
                        // Update selected address for info panel
                        setSelectedAddress(address);
                    });

                    newMarkers.push(marker);
                    bounds.extend(result.geometry.location);
                    console.log('Added marker for:', address);
                } catch (error) {
                    console.error('Error processing address:', address, error);
                }
            }

            setMarkers(newMarkers);

            // Center the map on Winnipeg without changing zoom
            map.setCenter({ lat: 49.8951, lng: -97.1384 });
        }
    };

    // Cleanup function
    const cleanupMarkers = () => {
        if (infoWindow.current) {
            infoWindow.current.close();
        }
        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);
        setSelectedAddress(null);
    };

    return { markers, addMarkersToMap, cleanupMarkers };
}; 