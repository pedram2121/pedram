import { Link } from 'react-router-dom';
import icon from '../Image/Icon.png';
import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar" style={{zIndex:100}}>
      <br />
      <div className="bg-slate-100 font-YekanBakh2 shadow-lg mr-24 ml-24 p-5 rounded-2xl">
        <div className="flex items-center h-16">
          {/* Button */}
          <div className="hidden lg:block ml-20">
            <button className="bg-blue-500 px-6 py-2 rounded-xl text-white">
              ورود / ثبت نام
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex flex-row-reverse mx-40 text-gray-700 font-Vazirmatn2">
            <li>
              <Link to="/aboutus">چرا طلای خرداد؟</Link>
            </li>
            <li className="mx-10">
              <Link to="">مراحل خرید</Link>
            </li>
            <li className="mx-8">
              <Link to="/terms">مجوزها</Link>
            </li>
            <li className="mx-8">
              <Link to="">پرسش های متداول</Link>
            </li>
            <li className="mx-8">
              <Link to="/app">دانلود اپلیکیشن</Link>
            </li>
            <li className="mx-8">
              <Link to="/contactus">تماس با ما</Link>
            </li>
          </ul>

          {/* Logo Section */}
          <div className="flex items-center mr-20">
            <img className="px-5" src={icon} alt="Logo" />
            <Link to="/"> <h1 className="font-YekanBakh1 text-gray-600 text-2xl">طلای خرداد</h1></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {/* آیکون همبرگر */}
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col items-center space-y-4 text-gray-700 font-Vazirmatn4">
              <li>
                <Link to="/">چرا طلای خرداد؟</Link>
              </li>
              <li>
                <Link to="/steps">مراحل خرید</Link>
              </li>
              <li>
                <Link to="/licenses">مجوزها</Link>
              </li>
              <li>
                <Link to="/faq">پرسش های متداول</Link>
              </li>
              <li>
                <Link to="/app">دانلود اپلیکیشن</Link>
              </li>
              <li>
                <Link to="/contactus">تماس با ما</Link>
              </li>
              <button className="bg-blue-500 px-6 py-2 rounded-xl text-white mt-4">
                ورود / ثبت نام
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
