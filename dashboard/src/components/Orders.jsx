import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="w-full py-20 flex items-center justify-center animate-in fade-in duration-300">
      <div className="text-center space-y-4 max-w-sm">
        <div className="mx-auto w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 mb-2">
          📦
        </div>

        <p className="text-gray-500 font-medium text-sm">
          You haven't placed any orders today
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-2 text-xs font-bold tracking-wide uppercase text-white bg-blue-500 rounded shadow-sm hover:bg-blue-600 active:bg-blue-700 transition-colors"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;