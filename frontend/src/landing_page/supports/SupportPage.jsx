import React from 'react'
import Hero from './Hero'
import CreateTicket from './CreateTicket'

const SupportPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans antialiased">
      <Hero />
      <CreateTicket />
    </div>
  )
}

export default SupportPage