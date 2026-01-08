import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'remixicon/fonts/remixicon.css'
const Navbar = () => {
  return (
    <div className='bg-gray-50 rounded flex justify-center content-center gap-60 shadow-[0_10px_20px_rgba(0,0,0,0.1)]'>
      <div className='w-[15%] py-4 mr-35'>
        <img src="media\images\logo.svg" alt="" />
      </div>
      <div className='flex text-lg gap-10 p-8 py-4 ml-5 '>
        <a href=""  className="text-sky-700 hover:text-gray-900 active:text-blue-600 transition-colors font-medium">Signup</a>
        <a href=""  className="text-sky-700 hover:text-gray-900 active:text-blue-600 transition-colors font-medium">About</a>
        <a href=""  className="text-sky-700 hover:text-gray-900 active:text-blue-600 transition-colors font-medium">Product</a>
        <a href=""  className="text-sky-700 hover:text-gray-900 active:text-blue-600 transition-colors font-medium">Pricing</a>
        <a href=""  className="text-sky-700 hover:text-gray-900 active:text-blue-600 transition-colors font-medium">Support</a>
        <a href=""><i className="ri-align-justify text-sky-700 "></i></a>

      </div>
    </div>
  )
}

export default Navbar