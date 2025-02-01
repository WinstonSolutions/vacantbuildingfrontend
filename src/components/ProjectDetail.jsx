import React from 'react';

const ProjectDetail = () => {
    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Left side - Quality Assurance & Supervision */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-blue-900 mb-8">
                            Quality Assurance & Supervision
                        </h2>
                        
                        <div className="space-y-6">
                            {/* Professional Oversight */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Professional Oversight:</h3>
                                    <p className="text-gray-600">Every project is supervised by licensed contractors and instructors</p>
                                </div>
                            </div>

                            {/* Institutional Backing */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Institutional Backing:</h3>
                                    <p className="text-gray-600">Work is backed by reputable educational institutions</p>
                                </div>
                            </div>

                            {/* Safety Standards */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Safety Standards:</h3>
                                    <p className="text-gray-600">Strict adherence to safety protocols and building codes</p>
                                </div>
                            </div>

                            {/* Insurance Coverage */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Insurance Coverage:</h3>
                                    <p className="text-gray-600">Full insurance coverage for all work performed</p>
                                </div>
                            </div>

                            {/* Statistics */}
                            <div className="flex gap-8 mt-8">
                                <div>
                                    <div className="text-4xl font-bold text-blue-900">98%</div>
                                    <div className="text-sm text-gray-600">Projects completed to code standards</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-900">35%</div>
                                    <div className="text-sm text-gray-600">Average property improvement</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="md:w-1/2">
                        <img 
                            src="/construction-image.jpg" 
                            alt="Construction project in progress" 
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail; 