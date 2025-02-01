import React from 'react';

const ProjectShowcase = () => {
    return (
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Excellence Through Education
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Our students come from top-rated institutions with rigorous training programs.
                    Every project is supervised by licensed professionals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Construction & Carpentry */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                            <span className="text-white text-xl">🔧</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Construction & Carpentry</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>• Structural renovations</li>
                            <li>• Historic preservation</li>
                            <li>• Interior finishing</li>
                            <li>• Safety protocols</li>
                        </ul>
                    </div>

                    {/* Electrical Systems */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                            <span className="text-white text-xl">⚡</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Electrical Systems</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>• Wiring upgrades</li>
                            <li>• Code compliance</li>
                            <li>• Energy efficiency</li>
                            <li>• Safety standards</li>
                        </ul>
                    </div>

                    {/* Plumbing & HVAC */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                            <span className="text-white text-xl">🔧</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Plumbing & HVAC</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>• System modernization</li>
                            <li>• Sustainable solutions</li>
                            <li>• Building comfort</li>
                            <li>• Water efficiency</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase; 