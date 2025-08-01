import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FiltersBar = ({ matchCount, filters, setFilters }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const barRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (barRef.current && !barRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [openDropdown]);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };
  const handleRating = (val) => {
    setFilters((f) => ({ ...f, rating: val }));
    setOpenDropdown(null);
  };
  const handleLocation = (val) => {
    setFilters((f) => ({ ...f, location: val }));
    setOpenDropdown(null);
  };
  const handleResponse = (val) => {
    setFilters((f) => ({ ...f, response: val }));
    setOpenDropdown(null);
  };
  const handleSort = (val) => {
    setFilters((f) => ({ ...f, sort: val }));
    setOpenDropdown(null);
  };
  return (
    <div className="p-4" style={{ background: "#e6f7fc" }} ref={barRef}>
      <div className="flex flex-row items-center justify-between gap-3 flex-wrap">
        {/* Left group */}
        <div className="flex flex-row items-center gap-2 flex-wrap">
          {/* Ratings */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => toggleDropdown("ratings")}
              className="flex items-center px-2 py-2 bg-white border border-gray-300 rounded-lg text-sm font-normal text-black"
              style={{ minWidth: 90, height: 34 }}
            >
              {filters.rating === "5"
                ? "5 Stars"
                : filters.rating === "4"
                ? "4+ Stars"
                : filters.rating === "3"
                ? "3+ Stars"
                : "All ratings"}
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            {openDropdown === "ratings" && (
              <div className="absolute top-full left-0 mt-1 w-36 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <a
                  href="#"
                  onClick={() => handleRating("5")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  5 Stars
                </a>
                <a
                  href="#"
                  onClick={() => handleRating("4")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  4+ Stars
                </a>
                <a
                  href="#"
                  onClick={() => handleRating("3")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  3+ Stars
                </a>
                <a
                  href="#"
                  onClick={() => handleRating(null)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  All ratings
                </a>
              </div>
            )}
          </div>
          {/* Locations */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => toggleDropdown("locations")}
              className="flex items-center px-2 py-2 bg-white border border-gray-300 rounded-lg text-sm font-normal text-black"
              style={{ minWidth: 90, height: 34 }}
            >
              {filters.location === "5"
                ? "Within 5 miles"
                : filters.location === "10"
                ? "Within 10 miles"
                : filters.location === "multiple"
                ? "Multiple Locations"
                : "All locations"}
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            {openDropdown === "locations" && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <a
                  href="#"
                  onClick={() => handleLocation("5")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Within 5 miles
                </a>
                <a
                  href="#"
                  onClick={() => handleLocation("10")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Within 10 miles
                </a>
                <a
                  href="#"
                  onClick={() => handleLocation("multiple")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Multiple Locations
                </a>
                <a
                  href="#"
                  onClick={() => handleLocation(null)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  All locations
                </a>
              </div>
            )}
          </div>
          {/* Response Times */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => toggleDropdown("response")}
              className="flex items-center px-2 py-2 bg-white border border-gray-300 rounded-lg text-sm font-normal text-black"
              style={{ minWidth: 90, height: 34 }}
            >
              {filters.response === "quick"
                ? "Quick to respond"
                : filters.response === "1h"
                ? "Within 1 hour"
                : filters.response === "24h"
                ? "Within 24 hours"
                : "All response times"}
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            {openDropdown === "response" && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <a
                  href="#"
                  onClick={() => handleResponse("quick")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Quick to respond
                </a>
                <a
                  href="#"
                  onClick={() => handleResponse("1h")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Within 1 hour
                </a>
                <a
                  href="#"
                  onClick={() => handleResponse("24h")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Within 24 hours
                </a>
                <a
                  href="#"
                  onClick={() => handleResponse(null)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  All response times
                </a>
              </div>
            )}
          </div>
          {/* Match Count */}
          <span
            className="text-black font-bold text-base ml-2 whitespace-nowrap flex-shrink-0"
            style={{ alignSelf: "center" }}
          >
            {matchCount} matches
          </span>
        </div>
        {/* Sort */}
        <div className="relative flex-shrink-0 mt-2 md:mt-0">
          <button
            onClick={() => toggleDropdown("sort")}
            className="flex items-center px-2 py-2 bg-white border border-gray-300 rounded-lg text-sm font-normal text-black"
            style={{ minWidth: 110, height: 34 }}
          >
            {filters.sort === "highest"
              ? "Sort by: highest rated"
              : filters.sort === "reviews"
              ? "Sort by: most reviews"
              : "Sort by: best match"}
            <ChevronDownIcon className="ml-1 h-4 w-4" />
          </button>
          {openDropdown === "sort" && (
            <div className="absolute top-full right-0 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-50">
              <a
                href="#"
                onClick={() => handleSort("best")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Best match
              </a>
              <a
                href="#"
                onClick={() => handleSort("highest")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Highest rated
              </a>
              <a
                href="#"
                onClick={() => handleSort("reviews")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Most reviews
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
