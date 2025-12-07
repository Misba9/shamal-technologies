"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="animate-pulse">
        <Image
          src="/assets/logo-footer.svg"
          alt="Shamal Technologies"
          width={200}
          height={80}
          className="animate-bounce"
        />
      </div>
    </div>
  )
}
