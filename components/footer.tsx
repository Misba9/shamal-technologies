import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Image src="/assets/logo-footer.svg" alt="Shamal Technologies" width={180} height={60} className="mb-6" />
            <p className="text-gray-400 mb-4">
              Leading provider of drone and geospatial services in Saudi Arabia, delivering precision data and insights.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#266091] transition text-2xl">
                f
              </Link>
              <Link href="#" className="hover:text-[#266091] transition text-2xl">
                𝕏
              </Link>
              <Link href="#" className="hover:text-[#266091] transition text-2xl">
                in
              </Link>
              <Link href="#" className="hover:text-[#266091] transition text-2xl">
                📷
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#266091] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#266091] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#266091] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#266091] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#266091] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-[#266091] transition">
                  Aerial Survey
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#266091] transition">
                  Construction Monitoring
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#266091] transition">
                  Asset Inspection
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#266091] transition">
                  GIS & Remote Sensing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#266091] transition">
                  AI Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#266091]">📍</span>
                <span>Riyadh, Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#266091]">📞</span>
                <span>+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#266091]">✉️</span>
                <span>info@shamal.sa</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#266091]"
                />
                <button type="submit" className="bg-[#266091] hover:bg-[#0e3050] px-4 py-2 rounded-r-lg transition">
                  →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shamal Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}