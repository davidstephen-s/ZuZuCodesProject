import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Herosection from "./HeroSection";
import FiltersBar from "./FiltersBar";
import RecommendedBanner from "./RecommendedBanner";
import Card from "./Card";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("matches");

  const [filters, setFilters] = useState({
    rating: null,
    location: null,
    response: null,
    sort: "best",
  });

  const matches = [
    {
      id: 1,
      company: "Starlink pvt. ltd",
      rating: 5,
      reviewCount: 125,
      location: "8.6 miles away",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      skills: ["Full website design", "Banner design", "New pages"],
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      verified: true,
      quickToRespond: true,
    },
    {
      id: 2,
      company: "Digital web pvt. ltd",
      rating: 5,
      reviewCount: 124,
      location: "Multiple Locations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      skills: ["Full website design", "Banner design", "New pages"],
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      verified: true,
      quickToRespond: true,
    },
    {
      id: 3,
      company: "Canva pvt. ltd",
      rating: 5,
      reviewCount: 120,
      location: "5.6 miles away",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      skills: ["Full website design", "Banner design", "New pages"],
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      verified: true,
      quickToRespond: true,
    },
    {
      id: 4,
      company: "Bees pvt. ltd",
      rating: 5,
      reviewCount: 121,
      location: "3.6 miles away",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      skills: ["Full website design", "Banner design", "New pages"],
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      verified: true,
      quickToRespond: true,
      highlighted: true,
    },
    {
      id: 5,
      company: "ABC pvt. ltd",
      rating: 5,
      reviewCount: 126,
      location: "Multiple Location",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      skills: ["Full website design", "Banner design", "New pages"],
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      verified: true,
      quickToRespond: true,
    },
  ];
  const filteredMatches = matches
    .filter((m) => {
      // Rating filter
      if (filters.rating) {
        const ratingNum = Number(filters.rating);
        if (m.rating < ratingNum) return false;
      }
      // Location filter
      if (filters.location) {
        if (filters.location === "multiple") {
          if (!m.location.toLowerCase().includes("multiple")) return false;
        } else if (!m.location.includes(filters.location)) {
          return false;
        }
      }
      // Response filter
      if (filters.response) {
        if (filters.response === "quick" && !m.quickToRespond) return false;
        // Add more response logic if you have responseTime property
      }
      return true;
    })
    .sort((a, b) => {
      if (filters.sort === "highest") {
        return b.rating - a.rating;
      }
      if (filters.sort === "reviews") {
        return b.reviewCount - a.reviewCount;
      }
      // Default: best match (no sorting or custom logic)
      return 0;
    });
  return (
    <>
      <Helmet>
        <title>Web Designer - Find Local Professionals Fast | Localists</title>
        <meta
          name="description"
          content="Find top 5 expert professional web designers waiting. Get matched with the right professional for your project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Back Button - Desktop */}
        <div className="mb-6 card-cta">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
            Back
          </button>
        </div>

        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Web Designer
          </h1>
          <p className="text-gray-600 text-sm mb-6 px-4 hidden-true">
            Your Top 5 local professional matches are below. You can contact any
            of the professionals to get more information using the contact
            button.
          </p>
        </div>

        {/* Tab Navigation */}
        <Herosection activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Filters Bar */}
        <FiltersBar
          matchCount={filteredMatches.length}
          filters={filters}
          setFilters={setFilters}
        />

        {/* Recommended Banner */}
        <RecommendedBanner />

        {/* Match Cards */}
        <div className="space-y-4 mb-8">
          {filteredMatches.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              No result found.
            </div>
          ) : (
            filteredMatches.map((match) => (
              <Card key={match.id} match={match} />
            ))
          )}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            See More Professionals
          </button>
        </div>
      </main>
    </>
  );
};

export default MainContent;
