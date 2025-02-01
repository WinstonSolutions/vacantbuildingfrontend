import React from 'react';

const ProjectInfo = () => {
    return (
        // Container with padding and max-width for better readability
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Project title */}
            <h1 className="text-3xl font-bold mb-6">Project Information</h1>
            
            {/* Project description section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
                <p className="text-gray-700 mb-4">
                    This is a comprehensive mapping project that aims to... 
                    [Your project description here]
                </p>
            </section>

            {/* Project features section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li className="mb-2">Interactive map visualization</li>
                    <li className="mb-2">Data reporting capabilities</li>
                    <li className="mb-2">Administrative dashboard</li>
                    {/* Add more features as needed */}
                </ul>
            </section>

            {/* Contact or additional information */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-gray-700">
                    For more information, please contact: example@email.com
                </p>
            </section>
        </div>
    );
};

export default ProjectInfo; 