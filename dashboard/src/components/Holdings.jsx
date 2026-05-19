import React, { useState, useEffect } from "react";
import axios from "axios";
import VerticalGraph from "./VerticalGraph";
//import { holdings } from "../data/data"; // agar data file se lena ho toh iska use karenge aur allHoldings ki jagah pr holdings type karenge 
const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setAllHoldings(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Name",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  }

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      <h3 className="text-lg font-bold text-gray-800 tracking-tight">
        Holdings ({allHoldings.length})
      </h3>

      <div className="w-full overflow-x-auto border border-gray-100 rounded-lg bg-white shadow-sm">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-gray-400 font-semibold tracking-wider uppercase">
              <th className="p-3.5">Instrument</th>
              <th className="p-3.5 text-right">Qty.</th>
              <th className="p-3.5 text-right">Avg. cost</th>
              <th className="p-3.5 text-right">LTP</th>
              <th className="p-3.5 text-right">Cur. val</th>
              <th className="p-3.5 text-right">P&L</th>
              <th className="p-3.5 text-right">Net chg.</th>
              <th className="p-3.5 text-right">Day chg.</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50 text-gray-700 font-medium">
            {allHoldings.map((stock, index) => {
              const price = stock.price || 0;
              const qty = stock.qty || 0;
              const avg = stock.avg || 0;

              const curValue = price * qty;
              const totalCost = avg * qty;
              const PnL = curValue - totalCost;
              const isProfit = PnL >= 0;

              return (
                <tr 
                  key={index}
                  className="hover:bg-gray-50/70 transition-colors"
                >
                  <td className="p-3.5 text-gray-900 font-semibold">
                    {stock.name}
                  </td>
                  <td className="p-3.5 text-right text-gray-600">{qty}</td>
                  <td className="p-3.5 text-right text-gray-600">
                    {avg.toFixed(2)}
                  </td>
                  <td className="p-3.5 text-right text-gray-600">
                    {price.toFixed(2)}
                  </td>
                  <td className="p-3.5 text-right text-gray-900">
                    {curValue.toFixed(2)}
                  </td>

                  <td
                    className={`p-3.5 text-right font-bold ${isProfit ? "text-green-600" : "text-red-600"}`}
                  >
                    {PnL.toFixed(2)}
                  </td>

                  <td
                    className={`p-3.5 text-right ${stock.net?.startsWith("-") ? "text-red-500" : "text-green-500"}`}
                  >
                    {stock.net || "0.00%"}
                  </td>

                  <td
                    className={`p-3.5 text-right ${stock.isLoss ? "text-red-500" : "text-green-500"}`}
                  >
                    {stock.day || "0.00%"}
                  </td>
                </tr>
              );
            })}

            {allHoldings.length === 0 && (
              <tr>
                <td
                  colSpan="8"
                  className="p-8 text-center text-gray-400 font-medium"
                >
                  No assets currently held in your portfolio.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
            Total investment
          </p>
          <h5 className="text-xl font-bold text-gray-800">
            29,875.
            <span className="text-xs font-semibold text-gray-500">15</span>
          </h5>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
            Current value
          </p>
          <h5 className="text-xl font-bold text-gray-800">
            31,407.
            <span className="text-xs font-semibold text-gray-500">00</span>
          </h5>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
            Total P&L
          </p>
          <h5 className="text-xl font-bold text-green-600">
            +1,531.85{" "}
            <span className="text-xs font-medium text-green-500">(+5.13%)</span>
          </h5>
        </div>
      </div>
      <VerticalGraph data={data} />
    </div>
  );
};

export default Holdings;
