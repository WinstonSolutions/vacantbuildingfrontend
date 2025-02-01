import React from 'react';

const InfoPanel = ({ address, onClose }) => {
    if (!address) return null;

    return (
        <div className="absolute left-0 top-0 h-full w-96 bg-white shadow-lg z-10 overflow-auto">
            <div className="p-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Location Details</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full"
                    >
                        ✕
                    </button>
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Address</h3>
                        <p className="text-gray-700">{address}</p>
                    </div>

                    {/* Additional Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Property Information</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Status:</span>
                                <span className="font-medium">Vacant</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Type:</span>
                                <span className="font-medium">Residential</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4">
                        <button 
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')}
                        >
                            View on Google Maps
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoPanel; 