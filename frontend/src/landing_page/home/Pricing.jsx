import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pricing = () => {
  return (
    <div>
      <div  className="flex justify-between items-center ">
        <div className="px-35 mt-10 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold ">Unbeatable pricing</h2>
          <p className="text-lg  text-gray-500">
            We pioneered the concept of discount broking and price <br />
            transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="text-sky-900 text-lg h-6 hover:text-black hover:scale-100">See Pricing <FontAwesomeIcon icon="arrow-right-long" /></a>
        </div>
        <div className="mr-135 flex  w-50">
          <img src="media/images/pricingEquity.svg" alt="" />
          <img src="media/images/pricingMF.svg" alt="" />
          <img src="media/images/intradayTrades.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
