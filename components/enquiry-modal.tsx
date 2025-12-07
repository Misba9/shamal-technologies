"use client"

export default function EnquiryModal() {
  const closeModal = () => {
    const modal = document.getElementById("enquiryModal")
    if (modal) modal.classList.add("hidden")
  }

  return (
    <div
      id="enquiryModal"
      className="hidden fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Get a Quote</h2>
            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition text-2xl leading-none">
              ×
            </button>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+966 XX XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Service Interested In *</label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                <option>Aerial Survey</option>
                <option>Construction Monitoring</option>
                <option>Asset Inspection</option>
                <option>Bathymetric Survey</option>
                <option>GIS & Remote Sensing</option>
                <option>Environmental Monitoring</option>
                <option>AI Application Development</option>
                <option>Agriculture Monitoring</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Details *</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
