import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      
      <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-between">
        <p className="text-xs font-medium text-gray-500">
          Instant, zero-cost fund transfers with UPI or Netbanking.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="#"
          className="px-5 py-2 text-xs font-bold tracking-wide uppercase text-white bg-green-500 rounded shadow-sm hover:bg-green-600 active:bg-green-700 transition-colors"
        >
          Add funds
        </Link>

        <Link
          to="#"
          className="px-5 py-2 text-xs font-bold tracking-wide uppercase text-white bg-blue-500 rounded shadow-sm hover:bg-blue-600 active:bg-blue-700 transition-colors"
        >
          Withdraw
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">

        <div className="border border-gray-100 rounded-lg bg-white shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Equity Account</p>
          </div>

          <div className="p-4 divide-y divide-gray-50 text-xs font-medium text-gray-700">
            <div className="flex justify-between py-2.5">
              <span className="text-gray-400">Available margin</span>
              <span className="text-gray-900 font-bold">3,982.50</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-gray-400">Used margin</span>
              <span className="text-gray-500">0.00</span>
            </div>
            <div className="flex justify-between py-2.5 pt-3">
              <span className="text-gray-400 font-semibold text-gray-900">Available cash</span>
              <span className="text-blue-600 font-extrabold text-sm">3,982.50</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-100 rounded-lg bg-white shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Commodity Account</p>
          </div>

          <div className="p-4 divide-y divide-gray-50 text-xs font-medium text-gray-700">
            <div className="flex justify-between py-2.5">
              <span className="text-gray-400">Available margin</span>
              <span className="text-gray-900 font-bold">0.00</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-gray-400">Used margin</span>
              <span className="text-gray-500">0.00</span>
            </div>
            <div className="flex justify-between py-2.5 pt-3">
              <span className="text-gray-400 font-semibold text-gray-900">Available cash</span>
              <span className="text-gray-400 font-bold text-sm">0.00</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Funds;