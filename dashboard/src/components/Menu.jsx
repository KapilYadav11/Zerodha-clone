import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
    { name: "Apps", path: "/apps" },
  ];

  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-4 select-none">
      <div className="flex items-center gap-8">
        <img src="media\kite-logo.svg" className="w-7 h-7 object-contain" alt="logo" />
        <ul className="flex items-center gap-6">
          {links.map((link, idx) => {
            const isActive = currentPath === link.path;
            return (
              <li key={idx}>
                <Link
                  to={link.path}
                  className={`text-sm pb-[11px] block border-b-2 transition-all ${
                    isActive
                      ? "border-blue-500 text-blue-500 font-medium"
                      : "border-transparent text-gray-500 hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;