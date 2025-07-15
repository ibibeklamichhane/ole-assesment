
// import React from 'react';
// import image from '../../public/heroimage.png';

// const HeroSection = () => {
//   return (
//     <section className="w-full lg:max-h-[578px] px-4 sm:px-8 lg:px-[104px] py-10 md:py-[80px] lg:py-[156px] flex flex-col lg:flex-row items-center justify-between gap-8">
//       <div className="w-full lg:w-[500px] flex flex-col justify-center order-1 lg:order-none mt-0 lg:mt-20">
//         <h1 className="text-3xl sm:text-3xl font-bold mb-4 text-[#3B3950]">
//           We do the work you stay focused on your customers.
//         </h1>
//         <p className="text-base sm:text-lg text-gray-600">
//           Awwwsome. is a digital agency passionate about storytelling, visual design, and technology. We collaborate with companies small to large around the world to help them engage their audiences and build brand awareness.
//         </p>
//         <p className="text-base sm:text-lg text-gray-600 mt-4">
//           Our team can create amazing web experiences, beginning with deep market research, practical strategies, and professional execution.
//         </p>
// <div className="flex flex-row flex-wrap gap-2 mt-6 w-full">
//   <button className="bg-[#4E42D9] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex-1 min-w-[140px] hover:bg-blue-700 transition-colors">
//     Explore Projects
//   </button>
//   <button className="bg-[#4E42D92E] text-[#4E42D9] border border-[#4E42D9] px-4 py-2 sm:px-4 sm:py-3 rounded-lg flex-1 min-w-[140px] hover:bg-gray-100 transition-colors">
//     About Us
//   </button>
// </div>
//       </div>
      
//       <div className="w-full lg:w-[554px] order-0 lg:order-none">
//         <img 
//   src={image} 
//   alt="Hero Image"
//   className="w-full h-auto max-h-[400px] object-contain rounded-lg"
// />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from 'react';
import image from '../../public/heroimage.png';

const HeroSection = () => {
  return (
    <section className="w-full lg:max-h-[578px] px-4 sm:px-8 lg:px-[104px] py-10 md:py-[80px] lg:py-[156px] flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="w-full lg:w-[500px] flex flex-col justify-center order-1 lg:order-none mt-0 lg:mt-20">
        <h1 className="text-3xl font-bold mb-4 text-[#3B3950]">
          We do the work you stay focused on your customers.
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Awwwsome. is a digital agency passionate about storytelling, visual design, and technology. We collaborate with companies small to large around the world to help them engage their audiences and build brand awareness.
        </p>
        <p className="text-base sm:text-lg text-gray-600 mt-4">
          Our team can create amazing web experiences, beginning with deep market research, practical strategies, and professional execution.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="bg-[#4E42D9] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Explore Projects
          </button>
          <button className="bg-[#4E42D92E] text-[#4E42D9] border border-[#4E42D9] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            About Us
          </button>
        </div>
      </div>
      
      <div className="w-full lg:w-[554px] order-0 lg:order-none">
        <img 
          src={image} 
          alt="Hero Image"
          className="w-full h-auto max-h-[400px] object-contain rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;