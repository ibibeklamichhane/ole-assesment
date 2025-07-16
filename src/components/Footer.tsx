import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#292838] text-white px-4 sm:px-6 lg:px-8 xl:px-[139px] py-12 lg:py-[72px]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 lg:mb-0 lg:hidden">
          <p className="text-2xl font-semibold mb-3">
            Awwwsome
          </p>
          <p className="text-base text-gray-300 max-w-md lg:max-w-lg leading-relaxed">
            Our team can create amazing web experiences, beginning with deep market research, practical strategies, and professional execution.
          </p>
        </div>

        <div className="hidden lg:flex lg:justify-between lg:items-start">
          <div className="pl-10 flex-shrink-0 max-w-md">
            <p className="text-2xl font-semibold mb-3">
              Awwwsome
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              Our team can create amazing web experiences, beginning with deep market research, practical strategies, and professional execution.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 pr-10">
            <div>
              <h6 className="text-lg font-semibold mb-4 text-white">Services</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Branding</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Design</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Marketing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Advertisement</a></li>
              </ul>
            </div>

            <div>
              <h6 className="text-lg font-semibold mb-4 text-white">Company</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">About us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Jobs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Press kit</a></li>
              </ul>
            </div>

            <div>
              <h6 className="text-lg font-semibold mb-4 text-white">Legal</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Terms of use</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Privacy policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Cookie policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:hidden gap-6">
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Services</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Branding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Advertisement</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Company</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Jobs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Press kit</a></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h6 className="text-lg font-semibold mb-4 text-white">Legal</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Terms of use</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Cookie policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;