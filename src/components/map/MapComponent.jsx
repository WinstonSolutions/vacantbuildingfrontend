// Main Map Component
import React, { useRef, useEffect, useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import { useMapSetup } from './useMapSetup';
import { useMarkers } from './useMarkers';
import InfoPanel from './InfoPanel';
import SearchBox from './SearchBox';

const MapComponent = forwardRef((props, ref) => {
    const mapRef = useRef(null);
    const clearSearchRef = useRef(null);
    const map = useMapSetup(mapRef);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [searchMarker, setSearchMarker] = useState(null);
    const { markers, addMarkersToMap, cleanupMarkers } = useMarkers(map, setSelectedAddress);

    // Reset map to initial view
    const resetMapView = useCallback(() => {
        if (map) {
            // Reset map center and zoom
            map.setCenter({ lat: 49.8951, lng: -97.1384 }); // Winnipeg center
            map.setZoom(12);

            // Clear search marker
            if (searchMarker) {
                searchMarker.setMap(null);
                setSearchMarker(null);
            }

            // Clear selected address and search box
            setSelectedAddress(null);
            if (clearSearchRef.current) {
                clearSearchRef.current();
            }
        }
    }, [map, searchMarker]);

    // Expose resetMapView to parent through ref
    useImperativeHandle(ref, () => ({
        resetMapView
    }));

    // Add markers when map is ready
    useEffect(() => {
        if (map) {
            addMarkersToMap();
        }
    }, [map]);

    // Cleanup markers on unmount
    useEffect(() => {
        return () => {
            cleanupMarkers();
            if (searchMarker) {
                searchMarker.setMap(null);
            }
        };
    }, []);

    // Handle search result selection
    const handleSearchResult = (location, address) => {
        // Clear previous search marker
        if (searchMarker) {
            searchMarker.setMap(null);
        }

        // Create new marker
        const newMarker = new window.google.maps.Marker({
            map: map,
            position: location,
            animation: window.google.maps.Animation.DROP,
            icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: '#4285F4',
                fillOpacity: 1,
                strokeColor: '#FFFFFF',
                strokeWeight: 2,
            }
        });

        setSearchMarker(newMarker);
        setSelectedAddress(address);
    };

    return (
        <div className="relative h-full">
            <SearchBox 
                map={map} 
                onSearchResult={handleSearchResult}
                clearSearchRef={clearSearchRef}
            />
            <InfoPanel 
                address={selectedAddress} 
                onClose={() => {
                    setSelectedAddress(null);
                    if (searchMarker) {
                        searchMarker.setMap(null);
                        setSearchMarker(null);
                    }
                    if (clearSearchRef.current) {
                        clearSearchRef.current();
                    }
                }} 
            />
            <div className="h-full">
                <div ref={mapRef} className="w-full h-full" />
            </div>
        </div>
    );
});

export default MapComponent; 