import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <div>
      <Hero />
      
      {/* Kite has everything */}
      <LeftSection
        imageURL="media\images\kite.png"
        productName="Kite"
        productDescription={
          <>
            Our ultra-fast flagship trading platform with <br /> streaming
            market data, advanced charts, an <br /> elegant UI, and more. Enjoy
            the Kite <br /> experience seamlessly on your Android and
            <br /> iOS devices.{" "}
          </>
        }
        tryDemo="https://kite-demo-url.com" 
        learnMore="https://kite-learn-url.com"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en-US"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      
      <RightSection />
      
      {/* Coin doesn't have tryDemo or learnMore, so we just omit them */}
      <LeftSection
        imageURL="media\images\coin.png"
        productName="Coin"
        productDescription={
          <>
            Buy direct mutual funds online, commission-
            <br />
            free, delivered directly to your Demat
            <br /> account. Enjoy the investment experience <br />
            on your Android and iOS devices.
          </>
        }
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554"
      />
      
      <RightSection />
      
      {/* Varsity mobile doesn't have them either */}
      <LeftSection
        imageURL="media\images\varsity.png"
        productName="Varsity mobile"
        productDescription={
          <>
            An easy to grasp, collection of stock market <br /> lessons with in-depth
            coverage and <br /> illustrations. Content is broken down into <br /> bite-size
            cards to help you learn on the go.
          </>
        }
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/zerodha-varsity/id1474610753"
        customClasses="px-14"
      />

      <Universe />
    </div>
  );
};

export default ProductPage;