import TodoIcon from '@/assets/icon/note-2.svg?react'
import InProgressIcon from '@/assets/icon/pen-add.svg?react'
import NeedFeedbackIcon from '@/assets/icon/message-text.svg?react'
import CompletedIcon from '@/assets/icon/main-component.svg?react'

import MonitorMobile from '@/assets/icon/monitor-mobile.svg?react'
import MainComponent from '@/assets/icon/main-component.svg?react'
import Element2 from '@/assets/icon/element-2.svg?react'
import Shapes from '@/assets/icon/shapes.svg?react'
import Pentool2 from '@/assets/icon/pen-tool-2.svg?react'
import Shapes2 from '@/assets/icon/shapes-2.svg?react'

import avatarMember1 from '@/assets/images/avatar/avatar-member-1.webp'
import avatarMember2 from '@/assets/images/avatar/avatar-member-2.webp'
import avatarMember3 from '@/assets/images/avatar/avatar-member-3.webp'
import avatarMember4 from '@/assets/images/avatar/avatar-member-4.webp'

import type {
  DashboardDataType,
  ProgressSummaryType,
  ProjectOverviewType,
  SummaryItem,
  UpcomingMeetingType,
} from '@/types/dashboard.type'

const summary: SummaryItem[] = [
  {
    label: 'To Do',
    icon: <TodoIcon width='100%' height='100%' />,
    data: 40,
    color: '#335CFF',
  },
  {
    label: 'In Progress',
    icon: <InProgressIcon width='100%' height='100%' />,
    data: 30,
    color: '#F6B51E',
  },
  {
    label: 'Need Feedback',
    icon: <NeedFeedbackIcon width='100%' height='100%' />,
    data: 20,
    color: '#FF8447',
  },
  {
    label: 'Completed',
    icon: <CompletedIcon width='100%' height='100%' />,
    data: 10,
    color: '#1FC16B',
  },
]

const projectOverview: ProjectOverviewType = {
  labels: ['To Do', 'In Progress', 'Need Feedback', 'Completed'],
  color: ['#EFEBFF', '#E4D8FB', '#C8B1F7', '#AD8FE9'],
  data: [40, 30, 20, 10],
}

const upcomingMeeting: UpcomingMeetingType[] = [
  {
    id: '12345',
    date: 'Today',
    time: '10:00 AM',
    title: 'Meeting with UI Design Team',
    description: 'This weekly progress agenda',
    members: [
      { avatarUrl: avatarMember1, name: 'John Doe' },
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember4, name: 'Michael' },
    ],
  },
  {
    id: '123456',
    date: 'Aug 12, 2025',
    time: '12:00 AM',
    title: 'Meeting with PM & Lead',
    description: 'This weekly progress agenda',
    members: [
      { avatarUrl: avatarMember1, name: 'John Doe' },
      { avatarUrl: avatarMember4, name: 'Alexa' },
    ],
  },
  {
    id: '123457',
    date: 'Aug 12, 2025',
    time: '12:00 AM',
    title: 'Meeting with PM & Lead',
    description: 'This weekly progress agenda',
    members: [
      { avatarUrl: avatarMember1, name: 'John Doe' },
      { avatarUrl: avatarMember4, name: 'Alexa' },
    ],
  },
]

const progressSummaries: ProgressSummaryType[] = [
  {
    id: '1',
    label: 'UI Design',
    task: 8,
    percentage: 16,
    icon: <MonitorMobile width='100%' height='100%' />,
  },
  {
    id: '2',
    label: 'Branding',
    task: 10,
    percentage: 76,
    icon: <MainComponent width='100%' height='100%' />,
  },
  {
    id: '3',
    label: 'Graphic Design',
    task: 2,
    percentage: 90,
    icon: <Element2 width='100%' height='100%' />,
  },
  {
    id: '4',
    label: 'Motion Design',
    task: 1,
    percentage: 100,
    icon: <Shapes width='100%' height='100%' />,
  },
  {
    id: '5',
    label: 'Illustration',
    task: 4,
    percentage: 13,
    icon: <Pentool2 width='100%' height='100%' />,
  },
  {
    id: '6',
    label: '3D Illustration',
    task: 1,
    percentage: 0,
    icon: <Shapes2 width='100%' height='100%' />,
  },
]

export const dashboardData: DashboardDataType = {
  summary,
  projectOverview,
  upcomingMeeting,
  progressSummaries,
}
