
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      imageUrl: "/thumbnail-oinj.jpg",
      date: "November 10, 2021",
      title: "LaserNetUs Website Launch",
      description: "LaserNetUs has a new brand identity and website designed by eDesign Interactive. The homepage is dynamic and eye-catching. The website aims to highlight the innovative nature of high-intensity laser technology",
    },
    {
      id: 2,
      imageUrl: "/thumbnail-lasetnet.jpg",
      date: "October 28, 2021",
      title: "How we helped an Orthopedic Practice Increase their traffic",
      description: "We are honored and excited to be working with The Orthopedic Institute of New Jersey, the largest practice in northwest New Jersey.",
    },
    {
      id: 3,
      imageUrl: "/thumbnail-accessibility.jpg",
      date: "October 15, 2021",
      title: "The Increasing importance of Web Accessibility",
      description: "Is your website accessible to visitors with impairments?",
    },
  ];

  return (
    <section className="bg-[#F8F8F8] py-12 lg:py-18 px-4 sm:px-6 lg:px-8 xl:px-[120px] min-h-screen font-poppins">
      <div className="container mx-auto max-w-[1200px]">
        <div className="mb-8 lg:mb-12 flex flex-col items-center justify-center text-center mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Blog</h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Insights, thoughts, industry trends, marketing tips, eDesign news, nerdy stuff, it's all here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 justify-items-center">
          {blogs.map((blog) => (
            <div 
              key={blog.id}
              className="overflow-hidden transition-shadow duration-300 w-full max-w-[386px]"
            >
              <div className="overflow-hidden">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="py-4 sm:py-6">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-tight">{blog.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#4E42D9] hover:bg-[#3d35b5] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-colors duration-300">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;