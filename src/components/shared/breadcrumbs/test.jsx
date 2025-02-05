import { useState } from "react";
import { FaArrowsLeftRight } from "react-icons/fa6";

export default function FlightSearchBar() {
  const [from, setFrom] = useState("Riyadh");
  const [to, setTo] = useState("");

  return (
    <div className="relative flex items-center bg-[#2D2D2D] p-2 rounded-lg w-full max-w-lg border border-gray-500">
      {/* From Input */}
      <div className="flex-1 relative">
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          className="w-full px-4 py-3 bg-[#2D2D2D] text-white border border-gray-500 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <span className="absolute left-3 top-3 text-gray-300">⭕</span>
      </div>

      {/* Swap Button */}
      <div className="relative w-12 h-12 flex items-center justify-center bg-[#3A3A3A] rounded-full border border-gray-500 -mx-6 z-10">
        <FaArrowsLeftRight className="text-gray-300" size={20} />
      </div>

      {/* To Input */}
      <div className="flex-1 relative">
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Where to?"
          className="w-full px-4 ml-3 py-3 bg-[#2D2D2D] text-white border border-gray-500 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-300"
        />
        <span className="absolute left-3 top-3 text-gray-300">📍</span>
      </div>
    </div>
  );
}
