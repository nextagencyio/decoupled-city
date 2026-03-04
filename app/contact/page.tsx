import Header from '../components/Header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | City of Maplewood',
  description: 'Contact the City of Maplewood. Reach out about city services, permits, or community resources.',
  keywords: ['Contact City of Maplewood', 'Support', 'Help', 'Get in Touch'],
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-primary-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-primary-200">
              Have questions about city services, permits, or community resources? We are here to help.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-1 bg-primary-600" />
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">info@maplewoodcity.gov</p>
                      <p className="text-gray-600">support@maplewoodcity.gov</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">(555) 012-3456</p>
                      <p className="text-sm text-gray-500">Monday to Friday, 8 AM - 5 PM CST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Office</h3>
                      <p className="text-gray-600">
                        200 Main Street<br />
                        City Hall<br />
                        Maplewood, IL 60302
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-1 bg-accent-500" />
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary-700 text-white py-3 px-4 rounded hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors font-bold"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-primary-50 border border-primary-200 rounded-lg p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Need Immediate Help?</h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                For emergencies, call 911. For non-emergency city services, use the resources below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-700 text-primary-700 rounded hover:bg-primary-700 hover:text-white transition-colors font-bold"
                >
                  View Services
                </a>
                <a
                  href="/departments"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 text-white rounded hover:bg-primary-800 transition-colors font-bold"
                >
                  Find a Department
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
