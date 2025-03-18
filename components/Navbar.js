"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [animationPlayed, setAnimationPlayed] = useState(false);

    useEffect(() => {
        if (!animationPlayed) {
            setTimeout(() => {
                setDropdownOpen(true);
                setTimeout(() => {
                    setDropdownOpen(false);
                    setAnimationPlayed(true); // Ensure animation runs only once
                }, 3000);
            }, 3000);
        }
    }, [animationPlayed]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-gray-900 border-gray-800 fixed inset-x-0 top-0 z-50 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="plogo.png" className="h-14 w-32" alt="Logo" />
                </a>

                <div className="flex flex-col relative items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* Animated Button */}
                    <motion.button
                        type="button"
                        className="flex text-sm rounded-full p-1 md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        onClick={toggleDropdown}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <span className="sr-only">Open user menu</span>
                        <img className="w-10 h-10 rounded-full" src="contact2.png" alt="user photo" />
                    </motion.button>

                    {/* Dropdown Animation (Only Once) */}
                    <AnimatePresence>
                        {dropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="mt-2 absolute right-0 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                style={{ top: "100%", right: "0", width: "200px" }}
                            >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">Muhammad Usman</span>
                                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                                        <a href="/contact">digitalusman@gmail.com</a>
                                    </span>
                                </div>
                                <a href="https://wa.me/qr/OTYNDL2BZJZDE1">
                                    <button className="bg-green-500 text-white font-bold mx-4 my-2 py-2 px-4 rounded-md flex items-center shadow-lg hover:bg-green-600 transition">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" className="w-6 h-6 mr-2" />
                                        Chat with Us
                                    </button>
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <button
                    data-collapse-toggle="navbar-user"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-3xl text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm0 4h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1zm0 4h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1z" clipRule="evenodd"></path>
                    </svg>
                </button>

                <div className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900">
                        <li>
                            <a href="/" className="block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">About</a>
                        </li>
                        <li>
                            <a href="/services" className="block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
