import React, { useState } from "react";
import olxLogo from "../assets/olx-logo.png";
import lens from "../assets/lens.png";
import arrow from "../assets/arrow.png";
import { Menu, X } from "lucide-react"; // Icons for toggle menu
import Login from "./Login";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between p-4 bg-[#EFF1F3] border-b border-gray-200 relative">
                {/* Left Section: Logo */}
                <div className="flex items-center">
                    <img src={olxLogo} alt="OLX Logo" className="w-10 h-auto" />
                </div>

                {/* Search Bar (Visible on all screen sizes) */}
                <div className="flex-grow flex items-center border border-gray-300 rounded-md mx-3 sm:mx-5">
                    <input
                        type="text"
                        placeholder="Search 'Properties'"
                        className="w-full px-3 py-2 text-sm text-gray-700 focus:outline-none rounded-md"
                    />
                    <img src={lens} alt="Search" className="w-5 h-5 mx-2" />
                </div>

                {/* Desktop & Tablet: Additional Items */}
                <div className="hidden sm:flex items-center space-x-4">
                    {/* Location Dropdown */}
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 hidden md:flex">
                        <span className="text-gray-700 text-sm font-medium">India</span>
                        <img src={arrow} alt="Arrow" className="w-4 h-4 ml-1" />
                    </div>

                    {/* Login Link */}
                    <a
                        onClick={() => setOpenLogin(true)} href="#"
                        className="text-gray-700 text-sm font-medium underline hidden md:block"
                    >
                        Login
                    </a>

                    {/* Sell Button (Hidden in Mobile & Tablet) */}
                    <button className="hidden lg:flex items-center bg-blue-200 text-blue-900 font-bold text-sm px-3 py-2 rounded-full border-2 border-cyan-400 hover:bg-yellow-500">
                        <span className="mr-1 text-lg">+</span>
                        <span>SELL</span>
                    </button>
                </div>

                {/* Mobile: Menu Toggle Button */}
                <button
                    className="block sm:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <X className="w-6 h-6 text-gray-700" />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-700" />
                    )}
                </button>

                {/* Mobile Menu Content (Above Everything) */}
                {menuOpen && (
                    <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 w-40 flex flex-col items-center space-y-3 sm:hidden z-5">
                        <a
                            onClick={() => setOpenLogin(true)}
                            href="#"
                            className="text-gray-700 text-sm font-medium underline"
                        >
                            Login
                        </a>
                        <button className="bg-blue-200 text-blue-900 font-bold text-sm px-3 py-2 rounded-full border-2 border-cyan-400 hover:bg-yellow-500">
                            <span className="mr-1 text-lg">+</span>
                            <span>SELL</span>
                        </button>
                    </div>
                )}
            </nav>
            {openLogin ? <Login setOpenLogin ={setOpenLogin} /> : <></>}
            
        </>
    );
};

export default Navbar;
