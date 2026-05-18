import React from "react";

const Summary = () => {
  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">

     
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Hi, User
        </h1>
        <hr className="mt-4 border-gray-100" />
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-2">

       
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Equity</p>
            <h3 className="text-3xl font-bold text-gray-800">3.98k</h3>
            <p className="text-xs text-gray-400 font-medium">
              Margin available: <span className="text-gray-700">3.98k</span>
            </p>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-1 text-sm text-gray-600 font-medium">
            <p className="flex justify-between max-w-xs">
              <span className="text-gray-400">Current value:</span> 4.15k
            </p>
            <p className="flex justify-between max-w-xs">
              <span className="text-gray-400">Investment:</span> 3.98k
            </p>
          </div>
        </div>

       
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Commodity</p>
            <h3 className="text-3xl font-bold text-gray-800 text-gray-300">0.00</h3>
            <p className="text-xs text-gray-400 font-medium">
              Margin available: <span className="text-gray-700">0.00</span>
            </p>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-1 text-sm text-gray-600 font-medium">
            <p className="flex justify-between max-w-xs">
              <span className="text-gray-400">Current value:</span> 0.00
            </p>
            <p className="flex justify-between max-w-xs">
              <span className="text-gray-400">Investment:</span> 0.00
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Summary;