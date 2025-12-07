"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function SmoothScroll() {
  useEffect(() => {
    // Wait for Lenis to be loaded from CDN
    const initLenis = () => {
      if (typeof window !== "undefined" && (window as any).Lenis) {
        const lenis = new (window as any).Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
      }
    }

    // Initialize after a short delay to ensure script is loaded
    const timer = setTimeout(initLenis, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Script
        src="https://unpkg.com/lenis@1.3.15/dist/lenis.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("[v0] Lenis loaded successfully")
        }}
      />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).gsap) {
            const gsap = (window as any).gsap
            gsap.registerPlugin((window as any).ScrollTrigger)

            // Animate fade-up elements
            gsap.utils.toArray(".fade-up").forEach((element: any) => {
              gsap.from(element, {
                y: 60,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: element,
                  start: "top 80%",
                  end: "top 50%",
                  scrub: 1,
                },
              })
            })
          }
        }}
      />
    </>
  )
}
