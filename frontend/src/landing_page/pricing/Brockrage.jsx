import React from "react";

const brokerageData = [
  {
    charge: "Brokerage",
    delivery: "Zero Brokerage",
    intraday: "0.03% or ₹20/order (whichever is lower)",
    futures: "0.03% or ₹20/order (whichever is lower)",
    options: "Flat ₹20 per executed order",
    highlight: true,
  },
  {
    charge: "STT / CTT",
    delivery: "0.1% on buy & sell",
    intraday: "0.025% on sell side",
    futures: "0.05% on sell side",
    options: "0.15% on exercised options & sell side premium",
  },
  {
    charge: "Transaction Charges",
    delivery: "NSE: 0.00307% | BSE: 0.00375%",
    intraday: "NSE: 0.00307% | BSE: 0.00375%",
    futures: "NSE: 0.00183% | BSE: 0",
    options: "NSE: 0.03553% | BSE: 0.0325%",
  },
  {
    charge: "GST",
    delivery: "18% on brokerage + SEBI charges + transaction charges",
    intraday: "18% on brokerage + SEBI charges + transaction charges",
    futures: "18% on brokerage + SEBI charges + transaction charges",
    options: "18% on brokerage + SEBI charges + transaction charges",
  },
  {
    charge: "SEBI Charges",
    delivery: "₹10 / crore",
    intraday: "₹10 / crore",
    futures: "₹10 / crore",
    options: "₹10 / crore",
  },
  {
    charge: "Stamp Charges",
    delivery: "0.015% or ₹1500/crore (buy side)",
    intraday: "0.003% or ₹300/crore (buy side)",
    futures: "0.002% or ₹200/crore (buy side)",
    options: "0.003% or ₹300/crore (buy side)",
  },
];

const headers = [
  "Charges",
  "Equity Delivery",
  "Equity Intraday",
  "F&O - Futures",
  "F&O - Options",
];

const accountOpeningCharges = [
  {
    type: "Online account",
    charge: "Free",
    highlight: true,
  },
  {
    type: "Offline account",
    charge: "Free",
    highlight: true,
  },
  {
    type: "NRI account (offline only)",
    charge: "₹ 500",
  },
  {
    type: "Partnership, LLP, HUF, or Corporate accounts (offline only)",
    charge: "₹ 500",
  },
];

const Brockrage = () => {
  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Brokerage Charges
          </h2>

          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Transparent pricing structure for all trading segments.
          </p>
        </div>

        <div className="hidden lg:block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-100">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-orange-50 to-white border-b border-gray-200">
                {headers.map((header, index) => (
                  <th
                    key={header}
                    className={`px-6 py-5 text-sm font-semibold uppercase tracking-wider text-gray-700 ${
                      index === 0 ? "text-left" : "text-center"
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {brokerageData.map((item, index) => (
                <tr
                  key={item.charge}
                  className={`transition-all duration-200 hover:bg-orange-50/40 ${
                    index !== brokerageData.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <td className="px-6 py-6 font-semibold text-gray-900">
                    {item.charge}
                  </td>

                  <td className="px-6 py-6 text-center text-gray-700 bg-orange-50/20">
                    <span
                      className={
                        item.highlight
                          ? "font-semibold text-emerald-600"
                          : ""
                      }
                    >
                      {item.delivery}
                    </span>
                  </td>

                  <td className="px-6 py-6 text-center text-gray-700">
                    {item.intraday}
                  </td>

                  <td className="px-6 py-6 text-center text-gray-700">
                    {item.futures}
                  </td>

                  <td className="px-6 py-6 text-center text-gray-700">
                    {item.options}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-5 lg:hidden">
          {brokerageData.map((item) => (
            <div
              key={item.charge}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              <div className="bg-orange-50 px-5 py-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.charge}
                </h3>
              </div>

              <div className="divide-y divide-gray-100 text-sm">
                <div className="flex items-start justify-between gap-4 px-5 py-4">
                  <span className="font-medium text-gray-500">
                    Equity Delivery
                  </span>

                  <span className="text-right text-gray-800 font-medium">
                    {item.delivery}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 px-5 py-4">
                  <span className="font-medium text-gray-500">
                    Equity Intraday
                  </span>

                  <span className="text-right text-gray-800">
                    {item.intraday}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 px-5 py-4">
                  <span className="font-medium text-gray-500">
                    F&O Futures
                  </span>

                  <span className="text-right text-gray-800">
                    {item.futures}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 px-5 py-4">
                  <span className="font-medium text-gray-500">
                    F&O Options
                  </span>

                  <span className="text-right text-gray-800">
                    {item.options}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Charges for Account Opening
            </h2>

            <p className="mt-3 text-gray-500 text-sm md:text-base">
              Simple and transparent account opening fees.
            </p>
          </div>

          <div className="hidden md:block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-100">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-orange-50 to-white border-b border-gray-200">
                  <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
                    Type of Account
                  </th>

                  <th className="px-6 py-5 text-center text-sm font-semibold uppercase tracking-wider text-gray-700">
                    Charges
                  </th>
                </tr>
              </thead>

              <tbody>
                {accountOpeningCharges.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-orange-50/30 transition-all duration-200"
                  >
                    <td className="px-6 py-5 text-gray-800 font-medium">
                      {item.type}
                    </td>

                    <td className="px-6 py-5 text-center">
                      <span
                        className={`font-semibold ${
                          item.highlight
                            ? "text-emerald-600"
                            : "text-gray-800"
                        }`}
                      >
                        {item.charge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 md:hidden">
            {accountOpeningCharges.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5"
              >
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Type of Account
                    </p>

                    <h3 className="mt-1 text-base font-semibold text-gray-900">
                      {item.type}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-sm font-medium text-gray-500">
                      Charges
                    </span>

                    <span
                      className={`text-base font-bold ${
                        item.highlight
                          ? "text-emerald-600"
                          : "text-gray-900"
                      }`}
                    >
                      {item.charge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brockrage;