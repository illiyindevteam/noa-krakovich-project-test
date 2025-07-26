export type SummaryItem = {
  label: string
  icon: React.ReactNode
  data: number
  color: string
}

export type ProjectOverviewType = {
  labels: string[]
  color: string[]
  data: number[]
}

export type UpcomingMeetingType = {
  id: string
  date: string
  time: string
  title: string
  description: string
  members: { avatarUrl: string; name: string }[]
}

export type ProgressSummaryType = {
  id: string
  label: string
  task: number
  percentage: number
  icon: React.ReactNode
}

export type DashboardDataType = {
  summary: SummaryItem[]
  projectOverview: ProjectOverviewType
  upcomingMeeting: UpcomingMeetingType[]
  progressSummaries: ProgressSummaryType[]
}
