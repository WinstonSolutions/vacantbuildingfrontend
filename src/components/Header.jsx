import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onLogoClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    // Handle click outside of menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogoClick = () => {
        if (window.location.pathname === '/') {
            // If we're on the main page, reset the map view
            onLogoClick?.();
        } else {
            // If we're on another page, navigate to home
            navigate('/');
        }
    };

    return (
        <header className="bg-[rgb(0,102,155)] h-24 flex justify-between items-center px-4 shadow-lg relative">
            {/* Logo */}
            <div 
                className="h-12 cursor-pointer" 
                onClick={handleLogoClick}
            >
                <img 
                    src="https://www.winnipeg.ca/themes/custom/confluence/img/cw-v-white-rgb.svg" 
                    alt="City of Winnipeg"
                    className="h-full w-auto"
                />
            </div>

            {/* Title */}
            <h1 className="text-white text-2xl font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Vacant to Vibrant
            </h1>

            {/* Menu Button and Dropdown */}
            <div className="relative" ref={menuRef}>
                <button 
                    className="text-white p-2 hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-8 w-8" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 6h16M4 12h16M4 18h16" 
                        />
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-[rgb(0,102,155)] rounded-md shadow-lg py-1 z-50">
                        <a 
                            href="/report" 
                            className="block px-4 py-2 text-white hover:bg-[rgba(255,255,255,0.1)] flex items-center"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5 mr-2" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            Report
                        </a>
                        <a 
                            href="/admin" 
                            className="block px-4 py-2 text-white hover:bg-[rgba(255,255,255,0.1)] flex items-center"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5 mr-2" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                            </svg>
                            Admin
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header; 