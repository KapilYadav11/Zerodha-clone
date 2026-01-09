import React from 'react'

const footer = () => {
  return (
    <div className='mt-40 py-8  gap-60 shadow-[0_10px_20px_rgba(0,0,0,0.1) bg-gray-50 rounded'>
      <div className='flex justify-center   '>
        <div>
          <img src="media/images/logo.svg" className='w-[35%] ml-35 py-3' alt="" />
          <p className='text-sm px-35 text-gray-500 whitespace-nowrap'>&copy; 2010 - 2025, Zerodha Broking Ltd. <br />

All rights reserved</p>
        </div>
        <div className='flex flex-col gap-2 whitespace-nowrap mr-20'>
          <h1 className='text-black text-2xl '>Account</h1>
          <a href='' className='text-gray-500'> Open demat account</a>
          <a href=''className='text-gray-500' > Minor demat account</a>
          <a href='' className='text-gray-500'> NRI demat account</a>
          <a href=''className='text-gray-500' > Commodity</a>
          <a href=''className='text-gray-500' > Dematerialisation</a>
          <a href=''className='text-gray-500' > Fund transfer</a>
          <a href='' className='text-gray-500'> MTF</a>
          <a href='' className='text-gray-500' > Referral program</a>
        </div>
        <div className='flex flex-col gap-2 whitespace-nowrap mr-20'>
          <h1  className='text-black text-2xl '>Support</h1>
          <a href='' className='text-gray-500' >Contact us</a>
          <a href='' className='text-gray-500' >Support portal</a>
          <a href='' className='text-gray-500' >How to file a complaint?</a>
          <a href='' className='text-gray-500' >Status of your complaints</a>
          <a href='' className='text-gray-500'>Bulletin</a>
          <a href='' className='text-gray-500'>Circular</a>
          <a href='' className='text-gray-500'>Z-Connect blog</a>
          <a href='' className='text-gray-500'>Downloads</a>
        </div>
        <div className='flex flex-col gap-2 whitespace-nowrap mr-20'>
          <h1 className='text-black text-2xl '>Company</h1>
          <a href=''className='text-gray-500'>About</a>
          <a href=''className='text-gray-500'>Philosophy</a>
          <a href=''className='text-gray-500'>Press & media</a>
          <a href=''className='text-gray-500'>Careers</a>
          <a href=''className='text-gray-500'>Zerodha Cares (CSR)</a>
          <a href=''className='text-gray-500'>Zerodha.tech</a>
          <a href=''className='text-gray-500'>Open source</a>
        </div>
        <div className='flex flex-col gap-2 whitespace-nowrap mr-60'>
          <h1 className='text-black text-2xl '>Quick Links</h1>
          <a href='' className='text-gray-500'>Upcoming IPOs</a>
          <a href=''className='text-gray-500'>Brokerage charges</a>
          <a href='' className='text-gray-500'>Market holidays</a>
          <a href='' className='text-gray-500'>Economic calendar</a>
          <a href='' className='text-gray-500'>Calculators</a>
          <a href=''className='text-gray-500'>Markets</a>
          <a href=''className='text-gray-500'>Sectors</a>
        </div>
      </div>
    </div>
  )
}

export default footer