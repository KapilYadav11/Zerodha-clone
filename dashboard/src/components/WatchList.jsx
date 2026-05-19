import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";
import BuyActionWindow from "./BuyActionWindow";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

const WatchList = () => {
  const generalContext = useContext(GeneralContext);

  return (
    <div className="w-[350px] min-w-[350px] h-full bg-white border-r border-gray-200 flex flex-col overflow-hidden select-none">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between gap-3">
        <input
          type="text"
          placeholder="Search eg: infy bse, nifty fut"
          className="flex-1 text-sm text-gray-700 outline-none placeholder-gray-400"
        />
        <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
          {watchlist.length} / 50
        </span>
      </div>

      <ul className="flex-1 overflow-y-auto divide-y divide-gray-50">
        {watchlist.map((stock, idx) => (
          <WatchListItem key={idx} stock={stock} />
        ))}
      </ul>

      {generalContext?.state?.isBuyWindowOpen && (
        <BuyActionWindow uid={generalContext.state.selectedStockUID} />
      )}
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      className="px-4 flex items-center justify-between relative cursor-pointer hover:bg-gray-50 transition-colors h-[65px] overflow-hidden"
    >
      <span
        className={`text-sm font-medium z-10 ${stock.isDown ? "text-red-500" : "text-green-500"}`}
      >
        {stock.name}
      </span>

      {!showActions && (
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-500 !text-sm" />
          ) : (
            <KeyboardArrowUp className="text-green-500 !text-sm" />
          )}
          <span className="font-medium text-gray-700">{stock.price}</span>
        </div>
      )}

      {showActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  if (!generalContext) return null;

  return (
    <div
      className="absolute inset-y-0 right-0 flex items-center gap-1.5 pr-4"
      style={{
        background:
          "linear-gradient(to right, transparent, #f9fafb 20%, #f9fafb 100%)",
        paddingLeft: "3rem",
      }}
    >
      <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            generalContext.openBuyWindow(uid);
          }}
          className="px-2.5 py-1 text-xs font-semibold text-white bg-blue-500 rounded shadow-sm hover:bg-blue-600 transition-colors"
        >
          B
        </button>
      </Tooltip>

      <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={(e) => e.stopPropagation()}
          className="px-2.5 py-1 text-xs font-semibold text-white bg-red-500 rounded shadow-sm hover:bg-red-600 transition-colors"
        >
          S
        </button>
      </Tooltip>

      <Tooltip title="Chart" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={(e) => e.stopPropagation()}
          className="p-1 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center"
        >
          <BarChartOutlined className="!text-lg" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={(e) => e.stopPropagation()}
          className="p-1 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center"
        >
          <MoreHoriz className="!text-lg" />
        </button>
      </Tooltip>
    </div>
  );
};

export default WatchList;