import React from "react";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 text-center py-12 border-b border-b-gray-200">
      <h1 className="text-4xl font-semibold text-gray-900 mb-3">
        Zerodha Products
      </h1>

      <h3 className="text-xl text-gray-600 mb-6">
        Sleek, modern, and intuitive trading platforms
      </h3>

      <p className="text-gray-600 text-lg text-center">
        Check out our{" "}
        <span className="inline-flex items-center gap-1.5 text-blue-500 hover:text-zinc-900 font-medium cursor-pointer transition-colors group">
          investment offerings
          <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
      </p>
    </div>
  );
};

export default Hero;
