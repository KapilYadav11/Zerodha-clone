import React from "react";

const TopBar = () => {
  return (
    <div className="w-full h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-6 z-50 select-none">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-gray-400">NIFTY 50</span>
          <span className="font-bold text-gray-800">18,245.30</span>
          <span className="text-green-500 font-medium">+0.42%</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-gray-400">SENSEX</span>
          <span className="font-bold text-gray-800">61,729.68</span>
          <span className="text-green-500 font-medium">+0.39%</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-500 border border-blue-200">
          KY
        </div>
        <span className="text-xs font-medium text-gray-600 tracking-wider">USERID</span>
      </div>
    </div>
  );
};

export default TopBar;