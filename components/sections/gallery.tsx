"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const images = [
  "/assets/images/gallery/gallery-1.jpg",
  "/assets/images/gallery/gallery-2.jpg",
  "/assets/images/gallery/gallery-3.jpg",
  "/assets/images/gallery/gallery-4.jpg",
  "/assets/images/gallery/gallery-5.jpg",
  "/assets/images/gallery/gallery-6.jpg",
]

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollStep = 1
    const scrollInterval = 30

    const autoScroll = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += scrollStep
        scrollContainer.scrollLeft = scrollAmount

        // Reset to beginning when reaching end
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
        }
      }
    }, scrollInterval)

    return () => clearInterval(autoScroll)
  }, [])

  return (
    <section className="py-20 bg-black overflow-hidden relative z-20">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Work</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful drone and geospatial projects
          </p>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
        {/* Duplicate images for seamless loop */}
        {[...images, ...images].map((image, index) => (
          <div key={index} className="relative flex-shrink-0 w-96 h-64 rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery ${index + 1}`}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
