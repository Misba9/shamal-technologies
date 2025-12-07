"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const industries = [
    {
      name: "Government",
      icon: "bi-bank2",
      image: "/government-building-aerial-view.jpg",
      description:
        "Comprehensive geospatial solutions for government projects, urban planning, and infrastructure development.",
    },
    {
      name: "Transportation",
      icon: "bi-truck-front",
      image: "/highway-transportation-aerial.jpg",
      description: "Highway monitoring, traffic analysis, and transportation infrastructure inspection services.",
    },
    {
      name: "Mining",
      icon: "bi-gem",
      image: "/assets/images/services/mining-survey--and-exploration-using-drones-in-saudi-arabia.jpg",
      description: "Volume calculations, stockpile monitoring, and mine site planning with precision drone mapping.",
    },
    {
      name: "Construction",
      icon: "bi-buildings",
      image: "/assets/images/services/construction-monitoring-using-drone-in-saudi-arabia.jpg",
      description: "Real-time progress tracking, site documentation, and BIM integration for construction projects.",
    },
    {
      name: "Real Estate",
      icon: "bi-building",
      image: "/real-estate-development-aerial.jpg",
      description: "Property surveys, marketing visuals, and development planning for real estate projects.",
    },
    {
      name: "Education",
      icon: "bi-mortarboard",
      image: "/university-campus-aerial.png",
      description: "Campus mapping, facility management, and educational research support services.",
    },
    {
      name: "Oil & Gas",
      icon: "bi-fuel-pump",
      image: "/oil-refinery-industrial-aerial.jpg",
      description: "Pipeline inspection, facility monitoring, and safety compliance for oil and gas operations.",
    },
    {
      name: "Heritage",
      icon: "bi-bank",
      image: "/heritage-site-archaeological.jpg",
      description: "3D documentation, preservation planning, and archaeological site mapping services.",
    },
    {
      name: "Marine",
      icon: "bi-life-preserver",
      image: "/assets/images/services/bathymetric-survey-in-saudi-arabia.jpg",
      description: "Bathymetric surveys, coastal monitoring, and underwater terrain mapping for marine projects.",
    },
    {
      name: "Agriculture",
      icon: "bi-flower1",
      image: "/assets/images/services/agriculture-monitoring-using-drone-in-saudi-arabia.jpg",
      description: "Crop health monitoring, yield prediction, and precision farming solutions with NDVI analysis.",
    },
    {
      name: "Utilities",
      icon: "bi-lightning-charge",
      image: "/power-lines-electrical-grid.jpg",
      description: "Power line inspection, utility infrastructure monitoring, and asset management services.",
    },
  ]

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">SECTORS WE SERVE</h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-[#266091] to-[#0e3050]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="grid grid-cols-1 gap-0 h-full">
                <div className="relative h-60 overflow-hidden">
                  <Image 
                    src={industry.image || "/placeholder.svg"} 
                    alt={industry.name} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                <div className="p-6 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#266091] text-white p-3 rounded-lg">
                      <i className={`bi ${industry.icon} text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-[#266091]">{industry.name}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}