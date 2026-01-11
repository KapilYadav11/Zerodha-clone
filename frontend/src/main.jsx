import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './landing_page/home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import SupportPage from './landing_page/supports/SupportPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="pricing" element={<PricingPage />} />
      <Route path="support" element={<SupportPage />} />
      

    </Routes>
  </BrowserRouter>
)
