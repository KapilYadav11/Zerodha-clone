import React, { useState } from 'react'

const CreateTicket = () => {
  const [openSections, setOpenSections] = useState({
    accountOpening: false, 
    zerodhaAccount: false,
    kite: false,
    funds: false,
    console: false,
    coin: false,
  })

  
  const toggleSection = (sectionName) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }))
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
       
        <div className="lg:col-span-2 space-y-5">
          
          
          <div className="bg-white border border-gray-100 rounded shadow-sm overflow-hidden">
            <div 
              onClick={() => toggleSection('accountOpening')}
              className="flex items-center justify-between p-5 border-b border-gray-100 cursor-pointer hover:bg-gray-50/50 transition-colors select-none"
            >
              <div className="flex items-center space-x-4">
                <div className="text-[#387ed1]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-normal text-gray-700">Account Opening</h2>
              </div>
              <svg 
                className={`w-5 h-5 text-[#387ed1] transform transition-transform duration-200 ${openSections.accountOpening ? 'rotate-0' : 'rotate-180'}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </div>
            
            {openSections.accountOpening && (
              <div className="p-6 pl-16 bg-white border-b border-gray-50">
                <ul className="space-y-4 text-[15px]">
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Resident individual</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Minor</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Non Resident Indian (NRI)</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Company, Partnership, HUF and LLP</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Glossary</a></li>
                </ul>
              </div>
            )}
          </div>

          
          <div className="bg-white border border-gray-100 rounded shadow-sm overflow-hidden">
            <div 
              onClick={() => toggleSection('zerodhaAccount')}
              className="flex items-center justify-between p-5 border-b border-gray-100 cursor-pointer hover:bg-gray-50/50 transition-colors select-none"
            >
              <div className="flex items-center space-x-4">
                <div className="text-[#387ed1]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-normal text-gray-700">Your Zerodha Account</h2>
              </div>
              <svg 
                className={`w-5 h-5 text-[#387ed1] transform transition-transform duration-200 ${openSections.zerodhaAccount ? 'rotate-0' : 'rotate-180'}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </div>
            
            {openSections.zerodhaAccount && (
              <div className="p-6 pl-16 bg-white border-b border-gray-50">
                <ul className="space-y-4 text-[15px]">
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Login credentials</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Profile details & Nominee</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Charges & Account statements</a></li>
                </ul>
              </div>
            )}
          </div>

          
          <div className="bg-white border border-gray-100 rounded shadow-sm overflow-hidden">
            <div 
              onClick={() => toggleSection('kite')}
              className="flex items-center justify-between p-5 border-b border-gray-100 cursor-pointer hover:bg-gray-50/50 transition-colors select-none"
            >
              <div className="flex items-center space-x-4">
                <div className="text-[#387ed1]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-normal text-gray-700">Kite</h2>
              </div>
              <svg 
                className={`w-5 h-5 text-[#387ed1] transform transition-transform duration-200 ${openSections.kite ? 'rotate-0' : 'rotate-180'}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </div>
            
            {openSections.kite && (
              <div className="p-6 pl-16 bg-white border-b border-gray-50">
                <ul className="space-y-4 text-[15px]">
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• IPO</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Trading FAQs</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Margin Trading Facility(MTF) and Margins</a></li>
                </ul>
              </div>
            )}
          </div>

          
          <div className="bg-white border border-gray-100 rounded shadow-sm overflow-hidden">
            <div 
              onClick={() => toggleSection('funds')}
              className="flex items-center justify-between p-5 border-b border-gray-100 cursor-pointer hover:bg-gray-50/50 transition-colors select-none"
            >
              <div className="flex items-center space-x-4">
                <div className="text-[#387ed1]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-normal text-gray-700">Funds</h2>
              </div>
              <svg 
                className={`w-5 h-5 text-[#387ed1] transform transition-transform duration-200 ${openSections.funds ? 'rotate-0' : 'rotate-180'}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </div>
            
            {openSections.funds && (
              <div className="p-6 pl-16 bg-white border-b border-gray-50">
                <ul className="space-y-4 text-[15px]">
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Adding funds (UPI, Netbanking, IMPS)</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Fund withdrawal timelines</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Instant settlement updates</a></li>
                </ul>
              </div>
            )}
          </div>

          
          <div className="bg-white border border-gray-100 rounded shadow-sm overflow-hidden">
            <div 
              onClick={() => toggleSection('console')}
              className="flex items-center justify-between p-5 border-b border-gray-100 cursor-pointer hover:bg-gray-50/50 transition-colors select-none"
            >
              <div className="flex items-center space-x-4">
                <div className="text-[#387ed1]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-normal text-gray-700">Console</h2>
              </div>
              <svg 
                className={`w-5 h-5 text-[#387ed1] transform transition-transform duration-200 ${openSections.console ? 'rotate-0' : 'rotate-180'}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </div>
            
            {openSections.console && (
              <div className="p-6 pl-16 bg-white border-b border-gray-50">
                <ul className="space-y-4 text-[15px]">
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Tax P&L reports</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Ledger statements & portfolio tracking</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Corporate actions & dividends</a></li>
                </ul>
              </div>
            )}
          </div>

         
          <div className="bg-white border border-gray-100 rounded shadow-sm overflow-hidden">
            <div 
              onClick={() => toggleSection('coin')}
              className="flex items-center justify-between p-5 border-b border-gray-100 cursor-pointer hover:bg-gray-50/50 transition-colors select-none"
            >
              <div className="flex items-center space-x-4">
                <div className="text-[#387ed1]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-normal text-gray-700">Coin</h2>
              </div>
              <svg 
                className={`w-5 h-5 text-[#387ed1] transform transition-transform duration-200 ${openSections.coin ? 'rotate-0' : 'rotate-180'}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </div>
            
            {openSections.coin && (
              <div className="p-6 pl-16 bg-white border-b border-gray-50">
                <ul className="space-y-4 text-[15px]">
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Direct Mutual Funds setup</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Managing SIP mandates</a></li>
                  <li><a href="#link" className="text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors ">• Redemption timelines</a></li>
                </ul>
              </div>
            )}
          </div>

        </div> 

        <div className="space-y-6">
          <div className="bg-[#fdf7ed] border-l-4 border-[#ea871e] p-6 shadow-sm">
            <ul className="space-y-4 text-sm leading-relaxed">
              <li>
                <a href="#link" className="text-[#387ed1] hover:text-zinc-900 font-medium cursor-pointer transition-colors block">
                  • Latest Intraday leverages and Square-off timings
                </a>
              </li>
              <li>
                <a href="#link" className="text-[#387ed1] hover:text-zinc-900 font-medium cursor-pointer transition-colors block">
                  • MCX is launching Silver 100 (100 gram) futures contracts
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50/70 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-600">Quick links</h3>
            </div>
            <ul className="divide-y divide-gray-100 text-[14px]">
              <li><a href="#link" className="block p-4 text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors">1. Track account opening</a></li>
              <li><a href="#link" className="block p-4 text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors">2. Track segment activation</a></li>
              <li><a href="#link" className="block p-4 text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors">3. Intraday margins</a></li>
              <li><a href="#link" className="block p-4 text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors">4. Kite user manual</a></li>
              <li><a href="#link" className="block p-4 text-[#387ed1] hover:bg-gray-50 hover:text-zinc-900 cursor-pointer transition-colors">5. Learn how to create a ticket</a></li>
            </ul>
          </div>
        </div> 

      </div> 
    </div>
  )
}

export default CreateTicket