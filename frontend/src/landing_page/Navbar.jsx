import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'remixicon/fonts/remixicon.css'
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className='bg-gray-50 rounded flex justify-center content-center gap-60 shadow-[0_10px_20px_rgba(0,0,0,0.1)]'>
      <div className='w-[15%] py-4 mr-35'>
        {/* add here the functionality when you click on the imsge it will redirect to the home page */}
        <img src="media\images\logo.svg" alt="Logo" className="w-[-5]"/>
      </div>
      <div className='flex text-lg gap-10 p-8 py-4 ml-5 '>
        <Link to="/signup"  className="text-sky-700 hover:text-gray-900 active:text-blue-600 transition-colors font-medium">Signup</Link>
        <Link to="/about"  className="text-sky-700 hover:text-gray-900 active:text-blue-600 transition-colors font-medium">About</Link>
        <Link to="/product"  className="text-sky-700 hover:text-gray-900 active:text-blue-600 transition-colors font-medium">Product</Link>
        <Link to="/pricing"  className="text-sky-700 hover:text-gray-900 active:text-blue-600 transition-colors font-medium">Pricing</Link>
        <Link to="/support"  className="text-sky-700 hover:text-gray-900 active:text-blue-600 transition-colors font-medium">Support</Link>
        <Link to=""><i className="ri-align-justify text-sky-700 "></i></Link>
      </div>
    </div>
  ) 
}

export default Navbar