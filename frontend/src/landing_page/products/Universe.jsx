import React from "react";

const Universe = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-3 text-gray-800">The Zerodha Universe</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      {/* 3-Column Grid for Partner Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
        {/* Card 1 */}
        <div className="p-6 flex flex-col items-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" className="h-12 object-contain mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 flex flex-col items-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img src="media/images/sensibullLogo.svg" alt="Sensibull" className="h-12 object-contain mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Options trading platform that lets you create strategies, analyze positions, and examine data point like open interest, FII/DII, and more.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 flex flex-col items-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img src="media/images/tijori.svg" alt="Tijori" className="h-12 object-contain mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 flex flex-col items-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img src="media/images/streakLogo.png" alt="Streak" className="h-12 object-contain mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Systematic trading platform that allows you to create and backtest strtategies without coding.
          </p>
        </div>

        {/* Card 5 */}
        <div className="p-6 flex flex-col items-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase" className="h-12 object-contain mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Thematic investing paltform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>

        {/* Card 6 */}
        <div className="p-6 flex flex-col items-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img src="media/images/dittoLogo.png" alt="Ditto Insurance" className="h-12 object-contain mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Personalized advice on life and health insurance. No spam and no mis-leading.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Universe;