import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[rgb(0,102,155)] text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <p className="text-sm">&copy; {new Date().getFullYear()} City of Winnipeg. All Rights Reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-gray-300 text-sm">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-300 text-sm">Terms of Use</a>
                    <a href="#" className="hover:text-gray-300 text-sm">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 