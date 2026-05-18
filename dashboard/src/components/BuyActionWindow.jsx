import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext"; 

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      alert("Order placed successfully!");
      closeBuyWindow(); 
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleCancelClick = () => {
    setStockQuantity(1);
    setStockPrice(0.0);
    closeBuyWindow(); 
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white border border-gray-100 rounded-xl shadow-2xl p-5 space-y-4 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
      
    
      <div className="border-b border-gray-50 pb-2">
        <h2 className="text-sm font-bold text-gray-800 tracking-wide">
          Regular Order <span className="text-blue-500 font-extrabold ml-1">{uid}</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
       
        <div>
          <label className="text-xs font-semibold text-gray-400 block mb-1">Qty.</label>
          <input
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(Number(e.target.value))}
            className="w-full px-3 py-1.5 border border-gray-200 rounded text-sm outline-none focus:border-blue-400 font-medium text-gray-700"
            min="1"
          />
        </div>

       
        <div>
          <label className="text-xs font-semibold text-gray-400 block mb-1">Price</label>
          <input
            type="number"
            step="0.05"
            value={stockPrice}
            onChange={(e) => setStockPrice(Number(e.target.value))}
            className="w-full px-3 py-1.5 border border-gray-200 rounded text-sm outline-none focus:border-blue-400 font-medium text-gray-700"
          />
        </div>
      </div>

     
      <div className="flex gap-2.5 pt-1">
        <button
          onClick={handleBuyClick}
          className="flex-1 bg-blue-500 text-white py-2 rounded text-xs font-bold shadow-md hover:bg-blue-600 active:bg-blue-700 transition-colors"
        >
          BUY
        </button>

        <button
          onClick={handleCancelClick}
          className="flex-1 bg-gray-100 text-gray-600 py-2 rounded text-xs font-bold hover:bg-gray-200 active:bg-gray-300 transition-colors"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;