import { useState } from 'react'
import MyImage from '../assets/logo/transparent-bg-white.png';


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);


    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        {/* Logo/Title */}
                        <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                            <div className="flex items-start justify-start ">
                                <img src={MyImage} alt="Description" className="w-[60%] sm:w-[40%]" />
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium active:bg-red-500"
                                >
                                    <i className="fa-solid fa-house mr-1"></i> Home
                                </a>
                                <a
                                    href="/about"
                                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium active:bg-red-500"
                                >
                                    <i class="fa-solid fa-circle-info"></i> About
                                </a>

                                {/* Dropdown Menu */}
                                <div className="relative">
                                    <button
                                        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium active:bg-red-500"
                                        onClick={toggleDropdown} // Toggle dropdown on click
                                    >
                                        <i class="fa-solid fa-user"></i> Portfolio
                                    </button>
                                    {/* Dropdown Content */}
                                    {isDropdownOpen && (
                                        <div className="absolute left-0 mt-2 bg-gray-700 text-white rounded-md shadow-lg">
                                            <a
                                                href="/photos"
                                                className="block px-4 py-2 hover:bg-gray-600"
                                            >
                                                Photos
                                            </a>
                                            <a
                                                href="/videos"
                                                className="block px-4 py-2 hover:bg-gray-600"
                                            >
                                                Videos
                                            </a>

                                        </div>
                                    )}
                                </div>

                                <a
                                    href="/contact"
                                    className="text-white bg-blue-700 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium hover:ring-2 hover:ring-offset-2 hover:ring-orange-500"
                                >
                                    <i class="fa-solid fa-phone"></i> Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#"
                            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                        >
                            <i className="fa-solid fa-house mr-1"></i> Home
                        </a>
                        <a
                            href="#"
                            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                        >
                            <i class="fa-solid fa-circle-info"></i> About
                        </a>

                        {/* Mobile Dropdown */}
                        <div>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="text-white w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                            >
                                <i class="fa-solid fa-user"></i> Portfolio
                            </button>
                            {isDropdownOpen && (
                                <div className="ml-4 space-y-1">
                                    <a
                                        href="#"
                                        className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                                    >
                                        Photos
                                    </a>
                                    <a
                                        href="#"
                                        className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                                    >
                                        Videos
                                    </a>

                                </div>
                            )}
                        </div>

                        <a
                            href="#"
                            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 hover:ring-2 hover:ring-offset-2 hover:ring-orange-500"
                        >
                            <i class="fa-solid fa-phone"></i> Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )

}