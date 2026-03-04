'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_UPCOMING_MEETINGS } from '@/lib/queries'
import { DrupalMeeting } from '@/lib/types'
import { MapPin, ArrowRight, Calendar } from 'lucide-react'

interface UpcomingMeetingsData {
  nodeMeetings: {
    nodes: DrupalMeeting[]
  }
}

function formatMeetingDate(timestamp: number): { month: string; day: string; time: string } {
  const date = new Date(timestamp * 1000)
  return {
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    day: date.getDate().toString(),
    time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
  }
}

export default function MeetingsPreview() {
  const { data, loading, error } = useQuery<UpcomingMeetingsData>(GET_UPCOMING_MEETINGS)

  const meetings = data?.nodeMeetings?.nodes || []

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Meetings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 rounded-lg p-6 animate-pulse">
                <div className="h-12 w-12 bg-white/20 rounded mb-4" />
                <div className="h-6 bg-white/20 rounded w-3/4 mb-2" />
                <div className="h-4 bg-white/20 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || meetings.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Upcoming Meetings</h2>
            <p className="text-primary-200 max-w-2xl">
              Attend public meetings and have your voice heard on important city matters.
            </p>
          </div>
          <Link
            href="/meetings"
            className="hidden md:flex items-center text-accent-400 hover:text-accent-300 font-medium text-sm"
          >
            All Meetings
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {meetings.map((meeting) => {
            const dateInfo = meeting.meetingDate
              ? formatMeetingDate(meeting.meetingDate.timestamp)
              : null

            return (
              <Link
                key={meeting.id}
                href={meeting.path || `/meetings/${meeting.id}`}
                className="group bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex gap-4">
                  {dateInfo && (
                    <div className="flex-shrink-0 text-center bg-accent-500 text-primary-900 rounded-lg p-3 w-16">
                      <div className="text-xs font-bold uppercase">{dateInfo.month}</div>
                      <div className="text-2xl font-bold">{dateInfo.day}</div>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    {meeting.meetingType && meeting.meetingType.length > 0 && (
                      <span className="inline-block text-accent-400 text-xs font-medium mb-1 uppercase tracking-wide">
                        {meeting.meetingType[0].name}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-400 transition-colors line-clamp-2">
                      {meeting.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-primary-300">
                      {dateInfo && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {dateInfo.time}
                        </span>
                      )}
                      {meeting.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {meeting.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/meetings"
            className="inline-flex items-center px-6 py-3 bg-accent-500 text-primary-900 rounded hover:bg-accent-400 transition-colors font-bold"
          >
            View All Meetings
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
