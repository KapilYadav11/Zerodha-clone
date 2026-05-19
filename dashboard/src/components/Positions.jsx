import React, { useState, useEffect } from "react";
import axios from "axios";
//import { positions } from "../data/data"; // agar data file se lena ho toh iska use karenge aur allPositions ki jagah pr positions type karenge

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allPositions")
      .then((res) => {
        setAllPositions(res.data || []); 
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
      });
  }, []);

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      <h3 className="text-lg font-bold text-gray-800 tracking-tight">
        Positions ({allPositions.length})
      </h3>

      <div className="w-full overflow-x-auto border border-gray-100 rounded-lg bg-white shadow-sm">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-gray-400 font-semibold tracking-wider uppercase">
              <th className="p-3.5">Product</th>
              <th className="p-3.5">Instrument</th>
              <th className="p-3.5 text-right">Qty.</th>
              <th className="p-3.5 text-right">Avg. price</th>
              <th className="p-3.5 text-right">LTP</th>
              <th className="p-3.5 text-right">P&L</th>
              <th className="p-3.5 text-right">Chg.</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-gray-50 text-gray-700 font-medium">
            {allPositions.map((stock, index) => {
              const price = stock.price || 0;
              const qty = stock.qty || 0;
              const avg = stock.avg || 0;

              const curValue = price * qty;
              const isProfit = curValue - avg * qty >= 0;

              return (
                <tr key={index} className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-3.5 text-gray-500 font-semibold uppercase tracking-wider text-[10px]">
                    {stock.product}
                  </td>
                  <td className="p-3.5 text-gray-900 font-semibold">{stock.name}</td>
                  <td className="p-3.5 text-right text-gray-600">{qty}</td>
                  <td className="p-3.5 text-right text-gray-600">{avg.toFixed(2)}</td>
                  <td className="p-3.5 text-right text-gray-600">{price.toFixed(2)}</td>

                  <td
                    className={`p-3.5 text-right font-bold ${
                      isProfit ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {(curValue - avg * qty).toFixed(2)}
                  </td>

                  <td
                    className={`p-3.5 text-right ${
                      stock.isLoss ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {stock.day || "0.00%"}
                  </td>
                </tr>
              );
            })}

            {allPositions.length === 0 && (
              <tr>
                <td colSpan="7" className="p-8 text-center text-gray-400 font-medium">
                  No active intraday positions open for this trading session.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;