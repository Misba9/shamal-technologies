"use client"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/assets/videos/hero-section.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Advanced Drone Services & 
          <br />
          Geospatial Solutions in 
          <br />
          Saudi Arabia
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Enhancing project insights with real-time drone data capture and advanced geospatial analyses
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#266091] hover:bg-[#0e3050] text-white px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </button>
          <button 
            onClick={() => {
              window.location.href = '/contact';
            }}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#266091] px-8 py-3 rounded-lg font-medium transition duration-300"
          >
            Book a Meeting
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}