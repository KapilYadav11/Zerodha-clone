import React from "react";
import { MoveRight } from "lucide-react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  customClasses="",
}) => {
  return (
    <div className="container mx-auto px-4 py-38">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ml-30 ${customClasses}`}>
        <div className="p-6 text-center">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-semibold py-2">{productName}</h1>
          <p className="py-2 text-lg">{productDescription}</p>
          
          {/* Only render this container if at least one of the links exists */}
          {(tryDemo || learnMore) && (
            <div className="py-6 text-lg flex items-center gap-16">
              {tryDemo && (
                <a
                  className="inline-flex items-center gap-1.5 text-blue-500 hover:text-zinc-900 font-medium cursor-pointer transition-colors group"
                  href={tryDemo}
                >
                  Try Demo
                  <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              )}
              
              {learnMore && (
                <a
                  className="inline-flex items-center gap-1.5 text-blue-500 hover:text-zinc-900 font-medium cursor-pointer transition-colors group"
                  href={learnMore}
                >
                  Learn More
                  <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              )}
            </div>
          )}

          <div className={`inline-flex items-center gap-6" ${
            productName === "Varsity mobile" || productName === "Coin" ? "mt-14 gap-10" : "mt-0 " }
            `}>
            {googlePlay && (
              <a href={googlePlay}>
                <img src="media\images\googlePlayBadge.svg" alt="Google Play Badge" />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img src="media\images\appstoreBadge.svg" alt="App Store Badge" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;