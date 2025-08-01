import React from "react";
import {
  CheckCircleIcon,
  StarIcon,
  MapPinIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import { SparklesIcon } from "@heroicons/react/24/outline";

const Card = ({ match }) => {
  // Only show the first skill on mobile
  const firstSkill = match.skills?.[0];

  return (
    <div className="w-full bg-white flex flex-row justify-between card-root">
      {/* Main Content */}
      <div className="flex w-full px-6 py-4 gap-6 border-b border-gray-300 bg-white items-stretch card-main">
        {/* Mobile Row 1: Image left, company/location right, centered */}
        <div className="hidden card-row1-mobile">
          <div className="card-img-mobile">
            <img src={match.image} alt="workspace" className="card-img" />
          </div>
          <div className="card-companyloc-mobile">
            <div className="card-company-mobile">
              <CheckCircleIcon className="h-5 w-5 text-[#1CDD0A]" />
              <h3 className="text-base font-bold text-gray-900">
                {match.company}
              </h3>
            </div>
            <div className="card-location-mobile">
              <MapPinIcon className="h-4 w-4 mr-1" />
              {match.location}
            </div>
          </div>
        </div>
        {/* Desktop: Image left */}
        <div className="w-[270px] flex-shrink-0 md:block card-hidden">
          <img
            src={match.image}
            alt="workspace"
            className="w-full h-full object-cover card-img"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 overflow-hidden gap-6 card-content">
          {/* Mobile Row 2: Skill left, rating/review right */}
          <div className="hidden card-row2-mobile">
            <div className="card-skills-mobile">
              <span className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-full bg-white card-skill">
                {firstSkill}
              </span>
            </div>
            <div className="card-rating-mobile">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-6 w-6 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-bold text-gray-800">
                {match.reviewCount}
              </span>
            </div>
          </div>
          {/* Desktop: Header */}
          <div className="flex justify-between items-start flex-wrap card-header-mobile md:flex card-cta">
            <div>
              <div className="flex items-center gap-2 card-company-mobile">
                <CheckCircleIcon className="h-5 w-5 text-[#1CDD0A]" />
                <h3 className="text-base font-bold text-gray-900">
                  {match.company}
                </h3>
              </div>
              <div className="flex items-center text-sm text-gray-700 card-location-mobile">
                <MapPinIcon className="h-4 w-4 mr-1" />
                {match.location}
              </div>
            </div>
            {/* Rating */}
            <div className="flex items-center gap-2 card-rating-mobile">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-6 w-6 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-bold text-gray-800">
                {match.reviewCount}
              </span>
            </div>
          </div>
          {/* Desktop: Tags */}
          <div className="flex flex-wrap gap-2 card-cta md:flex">
            {match.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-full bg-white md:text-xs md:px-2 md:py-0.5"
              >
                {skill}
              </span>
            ))}
            <span className="hidden md:inline">
              {match.skills.slice(1).map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-full bg-white"
                >
                  {skill}
                </span>
              ))}
            </span>
          </div>
          {/* Mobile Row 3: Description */}
          <p className="text-sm text-gray-600 line-clamp-2 card-desc-mobile">
            {match.description}
          </p>
          {/* Mobile Row 4: View Profile left, quick to respond right */}
          <div className="hidden card-footer-mobile card-cta">
            <a
              href="#"
              className="text-cyan-600 font-semibold text-sm hover:underline"
            >
              View Profile →
            </a>
            {match.quickToRespond && (
              <span className="flex items-center gap-1 bg-[#d7e8eb] px-3 py-1 rounded-full text-xs text-gray-600">
                <SparklesIcon className="h-4 w-4 text-gray-500" />
                Quick to respond
              </span>
            )}
          </div>
          {/* Desktop: Footer */}
          <div className="flex justify-between items-center md:flex card-hidden">
            <a
              href="#"
              className="text-cyan-600 font-semibold text-sm hover:underline"
            >
              View Profile →
            </a>
            {match.quickToRespond && (
              <span className="flex items-center gap-1 bg-[#d7e8eb] px-3 py-1 rounded-full text-xs text-gray-600">
                <SparklesIcon className="h-4 w-4 text-gray-500" />
                Quick to respond
              </span>
            )}
          </div>
        </div>
      </div>
      {/* Desktop CTA Section */}
      <div className="w-[308px] bg-[#E3F6FC] flex flex-col items-center justify-center px-4 py-6 gap-3 card-cta">
        <div className="w-6 h-6 bg-[#1CDD0A] flex items-center justify-center rounded-sm card-cta-icon">
          <CheckIcon className="w-4 h-4 text-white" />
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold px-6 py-2 rounded-md transition card-cta-btn">
          Request reply
        </button>
      </div>
      {/* Mobile CTA Row */}
      <div className="flex items-center justify-center mb-4">
        <div className="card-cta-box-mobile">
          <div className="w-6 h-6 bg-[#1CDD0A] flex items-center justify-center rounded-sm mr-2">
            <CheckIcon className="w-4 h-4 text-white" />
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-base font-semibold px-6 py-3 rounded-md transition w-full">
            Request reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
