'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import DepartmentsPreview from './DepartmentsPreview'
import MeetingsPreview from './MeetingsPreview'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import {
  CreditCard,
  AlertTriangle,
  FileText,
  TreePine,
  Building2,
  Shield,
  Bus,
  Droplets,
  ArrowRight,
  Megaphone,
  Info,
} from 'lucide-react'
import Image from 'next/image'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const quickLinks = [
  { title: 'Pay Bills', description: 'Pay utility bills, taxes, and fees online', icon: CreditCard, href: '/services', color: 'bg-primary-600' },
  { title: 'Report an Issue', description: 'Report potholes, streetlight outages, and more', icon: AlertTriangle, href: '/contact', color: 'bg-accent-600' },
  { title: 'Permits & Licenses', description: 'Apply for building permits and business licenses', icon: FileText, href: '/services', color: 'bg-primary-700' },
  { title: 'Parks & Recreation', description: 'Find programs, reserve facilities, and explore parks', icon: TreePine, href: '/departments', color: 'bg-green-700' },
  { title: 'Public Safety', description: 'Police, fire, and emergency management services', icon: Shield, href: '/departments', color: 'bg-red-700' },
  { title: 'Transit Info', description: 'Bus routes, schedules, and parking information', icon: Bus, href: '/services', color: 'bg-primary-800' },
]

const cityServices = [
  { title: 'City Planning', description: 'Zoning, development plans, and urban design', icon: Building2 },
  { title: 'Public Records', description: 'Access city documents and official records', icon: FileText },
  { title: 'Parks & Green Spaces', description: 'Community parks, trails, and nature preserves', icon: TreePine },
  { title: 'Public Safety', description: 'Police, fire department, and emergency services', icon: Shield },
  { title: 'Public Transit', description: 'Bus routes, schedules, and transportation', icon: Bus },
  { title: 'Water & Utilities', description: 'Water services, billing, and conservation', icon: Droplets },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80&fit=crop', alt: 'Maplewood city skyline', caption: 'Downtown Maplewood' },
  { src: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80&fit=crop', alt: 'Community park in Maplewood', caption: 'Riverside Park' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&fit=crop', alt: 'Community meeting at city hall', caption: 'Community Forum' },
  { src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80&fit=crop', alt: 'Maplewood city hall building', caption: 'City Hall' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Alert / Announcement Banner */}
      <div className="bg-accent-50 border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Megaphone className="w-5 h-5 text-accent-700" />
            </div>
            <p className="text-sm text-accent-900 font-medium">
              <span className="font-bold">Public Notice:</span> City Council meeting scheduled for next Tuesday at 7:00 PM.{' '}
              <a href="/meetings" className="underline hover:text-accent-700">View agenda and details</a>
            </p>
          </div>
        </div>
      </div>

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Quick Links Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Quick Links</h2>
            <p className="text-gray-600 mt-1">Access frequently used city services</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="h-1 bg-primary-600" />
                <div className="p-6 flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${link.color} rounded-lg flex items-center justify-center`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{link.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* City Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">City Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the services that the City of Maplewood provides to residents, businesses, and visitors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityServices.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-1 bg-primary-600" />
                <div className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded hover:bg-primary-800 transition-colors font-bold"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Departments */}
      <ErrorBoundary>
        <DepartmentsPreview homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* City Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our City</h2>
            <p className="text-gray-600">Scenes from around the City of Maplewood</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.caption} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Meetings */}
      <ErrorBoundary>
        <MeetingsPreview />
      </ErrorBoundary>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Official Multi-Column Footer */}
      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* About */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-500 rounded flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-900" />
                </div>
                <span className="text-lg font-bold text-white">City of Maplewood</span>
              </div>
              <p className="text-primary-300 text-sm mb-4">
                An official website of the City of Maplewood. Providing high-quality services, maintaining safe neighborhoods, and fostering a vibrant community for all residents.
              </p>
              <div className="text-primary-400 text-sm space-y-1">
                <p>200 Main Street, Maplewood, IL 60302</p>
                <p>(555) 012-3456</p>
                <p>info@maplewoodcity.gov</p>
              </div>
            </div>

            {/* Government */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Government</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/officials" className="hover:text-accent-400 transition-colors">City Officials</a></li>
                <li><a href="/departments" className="hover:text-accent-400 transition-colors">Departments</a></li>
                <li><a href="/meetings" className="hover:text-accent-400 transition-colors">Public Meetings</a></li>
                <li><a href="/news" className="hover:text-accent-400 transition-colors">News & Announcements</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Services</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/services" className="hover:text-accent-400 transition-colors">All Services</a></li>
                <li><a href="/services" className="hover:text-accent-400 transition-colors">Pay Bills</a></li>
                <li><a href="/services" className="hover:text-accent-400 transition-colors">Permits</a></li>
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Report an Issue</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Connect</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Contact Us</a></li>
                <li><a href="/meetings" className="hover:text-accent-400 transition-colors">Public Hearings</a></li>
                <li><a href="/news" className="hover:text-accent-400 transition-colors">Newsletter</a></li>
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar with accessibility statement */}
        <div className="border-t border-primary-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-400">
              <p>&copy; {new Date().getFullYear()} City of Maplewood. All rights reserved.</p>
              <div className="flex items-center gap-1">
                <Info className="w-3 h-3" />
                <span>An official website of the City of Maplewood</span>
              </div>
              <div className="flex gap-4">
                <a href="/accessibility" className="hover:text-accent-400 transition-colors">Accessibility</a>
                <a href="/privacy" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-accent-400 transition-colors">Terms of Use</a>
                <a href="/sitemap" className="hover:text-accent-400 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
