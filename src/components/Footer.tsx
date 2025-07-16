import React from "react";

const footerLinks = [
  {
    title: "ABOUT US",
    links: ["Works", "Strategy", "Releases", "Press","Mission"],
  },
  {
    title: "CUSTOMER",
    links: ["Trending", "Popular", "Customers", "Features"],
  },
  {
    title: "SERVICES",
    links: ["Developers", "Support", "Customer Service","Guide"],
  },
];

const Footer = () => {
  const renderLinks = (isMobile: boolean) => {
    return footerLinks.map((section) => {
      const isLegal = section.title === "Legal";
      return (
        <div
          key={section.title}
          className={`${isMobile && isLegal ? "col-span-2" : ""}`}
        >
          <h6 className="text-lg font-semibold mb-4 text-white">
            {section.title}
          </h6>
          <ul className="space-y-2 text-base ">
            {section.links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    });
  };

  return (
    <footer className="bg-[#292838] text-white font-poppins">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-[139px] py-12 lg:py-[72px]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 lg:hidden">
            <p className="text-base font-semibold mb-3">Awwwsome</p>
            <p className="text-base text-gray-300 max-w-md leading-relaxed">
              Our team can create amazing web experiences, beginning with deep
              market research, practical strategies, and professional execution.
            </p>
          </div>

          <div className="hidden lg:flex lg:justify-between lg:items-start">
            <div className="pl-10 flex-shrink-0 max-w-md">
              <p className="text-2xl font-semibold mb-3">Awwwsome</p>
              <p className="text-base text-gray-300 leading-relaxed">
                Our team can create amazing web experiences, beginning with deep
                market research, practical strategies, and professional execution.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-12 pr-10">
              {renderLinks(false)}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:hidden gap-6 gap-x-8 mt-10">
            {renderLinks(true)}
          </div>
        </div>
      </div>
      
      <div className="bg-[#23222F] h-14 flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-[139px]">
        <div className="max-w-7xl mx-auto w-full text-center">
          <p className="text-gray-300 text-sm">
            2022 ©. Awwwsome Designers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;