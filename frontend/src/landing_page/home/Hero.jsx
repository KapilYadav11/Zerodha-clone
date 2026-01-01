import React from 'react'

const Hero = () => {
  return (
    <div className=' '>
      <div className='flex flex-col justify-center mt-6 items-center w-full'>
        <img  
          src="media/images/homeHero.png" 
          alt="hero image" 
          className="mx-auto mb-7 mt-12"
          style={{ width: 722, height: 328 }} 
        />

        <h1 className='font-bold text-3xl'>Invest In everything</h1>
        <p className='py-3 font-semibold text-xl mt-3'>Online platform to invest in <span className='text-cyan-900 font-bold text-2xl'>stocks, derivatives, mutual funds, ETFs, bonds,</span> and more.</p>
        <button className='bg-sky-700 text-white py-3 px-4 text-2xl rounded active:scale-95 hover:bg-black transition-colors duration-200 mt-16'>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero