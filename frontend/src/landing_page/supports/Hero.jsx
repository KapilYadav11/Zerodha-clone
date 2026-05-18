import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-12">
      <div className="flex justify-between items-center pb-8">
        <h1 class="text-3xl font-medium text-gray-700 tracking-tight">Support Portal</h1>
        <button className="bg-[#387ed1] hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded text-sm transition-colors shadow-sm">
          My tickets
        </button>
      </div>

      <div className="mb-12 relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Eg: How do I open my account, How do i activate F&O..." 
          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded text-base placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all shadow-sm"
        />
      </div>
    </div>
  )
}

export default Hero