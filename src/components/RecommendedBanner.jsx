import React from "react";

const RecommendedBanner = () => {
  return (
    <div className="">
      <div className="bg-cyan-gradient p-6 mb-6">
        <div className="flex md:flex-row md:items-center justify-center gap-4 text-3xl">
          <div className="text-white">
            <span className="text-yellow-300 font-bold">Recommended:</span>
            <span className="ml-1">Request replies from your </span>
            <span className="font-bold">top 5 matches</span>
            <span> to hear back faster</span>
          </div>
          <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap card-cta">
            Request your best matches here
          </button>
        </div>
      </div>
      <div className="text-center mb-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Request your best matches here
        </button>
      </div>
    </div>
  );
};

export default RecommendedBanner;
