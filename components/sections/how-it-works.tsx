export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Planning & Acquisition",
      description:
        "Deploy drones equipped with high-resolution sensors to capture precise aerial or underwater data based on project requirements.",
    },
    {
      number: "2",
      title: "Modeling & Processing",
      description:
        "Data is processed using photogrammetry, LiDAR, or specialized geospatial tools to generate accurate 2D/3D models and outputs.",
    },
    {
      number: "3",
      title: "Analysis & Verification",
      description:
        "Experts validate every dataset and perform advanced analytics to extract actionable insights and ensure sub-centimeter accuracy.",
    },
    {
      number: "4",
      title: "Delivery & Reporting",
      description:
        "Clients receive interactive maps, dashboards, or CAD/BIM-ready files with full documentation and recommendations.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">HOW IT WORKS</h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-[#266091] to-[#0e3050]"></div>
          </div>
        </div>

        <h3 className="text-[#266091] text-center mb-12 text-2xl font-bold">How We Deliver Results</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h5 className="text-[#266091] font-bold text-xl mb-3">
                {step.number}. {step.title}
              </h5>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
