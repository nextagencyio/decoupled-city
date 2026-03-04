import Link from 'next/link'
import { DrupalMeeting } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'

interface MeetingCardProps {
  item: DrupalMeeting
}

export default function MeetingCard({ item }: MeetingCardProps) {
  const dateStr = (item as any).meetingDate?.timestamp
    ? new Date((item as any).meetingDate.timestamp * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null

  return (
    <Link
      href={item.path || '#'}
      className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="h-1 bg-primary-700" />
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
        <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-2">
          {dateStr && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {dateStr}
            </span>
          )}
          {(item as any).location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {(item as any).location}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-primary-700 font-medium group-hover:gap-2 transition-all text-sm">
          View details
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
