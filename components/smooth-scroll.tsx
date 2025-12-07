"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export default function SmoothScroll() {
  const initRef = useRef<() => void>()

  useEffect(() => {
    let lenis: any
    let rafId: number | null = null
    let removeGsapTicker: (() => void) | null = null

    const initMotion = () => {
      if (typeof window === "undefined") return

      const Lenis = (window as any).Lenis
      const gsap = (window as any).gsap
      const ScrollTrigger = (window as any).ScrollTrigger

      if (Lenis && !lenis) {
        lenis = new Lenis({
          duration: 1.05,
          smooth: true,
          smoothWheel: true,
          smoothTouch: false,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
        })

        // Drive Lenis with GSAP's ticker when available for tighter sync
        if (gsap?.ticker) {
          const tick = (time: number) => lenis?.raf(time * 1000)
          gsap.ticker.add(tick)
          removeGsapTicker = () => gsap.ticker.remove(tick)
          gsap.ticker.lagSmoothing(0)
        } else {
          const raf = (time: number) => {
            lenis?.raf(time)
            rafId = requestAnimationFrame(raf)
          }
          rafId = requestAnimationFrame(raf)
        }
      }

      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger)

        // Keep ScrollTrigger in sync with Lenis
        if (lenis) {
          lenis.on("scroll", ScrollTrigger.update)
          ScrollTrigger.defaults({ markers: false })
        }

        const fadeUps = gsap.utils.toArray<HTMLElement>(".fade-up")

        if (fadeUps.length) {
          gsap.set(fadeUps, { opacity: 0, y: 32, willChange: "transform, opacity" })

          fadeUps.forEach((element, index) => {
            if (element.dataset.gsapAnimated === "true") return
            element.dataset.gsapAnimated = "true"

            gsap.to(element, {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              delay: index * 0.05,
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "top 60%",
                scrub: false,
                once: true,
              },
            })
          })
        }
      }
    }

    initRef.current = initMotion
    const timer = setTimeout(initMotion, 120)

    return () => {
      clearTimeout(timer)
      if (rafId) cancelAnimationFrame(rafId)
      removeGsapTicker?.()
      lenis?.destroy()
    }
  }, [])

  return (
    <>
      <Script
        src="https://unpkg.com/lenis@1.3.15/dist/lenis.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("[v0] Lenis loaded successfully")
          initRef.current?.()
        }}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="afterInteractive"
        onLoad={() => initRef.current?.()}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="afterInteractive"
        onLoad={() => initRef.current?.()}
      />
    </>
  )
}
