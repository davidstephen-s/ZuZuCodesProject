import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const searchRef = useRef(null);
  const profileRef = useRef(null);

  // Close search/profile on outside click
  useEffect(() => {
    function handleClick(e) {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setSearchOpen(false);
        setProfileOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        searchOpen
      ) {
        setSearchOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target) &&
        profileOpen
      ) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [searchOpen, profileOpen]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <div className="text-cyan-500 font-bold text-xl">Localists</div>
                <div className="text-xs text-gray-500 -mt-1">
                  Find Local Professionals-Fast
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-cyan-500 font-medium text-sm"
            >
              My requests
            </a>
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center text-gray-700 hover:text-cyan-500 font-medium text-sm"
              >
                Our Services
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50 dropdown-menu">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Web Design
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Development
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Marketing
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search Icon and Animated Input */}
            <div className="relative" ref={searchRef}>
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-500 cursor-pointer hover:text-cyan-500 card-cta"
                onClick={() => setSearchOpen((v) => !v)}
              />
              {searchOpen && (
                <input
                  autoFocus
                  type="text"
                  placeholder="Search..."
                  className="absolute right-0 top-8 w-48 px-3 py-2 rounded-md border border-gray-200 shadow-md bg-white text-sm text-gray-700 animate-fade-in"
                  style={{
                    animation: "fadeIn .2s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              )}
            </div>
            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => setProfileOpen((v) => !v)}
              >
                <span className="text-gray-700 font-medium text-sm">
                  Chander
                </span>
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">C</span>
                </div>
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </div>
              {profileOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg border border-gray-200 bg-white z-50 overflow-hidden animate-fade-in"
                  style={{
                    animation: "fadeIn .2s cubic-bezier(0.4,0,0.2,1)",
                    boxShadow:
                      "0 0 0 8px #e3f6fc, 0 10px 15px -3px rgba(6,182,212,0.08)",
                  }}
                >
                  {/* Super Canvas Design */}
                  <div
                    style={{
                      background:
                        "radial-gradient(circle at 80% 20%, #8ed5ec 0%, #00afe3 100%)",
                      height: 60,
                    }}
                  />
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow">
                        <span className="text-white font-bold text-lg">C</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">
                          Chander
                        </div>
                        <div className="text-xs text-gray-500">
                          View Profile
                        </div>
                      </div>
                    </div>
                    <button className="w-full py-2 rounded-md bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors mb-2">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
        </div>
      </div>
    </header>
  );
};

export default Header;
