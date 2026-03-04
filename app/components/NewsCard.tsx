import Link from 'next/link'
import { DrupalNews } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight, Calendar } from 'lucide-react'

interface NewsCardProps {
  item: DrupalNews
}

export default function NewsCard({ item }: NewsCardProps) {
  const dateStr = item.created?.timestamp
    ? new Date(item.created.timestamp * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null

  return (
    <Link
      href={item.path || '#'}
      className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="h-1 bg-accent-500" />
      <div className="relative h-48 bg-primary-800">
        {(item as any).image?.url ? (
          <ResponsiveImage
            src={(item as any).image.url}
            alt={(item as any).image.alt || item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            variations={(item as any).image.variations}
            targetWidth={400}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 text-white/30 text-4xl font-bold">{item.title?.charAt(0)}</div>
          </div>
        )}
      </div>

      <div className="p-6">
        {dateStr && (
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Calendar className="w-3 h-3" />
            <span>{dateStr}</span>
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-primary-700 font-medium group-hover:gap-2 transition-all text-sm">
          Read more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
