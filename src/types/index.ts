export interface NavItem {
  label: string
  href: string
  isAction?: boolean
}

export interface CapabilityItem {
  id: string
  title: string
  description: string
  iconName: string
}

export interface ServiceItem {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  deliverables: string[]
  platforms: string[]
  iconName: string
  tag: string
  advisoryNote?: string
}

export interface ProcessStep {
  stepNumber: string
  title: string
  description: string
  keyActions: string[]
  sampleDeliverable: string
}

export interface IndustrySector {
  id: string
  name: string
  description: string
  commonRisks: string[]
  iconName: string
}

export interface Differentiator {
  id: string
  title: string
  summary: string
  detail: string
  iconName: string
}

export interface CaseSampleStep {
  stage: string
  timeEstimate: string
  title: string
  summary: string
  evidenceDetails: {
    label: string
    value: string
  }[]
  actionTaken: string
  status: 'Flagged' | 'Documented' | 'Transmitted' | 'Resolved' | 'Logged'
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: 'General' | 'Enforcement Scope' | 'Evidence & Process' | 'Legal Status'
}

export interface ConsultationFormData {
  fullName: string
  businessEmail: string
  companyName: string
  brandWebsite: string
  serviceInterest: string
  channelsToReview: string[]
  urgencyLevel: 'low' | 'medium' | 'high' | 'immediate'
  message: string
  consentGiven: boolean
}
