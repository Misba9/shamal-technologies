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

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const cards = section.querySelectorAll(".industry-card")
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollY = window.scrollY

      cards.forEach((card, index) => {
        const element = card as HTMLElement
        const progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight)
        const cardProgress = Math.max(0, Math.min(1, progress * industries.length - index))

        const translateY = (1 - cardProgress) * 100
        const scale = 0.95 + cardProgress * 0.05

        // Only show card when it's actually in position (cardProgress > 0.5)
        const opacity = cardProgress > 0.5 ? 1 : 0

        element.style.transform = `translateY(${translateY}px) scale(${scale})`
        element.style.opacity = opacity.toString()
        element.style.pointerEvents = cardProgress > 0.5 ? "auto" : "none"
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [industries.length])

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="py-20 bg-gray-50"
      style={{ minHeight: `${industries.length * 100}vh` }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 sticky top-20 bg-gray-50 py-8 z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">SECTORS WE SERVE</h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-[#266091] to-[#0e3050]"></div>
          </div>
        </div>

        <div className="relative space-y-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card sticky bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
              style={{ top: `${120 + index * 20}px` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <Image src={industry.image || "/placeholder.svg"} alt={industry.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#266091] text-white p-4 rounded-lg">
                      <i className={`bi ${industry.icon} text-4xl`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-[#266091]">{industry.name}</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
