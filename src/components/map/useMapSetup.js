// Custom hook for initializing Google Maps
import { useState, useEffect } from 'react';

const API_KEY = 'AIzaSyBLfsrox3_pyLNCBztuRnRYjGx9INPheY8';
const MAP_ID = '8f541c95b5047c07';

export const useMapSetup = (mapRef) => {
    const [map, setMap] = useState(null);

    // Initialize map
    const initializeMap = () => {
        if (!window.google) {
            console.error('Google Maps not loaded');
            return;
        }

        // Initialize map with map ID
        const newMap = new window.google.maps.Map(mapRef.current, {
            center: { lat: 49.8951, lng: -97.1384 }, // Winnipeg center coordinates
            zoom: 12,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: window.google.maps.ControlPosition.LEFT_BOTTOM,
                mapTypeIds: ['roadmap', 'satellite']
            },
            streetViewControl: false, // Disable Street View
            fullscreenControl: false, // Disable Fullscreen button
            zoomControl: true,
            zoomControlOptions: {
                position: window.google.maps.ControlPosition.RIGHT_CENTER
            }
        });
        
        setMap(newMap);
        console.log('Map initialized');
    };

    useEffect(() => {
        // Load Google Maps API with Places library
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initializeMap;
        document.head.appendChild(script);

        // Cleanup
        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return map;
}; 