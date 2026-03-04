'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_FEATURED_DEPARTMENTS } from '@/lib/queries'
import { DrupalHomepage, DrupalDepartment } from '@/lib/types'
import { Phone, ArrowRight, Building } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

interface DepartmentsPreviewProps {
  homepageContent?: DrupalHomepage | null
}

interface FeaturedDepartmentsData {
  nodeDepartments: {
    nodes: DrupalDepartment[]
  }
}

export default function DepartmentsPreview({ homepageContent }: DepartmentsPreviewProps) {
  const { data, loading, error } = useQuery<FeaturedDepartmentsData>(GET_FEATURED_DEPARTMENTS)

  const departments = data?.nodeDepartments?.nodes || []
  const sectionTitle = homepageContent?.featuredDepartmentsTitle || 'City Departments'

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg animate-pulse overflow-hidden">
                <div className="h-1 bg-gray-200" />
                <div className="h-48 bg-gray-200" />
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || departments.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the departments that keep our city running and serving residents every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((department) => (
            <Link
              key={department.id}
              href={department.path || `/departments/${department.id}`}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-1 bg-primary-600" />
              <div className="relative h-48 bg-primary-800">
                {department.image?.url ? (
                  <ResponsiveImage
                    src={department.image.url}
                    alt={department.image.alt || department.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    variations={department.image.variations}
                    targetWidth={400}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="w-16 h-16 text-white/30" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {department.title}
                </h3>

                {department.phone && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Phone className="w-4 h-4" />
                    <span>{department.phone}</span>
                  </div>
                )}

                <div className="flex items-center text-primary-700 font-medium group-hover:gap-2 transition-all text-sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/departments"
            className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded hover:bg-primary-800 transition-colors font-bold"
          >
            View All Departments
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
