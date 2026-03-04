// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredDepartmentsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Department
export interface DrupalDepartment extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  phone?: string
  email?: string
  location?: string
  hours?: string
  departmentCategory?: DrupalTerm[]
  image?: DrupalImage
}

export interface DepartmentsData {
  nodeDepartments: {
    nodes: DrupalDepartment[]
  }
}

// Government Official
export interface DrupalOfficial extends DrupalNode {
  body?: {
    processed: string
  }
  position?: string
  department?: DrupalTerm[]
  email?: string
  phone?: string
  office?: string
  photo?: DrupalImage
}

export interface OfficialsData {
  nodeOfficials: {
    nodes: DrupalOfficial[]
  }
}

// City Service
export interface DrupalService extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  department?: DrupalTerm[]
  onlineUrl?: string
  eligibility?: string
  fee?: string
  image?: DrupalImage
}

export interface ServicesData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

// Public Meeting
export interface DrupalMeeting extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  meetingDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  meetingType?: DrupalTerm[]
  agendaUrl?: string
  image?: DrupalImage
}

export interface MeetingsData {
  nodeMeetings: {
    nodes: DrupalMeeting[]
  }
}

// News Article
export interface DrupalNews extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  category?: DrupalTerm[]
  featured?: boolean
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{
    name: string
    url: string
    width: number
    height: number
  }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
