const benefits = [
  {
    icon: "⚡",
    title: "Faster Decisions",
    description: "Real-time data enables quick, informed decision-making.",
  },
  {
    icon: "🎯",
    title: "High Accuracy",
    description: "Precision mapping with centimeter-level accuracy.",
  },
  {
    icon: "🛡️",
    title: "Cost Effective",
    description: "Reduce surveying costs by up to 70% compared to traditional methods.",
  },
  {
    icon: "📈",
    title: "Scalable Solutions",
    description: "From small sites to large-scale infrastructure projects.",
  },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#266091] to-[#0e3050] text-white relative z-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose Us</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the advantages of cutting-edge drone technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm text-4xl">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
