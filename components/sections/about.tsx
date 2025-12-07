  export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">WHO WE ARE</h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-[#266091] to-[#0e3050]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Shamal Technologies is a pioneering provider of drone and geospatial solutions in Saudi Arabia. We combine
              cutting-edge technology with deep industry expertise to deliver unparalleled insights for projects across
              construction, infrastructure, mining, agriculture, and environmental sectors.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of certified drone pilots and geospatial analysts work with the latest equipment and software to
              ensure the highest quality data capture, processing, and delivery. With years of experience and hundreds
              of successful projects, we are your trusted partner for advanced geospatial intelligence.
            </p>
            <button className="bg-gradient-to-r from-[#266091] to-[#0e3050] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Learn More About Us
            </button>
          </div>

          <div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/assets/videos/about.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
