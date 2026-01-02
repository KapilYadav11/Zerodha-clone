import React from "react";

const Stats = () => {
  return (
    <div div className='mt-40  '>
      <div className="flex justify-between items-center ">
        <div className="flex justify-center items-center ml-35 mb-30 ">
          <div className="flex gap-3 flex-col">
            <h1 className="text-3xl font-bold mb-1">Trust with confidence</h1>
            <h2 className="text-2xl font-semibold mt-1">Customer-first always</h2>
            <p className="text-lg mb-8 text-gray-500">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh<br></br>
              crores of equity investments, making us India’s largest broker;<br></br>
              contributing to 15% of daily retail exchange volumes in India.
            </p>
            <h2 className="text-2xl font-semibold mt-2">No spam or gimmicks</h2>
            <p className="text-lg mb-8 text-gray-500">
              No gimmicks, spam, "gamification", or annoying push notifications.<br></br>
              High quality apps that you use at your pace, the way you like. Our<br></br>
              philosophies.
            </p>
            <h2 className="text-2xl font-semibold">The <span className="text-sky-700">Zerodha</span> universe</h2>
            <p className="text-lg mb-8 text-gray-500">
              Not just an app, but a whole ecosystem. Our investments in 30+<br></br>
              fintech startups offer you tailored services specific to your<br></br>
              needs.
            </p>
            <h2 className="text-2xl font-semibold">Do better with money</h2>
            <p className="text-lg mb-6 text-gray-500">
              With initiatives like Nudge and Kill Switch, we don't just<br></br>
              facilitate transactions, but actively help you do better with your<br></br>
              money.
            </p>
          </div>
        </div>
        <div className="mr-35 mb-25 w-[50%] h-[75%]">
          <img src="media/images/ecosystem.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
