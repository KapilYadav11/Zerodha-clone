import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center gap-5 mt-8">
        <div>
          <h1 className="text-2xl">
            We pionered the discount broking model in <span>India</span> <br />
            Now, we are breaking ground with our technology
          </h1>{" "}
          <br /> <br />
        </div>
      </div>
      <div>
        <div className="border-t-orange-800 flex gap-12 align-middle ml-90 text-lg text-gray-500 fs-6">
          <div>
            <p>
              We kick started operations on the 15th august 2010 <br /> with the
              goal of breaking all barriers that traders and
              <br /> investors face in India in terms of cost, support, and{" "}
              <br /> techology. We named the company{" "}
              <span className="text-blue-500">Zerodha</span>, a <br />{" "}
              combination of <span className="text-blue-500">"Zero" </span>and{" "}
              <span className="text-blue-500">"Rodha"</span>, the Sanskrit word
              for <br /> barrier
              <br />
              <br />
              Today, our disruptive pricing models and in house <br />
              technology have made us the biggest stock broker in <br />{" "}
              <span className="text-blue-500">India</span>.
              <br />
              <br />
              
              Over 1+ Crore client place millions of orders evreyday <br />{" "}
              through our powerful ecosystem of investment
              <br /> platforms, contributing over 15% of all{" "}
              <span className="text-blue-500">Indian</span> retail <br />{" "}
              trading volumes
            </p>
          </div>
          <div>
            <p>
              In addition, we run a number of popular open online
              <br /> educational and community initiatives to empower retail
              <br /> traders and investors.
              <br />
              <br />
              
              <a className="text-blue-500" href="https://rainmatter.com/">Rainmatter</a>, our fintech fund and incubator, has invested <br />
              in several fintech startups with the goal of growing the
              <br /> Indian capital markets
              <br />
              <br />
              
              And yet, we are always up to something new every day.<br /> Catch up on
              the latest updates on our blog or see what<br /> the media is saying
              about us or learn more about our <br />business and product
              philosophies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
