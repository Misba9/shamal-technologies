import Image from "next/image"
import Link from "next/link"

const blogs = [
  {
    title: "5 Ways Drones Are Transforming Construction in Saudi Arabia",
    excerpt:
      "Discover how drone technology is revolutionizing the construction industry with real-time monitoring and precision mapping.",
    image: "/assets/images/services/construction-monitoring-using-drone-in-saudi-arabia.jpg",
    date: "March 15, 2024",
    slug: "drones-transforming-construction",
  },
  {
    title: "The Future of Agricultural Monitoring with AI and Drones",
    excerpt:
      "Learn how artificial intelligence combined with drone technology is helping farmers optimize crop yields and reduce waste.",
    image: "/assets/images/services/agriculture-monitoring-using-drone-in-saudi-arabia.jpg",
    date: "March 10, 2024",
    slug: "future-agricultural-monitoring",
  },
  {
    title: "Environmental Impact Assessment: A Drone-Based Approach",
    excerpt:
      "Explore how drones are making environmental monitoring more efficient and comprehensive than ever before.",
    image: "/assets/images/services/environmental-monitoring-using-drone-in-saudi-arabia.jpg",
    date: "March 5, 2024",
    slug: "environmental-assessment-drones",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white relative z-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in drone and geospatial technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56">
                <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#266091] font-semibold mb-2">{blog.date}</p>
                <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-[#266091] transition">{blog.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{blog.excerpt}</p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-[#266091] font-semibold hover:text-[#0e3050] transition inline-flex items-center gap-2"
                >
                  Read More <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
