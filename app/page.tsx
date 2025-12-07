import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import HowItWorks from "@/components/sections/how-it-works"
import Industries from "@/components/sections/industries"
import Benefits from "@/components/sections/benefits"
import About from "@/components/sections/about"
import Blog from "@/components/sections/blog"
import Gallery from "@/components/sections/gallery"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"
import EnquiryModal from "@/components/enquiry-modal"
import SmoothScroll from "@/components/smooth-scroll"

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Industries />
        <Benefits />
        <About />
        <Blog />
        <Gallery />
      </main>
      <Footer />
      <EnquiryModal />
    </>
  )
}
