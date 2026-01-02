import React from 'react'

const Awards = () => {
  return (
    <div className='mt-40  '>
      <div className='ml-12 flex justify-between items-center '>
        <div className='ml-22'>
          <img src="media/images/largestBroker.svg" alt="" />
        </div>
        <div className='m-10 flex justify-between items-center gap-6 flex-col'>
          <div className='mr-30'>
            <h1 className='font-semibold text-3xl mr-18'>Largest Stock broker in <span className='font-bold text-orange-300'> India</span></h1>
          </div>
          <div>
            <p className='text-lg font-semibold mb-14 mr-20'>2+ million Zerodha clients contribute to over 15% of  all retail <br></br> order volumens in India daily by trading and investing in:</p>
          </div>
          <div className='flex justify-center items-center mr-14 gap-18 text-lg'>
            <div>
              <ul className='list-disc pl-5 space-y-1 text-gray-700'>
                <li>Future and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div  className="">
              <ul className='list-disc pl-5 space-y-1 text-gray-700'>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards