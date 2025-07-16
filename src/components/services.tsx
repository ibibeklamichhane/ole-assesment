
const ServicesSection = () => {
  const services = [
    {
      icon: '/icon-ai.png',
      title: 'Web Application',
      subtitle: 'Platform independant business solutions for maximum availability'
    },
    {
      icon: '/icon-seo.png',
      title: 'Mobile Application',
      subtitle: 'Professional mobile applications for iOS and Android'
    },
    {
      icon: '/icon-game.png',
      title: 'E-commerce',
      subtitle: 'Complete E-commerce solutions for your business'
    },
    {
      icon: '/icon-ai.png',
      title: 'UI/UX Design',
      subtitle: 'Beautiful and functional user interfaces for better experiences'
    }
  ];

  return (
    <section className="w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8 xl:px-[120px] font-poppins">
      <div className="container mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-full max-w-[285px] p-6 flex flex-col items-center text-center transition-shadow"
            >
              <div className="mb-4">
                {service.icon.startsWith('/') ? (
                  <img src={service.icon} alt={service.title} className="w-16 h-16 md:w-20 md:h-20" />
                ) : (
                  <span className="text-4xl">{service.icon}</span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;