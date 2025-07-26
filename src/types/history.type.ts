type Status = 'Waiting Feedback' | 'Approved' | 'In Progress' | 'To Do'
type Label = 'UI Design' | 'Branding' | 'Illustration' | 'Motion Graphics' | 'UX Design'

export type Member = {
  avatarUrl: string
  name: string
}

export type HistoryItem = {
  id: string
  name: string
  dueDate: string
  label: {
    text: Label
    textColor: string
    bgColor: string
  }
  status: {
    text: Status
    textColor: string
    bgColor: string
  }
  members: Member[]
}
