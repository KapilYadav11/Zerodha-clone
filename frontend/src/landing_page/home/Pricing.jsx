import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pricing = () => {
  return (
    <div>
      <div className="flex justify-center  items-center">
        <div className=" flex gap-10 flex-col">
          <div className='mr-45'>
            <h2 className="text-3xl font-semibold mb-4">Unbeatable pricing</h2>
            <p  className="text-lg mb-8 text-gray-500" >
              We pioneered the concept of discount broking and price <br />
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a className='text-lg hover:text-black hover:scale-120 text-sky-900' href="">See pricing <FontAwesomeIcon icon="arrow-right-long" className='text-md' /></a>
          </div>
          <div>
            <img src="media/images/education.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-80">
          <div  className=" flex justify-center items-center w-45">
            <img src="media/images/pricingEquity.svg" alt="" />
            <img src="media/images/pricingMF.svg" alt="" />
            <img src="media/images/intradayTrades.svg" alt="" />
          </div>
          <div className=''>
            <h1 className='  mb-24 text-3xl'>Free and open market education</h1>
            <p>
              Varsity, the largest online stock market education book in the
              world <br /> covering everything from the basics to advanced trading.
            </p>

            <a href="">Varsity </a>
            <p>
              TradingQ&A, the most active trading and investment community in <br />
              India for all your market related queries.
            </p>
            <a href="">TradingQ&A</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
