import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black fixed top-0 w-full z-10 h-[114px]">
      <div className="max-w-8xl mx-auto px-[40px] py-[32px] flex items-center justify-between">
        <div className="text-3xl font-semibold">
          <span style={{ color: "#4E42D9" }}>Awww</span>
          <span className="text-black">some</span>
      </div>

        <div className="hidden md:flex space-x-10 items-center ">
          <a href="#home" className="hover:text-[#4E42D9]">Home</a>
          <a href="#about" className="hover:text-[#4E42D9]">About</a>
          <a href="#services" className="hover:text-[#4E42D9]">Services</a>
          <a href="#services" className="hover:text-[#4E42D9]">News</a>
          <button className='bg-[#4E42D9] py-[16px] px-[30px] rounded-lg text-white hover:bg-blue-700 transition-colors cursor-pointer'>
            Contact
            </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

{isOpen && (
  <div className="md:hidden px-6 pb-4 space-y-3 bg-white flex flex-col items-center gap-y-4 h-screen">
    <a href="#home" className="block hover:text-gray-200">Home</a>
    <a href="#about" className="block hover:text-gray-200">About Us</a>
    <a href="#services" className="block hover:text-gray-200">Services</a>
    <a href="#services" className="block hover:text-gray-200">News</a>
    <button className="bg-[#4E42D9] py-[12px] px-[20px] rounded-lg text-white">
      Contact
    </button>
  </div>
)}
    </nav>
  );
}
