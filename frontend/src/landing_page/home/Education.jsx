import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = () => {
  return (
    <div className="mb-35">
      <div className="flex justify-center gap-25 mt-35">
        <div>
          <img src="media\images\education.svg" alt="" />
        </div>
        <div className="mt-20 flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">Free and open market education</h1>
          <p className="text-gray-500 text-lg">
            Varsity, the largest online stock market education book in the world
            <br />
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="text-lg text-blue-500 hover:text-black hover:scale-100">Varsity <FontAwesomeIcon icon="arrow-right-long" /></a>
          <p className="text-gray-500 text-lg">
            TradingQ&A, the most active trading and investment community in <br />
            India for all your market related queries.
          </p>
          <a href=""  className="text-lg text-blue-500 hover:text-black hover:scale-100">TradingQ&A <FontAwesomeIcon icon="arrow-right-long" /></a>
        </div>
      </div>
    </div>
  );
};

export default Education;
