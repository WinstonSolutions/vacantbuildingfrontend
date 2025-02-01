import React from 'react';

const ProjectInfo = () => {
    return (
        // Main container with gradient background and improved spacing
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Content container with enhanced styling */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Project title with decorative underline */}
                <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
                    Project Information
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
                </h1>
                
                {/* Project description section with card-like styling */}
                <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-blue-700">About the Project</h2>
                    {/* Split paragraphs for better readability */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Our project aims to revitalize vacant buildings in Winnipeg, turning them into dynamic and purposeful spaces that benefit the City of Winnipeg, property owners, educational institutions, and multiple stakeholders.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        By repurposing these underutilized buildings, we contribute to economic growth, community development, and sustainability. Property owners gain new opportunities for investment and revenue, while the city sees enhanced urban renewal and reduced vacancy rates.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Together, we are transforming vacant spaces into vibrant hubs that serve the community and create lasting value.
                    </p>
                </section>

                {/* Features section with enhanced styling */}
                <section className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-blue-700">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Feature items with icons and improved styling */}
                        <li className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                            <span className="text-blue-500 text-xl">🗺️</span>
                            <span className="text-gray-700">Interactive map visualization</span>
                        </li>
                        <li className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                            <span className="text-blue-500 text-xl">📊</span>
                            <span className="text-gray-700">Data reporting capabilities</span>
                        </li>
                        <li className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                            <span className="text-blue-500 text-xl">⚙️</span>
                            <span className="text-gray-700">Administrative dashboard</span>
                        </li>
                        <li className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                            <span className="text-blue-500 text-xl">🤝</span>
                            <span className="text-gray-700">Stakeholder collaboration tools</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default ProjectInfo; 