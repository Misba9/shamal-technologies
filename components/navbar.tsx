"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState("ENG")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    "Aerial Survey",
    "Construction Monitoring",
    "Asset Inspection",
    "Bathymetric & Underwater Survey",
    "GIS & Remote Sensing",
    "Environmental Monitoring",
    "SCAN/CAD to BIM",
    "Mining & Exploration",
    "Security Surveillance",
    "AI Application Development",
    "Agriculture Monitoring",
    "Special Projects",
  ]

  const products = ["DJI", "ECURS"]

  return (
    <>
      <nav
        className={`fixed top-2 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
          isScrolled ? "bg-white/80 backdrop-blur-xl shadow-lg" : "bg-white/10 backdrop-blur-md"
        }`}
        style={{ padding: "5px" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/logo-footer.svg"
                alt="Shamal Technologies"
                width={160}
                height={50}
                className="transition-opacity"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-sm font-medium transition ${
                  isScrolled ? "text-gray-800 hover:text-[#266091]" : "text-white hover:text-blue-200"
                }`}
              >
                Home
              </Link>
              <Link
                href="#about"
                className={`text-sm font-medium transition ${
                  isScrolled ? "text-gray-800 hover:text-[#266091]" : "text-white hover:text-blue-200"
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`text-sm font-medium transition flex items-center gap-1 ${
                    isScrolled ? "text-gray-800 hover:text-[#266091]" : "text-white hover:text-blue-200"
                  }`}
                >
                  Services <span className="text-xs">▼</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service}
                        href="#services"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#266091] transition"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Products Dropdown */}
              <div className="relative group">
                <button
                  className={`text-sm font-medium transition flex items-center gap-1 ${
                    isScrolled ? "text-gray-800 hover:text-[#266091]" : "text-white hover:text-blue-200"
                  }`}
                >
                  Products <span className="text-xs">▼</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {products.map((product) => (
                      <Link
                        key={product}
                        href="#products"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#266091] transition"
                      >
                        {product}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="#blog"
                className={`text-sm font-medium transition ${
                  isScrolled ? "text-gray-800 hover:text-[#266091]" : "text-white hover:text-blue-200"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition ${
                  isScrolled ? "text-gray-800 hover:text-[#266091]" : "text-white hover:text-blue-200"
                }`}
              >
                Contact Us
              </Link>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === "ENG" ? "AR" : "ENG")}
                className={`text-sm font-medium px-3 py-1 rounded transition ${
                  isScrolled ? "bg-[#266091] text-white hover:bg-[#0e3050]" : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {language}
              </button>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const modal = document.getElementById("enquiryModal")
                  if (modal) modal.classList.remove("hidden")
                }}
                className="bg-[#266091] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#0e3050] transition"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden pt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-lg font-medium text-gray-800 hover:text-blue-600">
                Home
              </Link>
              <Link href="#about" className="text-lg font-medium text-gray-800 hover:text-blue-600">
                About
              </Link>
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-800">Services</p>
                <div className="pl-4 space-y-2">
                  {services.slice(0, 5).map((service) => (
                    <Link key={service} href="#services" className="block text-sm text-gray-600 hover:text-blue-600">
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="#blog" className="text-lg font-medium text-gray-800 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/contact" className="text-lg font-medium text-gray-800 hover:text-blue-600">
                Contact Us
              </Link>
              <button
                onClick={() => {
                  const modal = document.getElementById("enquiryModal")
                  if (modal) modal.classList.remove("hidden")
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition text-left"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
