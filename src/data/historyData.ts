import avatarMember1 from '@/assets/images/avatar/avatar-member-1.webp'
import avatarMember2 from '@/assets/images/avatar/avatar-member-2.webp'
import avatarMember3 from '@/assets/images/avatar/avatar-member-3.webp'
import avatarMember4 from '@/assets/images/avatar/avatar-member-4.webp'
import avatarMember5 from '@/assets/images/avatar/avatar-member-5.webp'
import avatarMember6 from '@/assets/images/avatar/avatar-member-6.webp'
import avatarMember7 from '@/assets/images/avatar/avatar-member-7.webp'
import avatarMember8 from '@/assets/images/avatar/avatar-member-8.webp'
import avatarMember9 from '@/assets/images/avatar/avatar-member-9.webp'
import type { HistoryItem } from '@/types/history.type'

const STATUS = {
  WAITING_FEEDBACK: 'Waiting Feedback' as const,
  APPROVED: 'Approved' as const,
  IN_PROGRESS: 'In Progress' as const,
  TO_DO: 'To Do' as const,
}

const statusValues = {
  waitingFeedback: {
    text: STATUS.WAITING_FEEDBACK,
    bgColor: '#FFD5C0',
    textColor: '#682F12',
  },
  approved: {
    text: STATUS.APPROVED,
    bgColor: '#C2F5DA',
    textColor: '#0B4627',
  },
  inProgress: {
    text: STATUS.IN_PROGRESS,
    bgColor: '#FFECC0',
    textColor: '#624C18',
  },
  toDo: {
    text: STATUS.TO_DO,
    bgColor: '#C0D5FF',
    textColor: '#122368',
  },
}
const LABELS = {
  UI_DESIGN: 'UI Design' as const,
  BRANDING: 'Branding' as const,
  ILLUSTRATION: 'Illustration' as const,
  MOTION_GRAPHICS: 'Motion Graphics' as const,
  UX_DESIGN: 'UX Design' as const,
}

const labels = {
  uiDesign: {
    text: LABELS.UI_DESIGN,
    bgColor: '#EBF1FF',
    textColor: '#122368',
  },
  branding: {
    text: LABELS.BRANDING,
    bgColor: '#FFEBF4',
    textColor: '#1E0B16',
  },
  uxDesign: {
    text: LABELS.UX_DESIGN,
    bgColor: '#EFEBFF',
    textColor: '#110821',
  },
  illustration: {
    text: LABELS.ILLUSTRATION,
    bgColor: '#E0FAEC',
    textColor: '#0B4627',
  },
  motionGraphics: {
    text: LABELS.MOTION_GRAPHICS,
    bgColor: '#FFFAEB',
    textColor: '#624C18',
  },
}

export const historyData: HistoryItem[] = [
  {
    id: '1',
    name: 'Homepage UI Concept - V1.2',
    dueDate: 'June 15, 2025',
    label: labels.uiDesign,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember1, name: 'Joanna' },
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember4, name: 'Michael' },
    ],
  },
  {
    id: '2',
    name: 'Branding Kit Final Assets',
    dueDate: 'May 30, 2025',
    label: labels.branding,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember5, name: 'Joanna' },
      { avatarUrl: avatarMember6, name: 'Alexa' },
      { avatarUrl: avatarMember7, name: 'David' },
      { avatarUrl: avatarMember8, name: 'Michael' },
    ],
  },
  {
    id: '3',
    name: 'Landing Page Wireframe – V0.9',
    dueDate: 'May 12, 2025',
    label: labels.uxDesign,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember9, name: 'Joanna' },
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember4, name: 'Michael' },
    ],
  },
  {
    id: '4',
    name: 'Animated Product Teaser - V1.0',
    dueDate: 'July 5, 2025',
    label: labels.motionGraphics,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember1, name: 'Joanna' },
      { avatarUrl: avatarMember5, name: 'Alexa' },
      { avatarUrl: avatarMember6, name: 'David' },
    ],
  },
  {
    id: '5',
    name: 'Illustration Pack - Summer Edition',
    dueDate: 'August 1, 2025',
    label: labels.illustration,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember7, name: 'Michael' },
      { avatarUrl: avatarMember8, name: 'Joanna' },
      { avatarUrl: avatarMember9, name: 'Alexa' },
    ],
  },
  {
    id: '6',
    name: 'Mobile App Redesign Concept',
    dueDate: 'July 20, 2025',
    label: labels.uiDesign,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember4, name: 'Michael' },
      { avatarUrl: avatarMember1, name: 'Joanna' },
    ],
  },
  {
    id: '7',
    name: 'Client Pitch Deck Design',
    dueDate: 'July 28, 2025',
    label: labels.branding,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember5, name: 'Joanna' },
      { avatarUrl: avatarMember6, name: 'David' },
      { avatarUrl: avatarMember8, name: 'Michael' },
    ],
  },
  {
    id: '8',
    name: 'User Journey Flowchart',
    dueDate: 'August 8, 2025',
    label: labels.uxDesign,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember4, name: 'Michael' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
      { avatarUrl: avatarMember7, name: 'David' },
    ],
  },
  {
    id: '9',
    name: 'Explainer Video Assets',
    dueDate: 'August 15, 2025',
    label: labels.motionGraphics,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember1, name: 'Joanna' },
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember6, name: 'Alexa' },
    ],
  },
  {
    id: '10',
    name: 'Character Sketch Concepts',
    dueDate: 'August 20, 2025',
    label: labels.illustration,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember4, name: 'Michael' },
      { avatarUrl: avatarMember5, name: 'Joanna' },
      { avatarUrl: avatarMember7, name: 'David' },
    ],
  },
  {
    id: '11',
    name: 'Signup Form Microinteractions',
    dueDate: 'August 22, 2025',
    label: labels.uiDesign,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember1, name: 'Joanna' },
      { avatarUrl: avatarMember6, name: 'Alexa' },
    ],
  },
  {
    id: '12',
    name: 'Logo Concepts for Event Campaign',
    dueDate: 'September 1, 2025',
    label: labels.branding,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember7, name: 'David' },
    ],
  },
  {
    id: '13',
    name: 'Prototype Testing - Round 1',
    dueDate: 'September 3, 2025',
    label: labels.uxDesign,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember8, name: 'Michael' },
    ],
  },
  {
    id: '14',
    name: 'Explainer Animation Script',
    dueDate: 'September 5, 2025',
    label: labels.motionGraphics,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember4, name: 'Michael' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
    ],
  },
  {
    id: '15',
    name: 'Festival Poster Illustration',
    dueDate: 'September 10, 2025',
    label: labels.illustration,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember5, name: 'Joanna' },
      { avatarUrl: avatarMember6, name: 'Alexa' },
    ],
  },
  {
    id: '16',
    name: 'Dark Mode UI Exploration',
    dueDate: 'September 12, 2025',
    label: labels.uiDesign,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember7, name: 'David' },
      { avatarUrl: avatarMember1, name: 'Joanna' },
    ],
  },
  {
    id: '17',
    name: 'Investor Pitch Slide Template',
    dueDate: 'September 15, 2025',
    label: labels.branding,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember8, name: 'Michael' },
    ],
  },
  {
    id: '18',
    name: 'Information Architecture Revamp',
    dueDate: 'September 20, 2025',
    label: labels.uxDesign,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
    ],
  },
  {
    id: '19',
    name: 'Product Feature Animation',
    dueDate: 'September 22, 2025',
    label: labels.motionGraphics,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember4, name: 'Michael' },
      { avatarUrl: avatarMember5, name: 'Joanna' },
    ],
  },
  {
    id: '20',
    name: 'Mascot Character Development',
    dueDate: 'September 25, 2025',
    label: labels.illustration,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember6, name: 'Alexa' },
      { avatarUrl: avatarMember7, name: 'David' },
    ],
  },
  {
    id: '21',
    name: 'Dashboard UI Improvements',
    dueDate: 'October 1, 2025',
    label: labels.uiDesign,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember1, name: 'Joanna' },
      { avatarUrl: avatarMember3, name: 'David' },
    ],
  },
  {
    id: '22',
    name: 'Rebranding Strategy Outline',
    dueDate: 'October 3, 2025',
    label: labels.branding,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember4, name: 'Michael' },
    ],
  },
  {
    id: '23',
    name: 'Heuristic Evaluation Checklist',
    dueDate: 'October 6, 2025',
    label: labels.uxDesign,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember5, name: 'Joanna' },
      { avatarUrl: avatarMember8, name: 'Michael' },
    ],
  },
  {
    id: '24',
    name: 'Interactive Loading Animation',
    dueDate: 'October 10, 2025',
    label: labels.motionGraphics,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember6, name: 'Alexa' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
    ],
  },
  {
    id: '25',
    name: 'Children’s Book Cover Art',
    dueDate: 'October 15, 2025',
    label: labels.illustration,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember7, name: 'David' },
      { avatarUrl: avatarMember1, name: 'Joanna' },
    ],
  },
  {
    id: '26',
    name: 'Settings Page Layout',
    dueDate: 'October 20, 2025',
    label: labels.uiDesign,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember4, name: 'Michael' },
    ],
  },
  {
    id: '27',
    name: 'Corporate Identity Guidelines',
    dueDate: 'October 23, 2025',
    label: labels.branding,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember5, name: 'Joanna' },
      { avatarUrl: avatarMember6, name: 'Alexa' },
    ],
  },
  {
    id: '28',
    name: 'Usability Audit Report',
    dueDate: 'October 26, 2025',
    label: labels.uxDesign,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember8, name: 'Michael' },
    ],
  },
  {
    id: '29',
    name: 'Launch Promo Motion Banners',
    dueDate: 'October 29, 2025',
    label: labels.motionGraphics,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember4, name: 'Michael' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
    ],
  },
  {
    id: '30',
    name: 'Comic Series Illustration Style',
    dueDate: 'November 1, 2025',
    label: labels.illustration,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember5, name: 'Joanna' },
      { avatarUrl: avatarMember7, name: 'David' },
    ],
  },
  {
    id: '31',
    name: 'Notification Component Refactor',
    dueDate: 'November 3, 2025',
    label: labels.uiDesign,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember1, name: 'Joanna' },
      { avatarUrl: avatarMember2, name: 'Alexa' },
    ],
  },
  {
    id: '32',
    name: 'Packaging Mockups Presentation',
    dueDate: 'November 5, 2025',
    label: labels.branding,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember6, name: 'Alexa' },
    ],
  },
  {
    id: '33',
    name: 'Onboarding Journey Audit',
    dueDate: 'November 6, 2025',
    label: labels.uxDesign,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember4, name: 'Michael' },
      { avatarUrl: avatarMember5, name: 'Joanna' },
    ],
  },
  {
    id: '34',
    name: 'Holiday Campaign Animation',
    dueDate: 'November 8, 2025',
    label: labels.motionGraphics,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember6, name: 'Alexa' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
    ],
  },
  {
    id: '35',
    name: 'E-Book Illustration Series',
    dueDate: 'November 10, 2025',
    label: labels.illustration,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember7, name: 'David' },
      { avatarUrl: avatarMember8, name: 'Michael' },
    ],
  },
  {
    id: '36',
    name: 'Navigation Redesign Proposal',
    dueDate: 'November 12, 2025',
    label: labels.uiDesign,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember1, name: 'Joanna' },
      { avatarUrl: avatarMember4, name: 'Michael' },
    ],
  },
  {
    id: '37',
    name: 'Social Media Rebrand Plan',
    dueDate: 'November 14, 2025',
    label: labels.branding,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember5, name: 'Joanna' },
    ],
  },
  {
    id: '38',
    name: 'Form UX Optimization Study',
    dueDate: 'November 15, 2025',
    label: labels.uxDesign,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember6, name: 'Alexa' },
    ],
  },
  {
    id: '39',
    name: 'Teaser Animation Draft',
    dueDate: 'November 18, 2025',
    label: labels.motionGraphics,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember4, name: 'Michael' },
      { avatarUrl: avatarMember8, name: 'Joanna' },
    ],
  },
  {
    id: '40',
    name: 'Animal Mascot Sketches',
    dueDate: 'November 20, 2025',
    label: labels.illustration,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember5, name: 'Joanna' },
      { avatarUrl: avatarMember7, name: 'David' },
    ],
  },
  {
    id: '41',
    name: 'Mobile Nav Design Patterns',
    dueDate: 'November 22, 2025',
    label: labels.uiDesign,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember1, name: 'Joanna' },
      { avatarUrl: avatarMember3, name: 'David' },
    ],
  },
  {
    id: '42',
    name: 'Brand Guidelines for Merch',
    dueDate: 'November 24, 2025',
    label: labels.branding,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember6, name: 'Alexa' },
    ],
  },
  {
    id: '43',
    name: 'Navigation Flow Diagrams',
    dueDate: 'November 26, 2025',
    label: labels.uxDesign,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember4, name: 'Michael' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
    ],
  },
  {
    id: '44',
    name: 'Product Tour Motion Design',
    dueDate: 'November 28, 2025',
    label: labels.motionGraphics,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember5, name: 'Joanna' },
      { avatarUrl: avatarMember7, name: 'David' },
    ],
  },
  {
    id: '45',
    name: 'Character Poses Exploration',
    dueDate: 'November 30, 2025',
    label: labels.illustration,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember8, name: 'Michael' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
    ],
  },
  {
    id: '46',
    name: 'Typography System Update',
    dueDate: 'December 2, 2025',
    label: labels.uiDesign,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember1, name: 'Joanna' },
      { avatarUrl: avatarMember2, name: 'Alexa' },
    ],
  },
  {
    id: '47',
    name: 'Startup Visual Identity Pack',
    dueDate: 'December 4, 2025',
    label: labels.branding,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember5, name: 'Joanna' },
    ],
  },
  {
    id: '48',
    name: 'Accessibility Test Results',
    dueDate: 'December 6, 2025',
    label: labels.uxDesign,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember6, name: 'Alexa' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
    ],
  },
  {
    id: '49',
    name: 'Holiday Promo Animation',
    dueDate: 'December 8, 2025',
    label: labels.motionGraphics,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember4, name: 'Michael' },
      { avatarUrl: avatarMember7, name: 'David' },
    ],
  },
  {
    id: '50',
    name: 'Line Art Concept Development',
    dueDate: 'December 10, 2025',
    label: labels.illustration,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember8, name: 'Michael' },
      { avatarUrl: avatarMember5, name: 'Joanna' },
    ],
  },
  {
    id: '51',
    name: 'Dark Theme Component Audit',
    dueDate: 'December 12, 2025',
    label: labels.uiDesign,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember4, name: 'Michael' },
    ],
  },
  {
    id: '52',
    name: 'Eco Campaign Logo Kit',
    dueDate: 'December 14, 2025',
    label: labels.branding,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember6, name: 'Alexa' },
    ],
  },
  {
    id: '53',
    name: 'User Interview Insight Cards',
    dueDate: 'December 15, 2025',
    label: labels.uxDesign,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember7, name: 'David' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
    ],
  },
  {
    id: '54',
    name: 'Splash Animation Loop',
    dueDate: 'December 18, 2025',
    label: labels.motionGraphics,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember1, name: 'Joanna' },
      { avatarUrl: avatarMember4, name: 'Michael' },
    ],
  },
  {
    id: '55',
    name: 'Magazine Cover Sketches',
    dueDate: 'December 20, 2025',
    label: labels.illustration,
    status: statusValues.approved,
    members: [
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember5, name: 'Joanna' },
    ],
  },
  {
    id: '56',
    name: 'Sidebar Navigation UI Kit',
    dueDate: 'December 22, 2025',
    label: labels.uiDesign,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember6, name: 'Alexa' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
    ],
  },
  {
    id: '57',
    name: 'Brand Evolution Timeline',
    dueDate: 'December 24, 2025',
    label: labels.branding,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember3, name: 'David' },
      { avatarUrl: avatarMember7, name: 'David' },
    ],
  },
  {
    id: '58',
    name: 'Interaction Design Critique',
    dueDate: 'December 26, 2025',
    label: labels.uxDesign,
    status: statusValues.toDo,
    members: [
      { avatarUrl: avatarMember8, name: 'Michael' },
      { avatarUrl: avatarMember1, name: 'Joanna' },
    ],
  },
  {
    id: '59',
    name: 'Launch Countdown Animation',
    dueDate: 'December 28, 2025',
    label: labels.motionGraphics,
    status: statusValues.inProgress,
    members: [
      { avatarUrl: avatarMember5, name: 'Joanna' },
      { avatarUrl: avatarMember6, name: 'Alexa' },
    ],
  },
  {
    id: '60',
    name: 'Storybook Illustration Final',
    dueDate: 'December 30, 2025',
    label: labels.illustration,
    status: statusValues.waitingFeedback,
    members: [
      { avatarUrl: avatarMember2, name: 'Alexa' },
      { avatarUrl: avatarMember9, name: 'Joanna' },
    ],
  },
]
