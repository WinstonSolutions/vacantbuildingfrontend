import React, { useState, useEffect, useRef } from 'react';

const SearchBox = ({ map, onSearchResult, clearSearchRef }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [predictions, setPredictions] = useState([]);
    const autocompleteService = useRef(null);
    const geocoder = useRef(null);

    // Initialize services when map is ready
    useEffect(() => {
        if (window.google && map) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
            geocoder.current = new window.google.maps.Geocoder();
        }
    }, [map]);

    // Expose clear function through ref
    useEffect(() => {
        if (clearSearchRef) {
            clearSearchRef.current = () => {
                setSearchValue('');
                setPredictions([]);
            };
        }
    }, [clearSearchRef]);

    // Handle input change and get predictions
    const handleInputChange = async (e) => {
        const value = e.target.value;
        setSearchValue(value);

        if (!value || !autocompleteService.current) {
            setPredictions([]);
            return;
        }

        try {
            const response = await autocompleteService.current.getPlacePredictions({
                input: value,
                componentRestrictions: { country: 'ca' }, // Restrict to Canada
                location: new window.google.maps.LatLng(49.8951, -97.1384), // Winnipeg center
                radius: 50000, // 50km radius
                types: ['address'] // Only return address results
            });

            setPredictions(response?.predictions || []);
        } catch (error) {
            console.error('Error getting predictions:', error);
            setPredictions([]);
        }
    };

    // Handle prediction selection
    const handlePredictionSelect = async (prediction) => {
        if (!geocoder.current || !map) return;

        try {
            const response = await geocoder.current.geocode({
                placeId: prediction.place_id
            });

            if (response.results[0]) {
                const location = response.results[0].geometry.location;
                map.panTo(location);
                map.setZoom(16);
                setSearchValue(prediction.description);
                setPredictions([]);
                setIsExpanded(false);
                
                // Call the callback with location and address
                onSearchResult(location, prediction.description);
            }
        } catch (error) {
            console.error('Error geocoding prediction:', error);
        }
    };

    return (
        <div className="absolute left-4 top-4 z-10">
            <div 
                className={`bg-white rounded-lg shadow-lg transition-all duration-200 ${
                    isExpanded ? 'w-96' : 'w-64'
                }`}
            >
                <div className="flex items-center p-2">
                    {/* Search Icon */}
                    <div className="text-gray-400 p-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                            />
                        </svg>
                    </div>

                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Search for an address"
                        className="w-full px-2 py-1 outline-none text-gray-700"
                        value={searchValue}
                        onChange={handleInputChange}
                        onFocus={() => setIsExpanded(true)}
                    />

                    {/* Clear Button */}
                    {searchValue && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearchValue('');
                                setPredictions([]);
                                onSearchResult(null, null); // Clear marker and info panel
                            }}
                            className="p-2 text-gray-400 hover:text-gray-600"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Predictions List */}
                {isExpanded && predictions.length > 0 && (
                    <div className="border-t border-gray-100 max-h-64 overflow-auto">
                        {predictions.map((prediction) => (
                            <div
                                key={prediction.place_id}
                                className="p-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                                onClick={() => handlePredictionSelect(prediction)}
                            >
                                <div className="flex items-center">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-4 w-4 mr-2 text-gray-400" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                                        />
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                                        />
                                    </svg>
                                    {prediction.description}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBox; 