import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <div>
      <Hero />

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

      <RightSection
        imageURL="media\images\console.png"
        productName="Console"
        productDescription={
          <>
            The central dashboard for your Zerodha
            <br /> account. Gain insights into your trades and <br />{" "}
            investments with in-depth reports and <br /> visualisations.
          </>
        }
        learnMore=""
      />

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

      <RightSection
        imageURL="media\images\kiteconnect.png"
        productName="Kite Connect API"
        productDescription={
          <>
            Build powerful trading platforms and <br />
            experiences with our super simple <br /> HTTP/JSON APIs. If you are
            a startup, build <br />
            your investment app and showcase it to our <br /> clientbase.
          </>
        }
        learnMore=""
      />

      <LeftSection
        imageURL="media\images\varsity.png"
        productName="Varsity mobile"
        productDescription={
          <>
            An easy to grasp, collection of stock market <br /> lessons with
            in-depth coverage and <br /> illustrations. Content is broken down
            into <br /> bite-size cards to help you learn on the go.
          </>
        }
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/zerodha-varsity/id1474610753"
        customClasses="px-14"
      />

      <div className="text-xl text-center">
        <p>
          Want to know more about our technology stack? Check out the{" "}
          <a
            className="inline-flex items-center gap-1.5 text-blue-500 hover:text-zinc-900 font-medium cursor-pointer transition-colors group"
            href="https://zerodha.tech/"
          >
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>

      <Universe />
    </div>
  );
};

export default ProductPage;
