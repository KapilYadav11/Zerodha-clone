import React from 'react'
import { MoveRight } from "lucide-react";


const RightSection = ({imageURL, productName, productDescription, learnMore, customClasses}) => {
  return (
    <div className='container mx-auto px-16'>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${customClasses}`}>
        <div className='p-6 md:px-12'>
          <h1 className="text-3xl font-semibold py-2">{productName}</h1>
          <p className="py-2 text-lg">{productDescription}</p>
          <div className="py-6 text-lg flex items-center gap-16">
             <a
                  className="inline-flex items-center gap-1.5 text-blue-500 hover:text-zinc-900 font-medium cursor-pointer transition-colors group"
                  href={learnMore}
                >
                  Learn More
                  <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
          </div>
        
        </div>
        <div className='p-6 flex justify-center'>
          <img src={imageURL} alt={productName} className='max-w-full h-auto object-contain' />
        </div>
      </div>
    </div>
  )
}

export default RightSection