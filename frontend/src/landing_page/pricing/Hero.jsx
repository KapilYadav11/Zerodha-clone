import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-22 text-center">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-3 text-zinc-500">Charges</h1>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          List of all Charges and Taxes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-7xl mx-auto">
        <div className="p-6 flex flex-col items-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src="media\images\pricing0.svg" alt="" />
            <h1 className="text-2xl font-semibold">Free equity delivery</h1>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="p-6 flex flex-col items-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src="media\images\intradayTrades.svg" alt="" />
            <h1 className="text-2xl font-semibold">Intraday and F&O trades</h1>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="p-6 flex flex-col items-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src="media\images\pricingMF.svg" alt="" />
            <h1 className="text-2xl font-semibold">Free direct MF</h1>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
