"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const services = [
  {
    title: "Aerial Survey",
    description: "High-accuracy mapping for large-scale terrains using photogrammetry and advanced data processing.",
    image: "/assets/images/services/aerial-survey-using-drone-in-saudi-arabia.jpg",
  },
  {
    title: "Construction Monitoring",
    description:
      "Real-time site progress tracking, volume calculations, and BIM integration for construction projects.",
    image: "/assets/images/services/construction-monitoring-using-drone-in-saudi-arabia.jpg",
  },
  {
    title: "Asset Inspection",
    description:
      "Detailed, non-contact inspection of infrastructure like towers, bridges, and pipelines using thermal/RGB data.",
    image: "/assets/images/services/asset-inspection-survey-using-drone-in-saudi-arabia.jpg",
  },
  {
    title: "Bathymetric & Underwater Survey",
    description: "High-resolution underwater mapping and surveying of water bodies for resource and depth analysis.",
    image: "/assets/images/services/bathymetric-survey-in-saudi-arabia.jpg",
  },
  {
    title: "GIS & Remote Sensing",
    description:
      "Tracking ecological changes, pollution sources, and land use for regulatory compliance and sustainability.",
    image: "/assets/images/services/gis-and-remote-sensing-in-saudi-arabia.jpg",
  },
  {
    title: "Environmental Monitoring",
    description:
      "Tracking ecological changes, pollution sources, and land use for regulatory compliance and sustainability.",
    image: "/assets/images/services/environmental-monitoring-using-drone-in-saudi-arabia.jpg",
  },
  {
    title: "SCAN/CAD to BIM",
    description:
      "Converting point cloud data (Scan) and existing drawings (CAD) into full Building Information Models (BIM).",
    image: "/assets/images/services/scan-cad-to-BIM-survey-in-saudi-arabia.jpg",
  },
  {
    title: "Mining & Exploration",
    description:
      "Volume calculations, stockpile monitoring, and site planning for mining operations with precision mapping.",
    image: "/assets/images/services/mining-survey--and-exploration-using-drones-in-saudi-arabia.jpg",
  },
  {
    title: "Security Surveillance",
    description: "Wide-area monitoring and perimeter surveillance using persistent aerial observation and data.",
    image: "/assets/images/services/security-surveillance-monitoring-using-drone-in-saudi-arabia.jpg",
  },
  {
    title: "AI Application Development",
    description:
      "Custom AI solutions for automated analysis, object detection, and predictive insights from geospatial data.",
    image: "/assets/images/services/ai-application-development-using-drones-in-saudi-arabia.jpg",
  },
  {
    title: "Agriculture Monitoring",
    description:
      "High-resolution spectral analysis (NDVI, etc.) for crop health, yield prediction, and precision farming.",
    image: "/assets/images/services/agriculture-monitoring-using-drone-in-saudi-arabia.jpg",
  },
  {
    title: "Special Projects",
    description: "Tailored solutions for unique or complex data acquisition challenges, including R&D support.",
    image: "/assets/images/services/do-a-special-project-using-drone-in-saudi-arabia.jpg",
  },
]

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = scrollContainerRef.current
      if (!container) return

      const scrollSection = container.closest("section")
      if (!scrollSection) return

      const rect = scrollSection.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0

      if (isInView) {
        e.preventDefault()

        // Scroll down (positive deltaY) = move left-to-right (decrease scrollLeft)
        const scrollAmount = e.deltaY * 3
        container.scrollLeft += scrollAmount
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen flex items-center">
      <div className="w-full">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">OUR SERVICES</h2>
            <div className="flex justify-center mb-4">
              <div className="h-1 w-24 bg-gradient-to-r from-[#266091] to-[#0e3050]"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive drone and geospatial solutions for every industry
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 px-8 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#266091]">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
