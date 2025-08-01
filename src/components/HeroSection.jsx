import React from "react";

const Herosection = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex bg-white rounded-lg overflow-hidden shadow-sm gap-2">
        <button
          onClick={() => setActiveTab("matches")}
          className={`px-8 font-medium text-xl transition-colors ${
            activeTab === "matches"
              ? "bg-cyan-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          Your matches
        </button>
        <button
          onClick={() => setActiveTab("replies")}
          className={`px-8 font-medium text-xl transition-colors ${
            activeTab === "replies"
              ? "bg-cyan-500 text-white"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Replies
        </button>
      </div>
    </div>
  );
};

export default Herosection;
