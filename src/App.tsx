import { useEffect, useMemo, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import logoUrl from './assets/logo.png'
import {
  SiAuth0,
  SiCss,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJest,
  SiLaravel,
  SiLinux,
  SiMaterialdesign,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiSass,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiXampp,
  SiZod,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

type Project = {
  id: string
  title: string
  description: string
  cta: string
  tone: 'blue' | 'teal' | 'orange' | 'purple' | 'mint' | 'green' | 'sky' | 'indigo'
  kind: 'frontend' | 'fullstack'
  liveUrl: string
  repoUrl: string
  client: string
  role: string
  timeline: string
  stack: string[]
  tech: string[]
  highlights: string[]
}

const projects: Project[] = [
  // Full stack (16)
  {
    id: 'fs-ecommerce',
    title: 'E-commerce Platform',
    description: 'E-commerce platform with a customer-first experience, product catalog, and checkout.',
    cta: 'Learn More',
    tone: 'blue',
    kind: 'fullstack',
    liveUrl: 'https://example.com/ecommerce',
    repoUrl: 'https://github.com/example/ecommerce-platform',
    client: 'Retail brand',
    role: 'Full Stack Developer',
    timeline: '4 weeks',
    stack: ['Web App', 'Admin Panel', 'API', 'Database'],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    highlights: ['Product catalog + search', 'Cart & checkout flow', 'Admin inventory tools'],
  },
  {
    id: 'fs-tasks',
    title: 'Task Management App',
    description: 'Teams, tasks, boards, and activity tracking with a clean experience.',
    cta: 'Learn More',
    tone: 'teal',
    kind: 'fullstack',
    liveUrl: 'https://example.com/tasks',
    repoUrl: 'https://github.com/example/task-management-app',
    client: 'Internal team',
    role: 'Full Stack Developer',
    timeline: '3 weeks',
    stack: ['Web App', 'REST API', 'Auth'],
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'WebSockets'],
    highlights: ['Kanban boards', 'Team roles', 'Realtime activity updates'],
  },
  {
    id: 'fs-real-estate',
    title: 'Real Estate Portal',
    description: 'Listings, filters, agent profiles, leads, and admin tooling.',
    cta: 'Learn More',
    tone: 'orange',
    kind: 'fullstack',
    liveUrl: 'https://example.com/real-estate',
    repoUrl: 'https://github.com/example/real-estate-portal',
    client: 'Agency',
    role: 'Full Stack Developer',
    timeline: '5 weeks',
    stack: ['Web App', 'Admin Panel', 'Search'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    highlights: ['Advanced filters', 'Lead capture', 'Admin moderation'],
  },
  {
    id: 'fs-coursely',
    title: 'Coursely — Online Learning Platform',
    description:
      'Full-stack online learning platform where instructors create courses and students purchase and watch them.',
    cta: 'View Details',
    tone: 'purple',
    kind: 'fullstack',
    liveUrl: 'https://github.com/00tatheer00/Coursely-Online-Courses-Platform',
    repoUrl: 'https://github.com/00tatheer00/Coursely-Online-Courses-Platform',
    client: 'Personal project',
    role: 'Full Stack Developer',
    timeline: 'MVP',
    stack: ['Web App', 'REST API', 'Auth', 'Payments', 'Dashboards', 'Webhooks'],
    tech: [
      'React (Vite)',
      'React Router',
      'TailwindCSS',
      'Zustand',
      'Node.js',
      'Express',
      'MongoDB (Mongoose)',
      'JWT',
      'Stripe',
      'Nodemailer',
      'EmailJS (OTP)',
    ],
    highlights: [
      'Register/login with email OTP verification',
      'Student/Instructor/Admin roles (RBAC)',
      'Courses CRUD with sections & lectures',
      'Stripe Checkout + webhook verification',
      'Course catalog search & filtering',
      'Enrollment + progress tracking',
      'Reviews and ratings for enrolled students',
      'Role-based dashboards and management tools',
    ],
  },
  {
    id: 'fs-thestyle',
    title: 'TheStyle — Fashion Store',
    description: 'Production-ready e-commerce fashion store with Stripe payment integration and a smooth shopping flow.',
    cta: 'View Details',
    tone: 'mint',
    kind: 'fullstack',
    liveUrl: 'https://github.com/00tatheer00/thestyle-fashion-store-fullstack-stripe-payment-gateway',
    repoUrl: 'https://github.com/00tatheer00/thestyle-fashion-store-fullstack-stripe-payment-gateway',
    client: 'Personal project',
    role: 'Full Stack Developer',
    timeline: 'MVP',
    stack: ['Web App', 'REST API', 'Payments', 'Webhooks', 'Database'],
    tech: [
      'React 18 (Vite)',
      'TailwindCSS',
      'Framer Motion',
      'Node.js',
      'Express',
      'MongoDB (Mongoose)',
      'Stripe Checkout',
    ],
    highlights: [
      'Multi-product cart with persistent localStorage',
      'Stripe Checkout integration with webhook verification',
      'Product listing with search, filter, and sort',
      'Product details with image gallery',
      'Success/cancel payment flows',
      'Mobile-first responsive UI with animations',
      'Seeded catalog (12+ products) with variants',
    ],
  },
  {
    id: 'fs-student-erp',
    title: 'Student ERP System — UCS',
    description:
      'Full-featured MERN Student ERP for CS faculty: student management, QR attendance, courses & GPA, fees/fines, and role-based dashboards.',
    cta: 'View Details',
    tone: 'green',
    kind: 'fullstack',
    liveUrl: 'https://github.com/00tatheer00/Student-ERP-System',
    repoUrl: 'https://github.com/00tatheer00/Student-ERP-System',
    client: 'Personal project',
    role: 'Full Stack Developer',
    timeline: 'Production-ready build',
    stack: ['Web App', 'REST API', 'Auth', 'Dashboards', 'Reports', 'Uploads'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    highlights: [
      'Student management: CRUD, CSV import/export, search/filters, photo upload, ID card PDF',
      'Attendance: per-student QR codes, scan/mark, prevent double attendance, % tracking',
      'Course management: CRUD with department/semester filters',
      'Results: marks entry + auto GPA calculation, transcript PDF export',
      'Fees + fines modules with payment history and status',
      'Analytics dashboards: dept distribution, strength, attendance trends, GPA distribution, fee/fine summaries',
      'Role-based access: Admin, Teacher, Reception, HOD',
      'Seed scripts for demo users/courses/students',
    ],
  },
  {
    id: 'fs-fitness',
    title: 'Health & Fitness Tracker',
    description: 'Workouts, calories, metrics, streaks, and insights.',
    cta: 'View Details',
    tone: 'green',
    kind: 'fullstack',
    liveUrl: 'https://example.com/fitness',
    repoUrl: 'https://github.com/example/health-fitness-tracker',
    client: 'Personal product',
    role: 'Full Stack Developer',
    timeline: '2 weeks',
    stack: ['Web App', 'Dashboard'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    highlights: ['Workout logging', 'Streaks & goals', 'Weekly insights'],
  },
  {
    id: 'fs-directory',
    title: 'Local Business Directory',
    description: 'Profiles, reviews, search, and map-based discovery.',
    cta: 'Learn More',
    tone: 'sky',
    kind: 'fullstack',
    liveUrl: 'https://example.com/directory',
    repoUrl: 'https://github.com/example/local-business-directory',
    client: 'Local org',
    role: 'Full Stack Developer',
    timeline: '4 weeks',
    stack: ['Web App', 'Search', 'Reviews'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    highlights: ['Search + categories', 'Review system', 'Owner listings'],
  },
  {
    id: 'fs-billing',
    title: 'SaaS Billing Portal',
    description: 'Subscriptions, invoices, and secure billing flows.',
    cta: 'Learn More',
    tone: 'indigo',
    kind: 'fullstack',
    liveUrl: 'https://example.com/billing',
    repoUrl: 'https://github.com/example/saas-billing-portal',
    client: 'SaaS',
    role: 'Full Stack Developer',
    timeline: '3 weeks',
    stack: ['Web App', 'Billing', 'Auth'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    highlights: ['Plans & upgrades', 'Invoice history', 'Secure billing settings'],
  },
  {
    id: 'fs-chat',
    title: 'Realtime Chat App',
    description: 'Presence, typing indicators, and message history with modern UX.',
    cta: 'Learn More',
    tone: 'sky',
    kind: 'fullstack',
    liveUrl: 'https://example.com/chat',
    repoUrl: 'https://github.com/example/realtime-chat-app',
    client: 'Startup',
    role: 'Full Stack Developer',
    timeline: '2 weeks',
    stack: ['Realtime', 'Messaging'],
    tech: ['React', 'Node.js', 'WebSockets', 'Redis'],
    highlights: ['Presence', 'Typing indicators', 'Message history'],
  },
  {
    id: 'fs-inventory',
    title: 'Inventory Management',
    description: 'CRUD, role-based access, and audit logs for business workflows.',
    cta: 'Learn More',
    tone: 'green',
    kind: 'fullstack',
    liveUrl: 'https://example.com/inventory',
    repoUrl: 'https://github.com/example/inventory-management',
    client: 'Business',
    role: 'Full Stack Developer',
    timeline: '4 weeks',
    stack: ['Admin Panel', 'RBAC'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    highlights: ['Role-based access', 'Audit logs', 'Bulk actions'],
  },
  {
    id: 'fs-booking',
    title: 'Booking & Scheduling',
    description: 'Calendar booking, reminders, and admin management.',
    cta: 'Learn More',
    tone: 'mint',
    kind: 'fullstack',
    liveUrl: 'https://example.com/booking',
    repoUrl: 'https://github.com/example/booking-scheduling',
    client: 'Service business',
    role: 'Full Stack Developer',
    timeline: '3 weeks',
    stack: ['Web App', 'Calendar'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    highlights: ['Calendar view', 'Email reminders', 'Admin scheduling'],
  },
  {
    id: 'fs-multitenant',
    title: 'Multi-tenant SaaS Starter',
    description: 'Organizations, roles, invitations, and per-tenant settings.',
    cta: 'Learn More',
    tone: 'blue',
    kind: 'fullstack',
    liveUrl: 'https://example.com/saas-starter',
    repoUrl: 'https://github.com/example/multitenant-saas-starter',
    client: 'SaaS template',
    role: 'Full Stack Developer',
    timeline: '2 weeks',
    stack: ['Auth', 'RBAC', 'Multi-tenant'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma'],
    highlights: ['Tenant isolation', 'Invitations', 'Role permissions'],
  },
  {
    id: 'fs-media',
    title: 'File Uploads & Media Library',
    description: 'Secure uploads, thumbnails, folders, and access control.',
    cta: 'Learn More',
    tone: 'teal',
    kind: 'fullstack',
    liveUrl: 'https://example.com/media',
    repoUrl: 'https://github.com/example/media-library',
    client: 'Content team',
    role: 'Full Stack Developer',
    timeline: '2 weeks',
    stack: ['Uploads', 'Media'],
    tech: ['React', 'Node.js', 'S3'],
    highlights: ['Folder system', 'Thumbnails', 'Permissions'],
  },
  {
    id: 'fs-events',
    title: 'Event Management Platform',
    description: 'Tickets, QR check-in, event pages, and organizer dashboards.',
    cta: 'Learn More',
    tone: 'orange',
    kind: 'fullstack',
    liveUrl: 'https://example.com/events',
    repoUrl: 'https://github.com/example/event-management-platform',
    client: 'Events org',
    role: 'Full Stack Developer',
    timeline: '5 weeks',
    stack: ['Tickets', 'Admin'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    highlights: ['Ticketing', 'QR check-in', 'Organizer dashboard'],
  },
  {
    id: 'fs-monitoring',
    title: 'API Monitoring Dashboard',
    description: 'Uptime checks, alerts, incidents, and SLA reporting.',
    cta: 'Learn More',
    tone: 'sky',
    kind: 'fullstack',
    liveUrl: 'https://example.com/monitoring',
    repoUrl: 'https://github.com/example/api-monitoring-dashboard',
    client: 'DevOps team',
    role: 'Full Stack Developer',
    timeline: '3 weeks',
    stack: ['Monitoring', 'Alerts'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    highlights: ['Uptime checks', 'Alert rules', 'Incident timeline'],
  },
  {
    id: 'fs-cms',
    title: 'Content Management System',
    description: 'Collections, drafts, publishing workflows, and media.',
    cta: 'Learn More',
    tone: 'purple',
    kind: 'fullstack',
    liveUrl: 'https://example.com/cms',
    repoUrl: 'https://github.com/example/content-management-system',
    client: 'Publisher',
    role: 'Full Stack Developer',
    timeline: '6 weeks',
    stack: ['CMS', 'Workflows'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    highlights: ['Drafts', 'Publishing', 'Media management'],
  },

  // Frontend (16)
  {
    id: 'fe-social-dashboard',
    title: 'Social Media Dashboard',
    description: 'Analytics UI, engagement summaries, and sentiment reporting.',
    cta: 'View Details',
    tone: 'indigo',
    kind: 'frontend',
    liveUrl: 'https://example.com/social-dashboard',
    repoUrl: 'https://github.com/example/social-media-dashboard',
    client: 'Marketing team',
    role: 'Frontend Developer',
    timeline: '1 week',
    stack: ['Dashboard UI'],
    tech: ['React', 'TypeScript', 'CSS'],
    highlights: ['Dashboard layout', 'Reusable cards', 'Responsive grid'],
  },
  {
    id: 'fe-portfolio',
    title: 'Portfolio Landing Page',
    description: 'Responsive portfolio UI with animations and section polish.',
    cta: 'View Details',
    tone: 'blue',
    kind: 'frontend',
    liveUrl: 'https://example.com/portfolio',
    repoUrl: 'https://github.com/example/portfolio-landing-page',
    client: 'Personal brand',
    role: 'Frontend Developer',
    timeline: '3 days',
    stack: ['Landing page'],
    tech: ['React', 'CSS', 'Framer Motion'],
    highlights: ['Hero + sections', 'Smooth animations', 'Mobile-first'],
  },
  {
    id: 'fe-admin-ui',
    title: 'Admin Dashboard UI Kit',
    description: 'Charts, tables, cards, and layout system built for clarity.',
    cta: 'View Details',
    tone: 'teal',
    kind: 'frontend',
    liveUrl: 'https://example.com/admin-ui',
    repoUrl: 'https://github.com/example/admin-dashboard-ui-kit',
    client: 'SaaS UI',
    role: 'Frontend Developer',
    timeline: '1 week',
    stack: ['UI Kit'],
    tech: ['React', 'TypeScript', 'CSS'],
    highlights: ['Layout system', 'Table styles', 'Card components'],
  },
  {
    id: 'fe-design-system',
    title: 'Design System Components',
    description: 'Reusable buttons, modals, forms, and navigation components.',
    cta: 'View Details',
    tone: 'purple',
    kind: 'frontend',
    liveUrl: 'https://example.com/design-system',
    repoUrl: 'https://github.com/example/design-system-components',
    client: 'Design system',
    role: 'Frontend Developer',
    timeline: '2 weeks',
    stack: ['Components'],
    tech: ['React', 'TypeScript', 'Storybook'],
    highlights: ['Buttons/modals', 'Form fields', 'Nav components'],
  },
  {
    id: 'fe-landing-ab',
    title: 'Landing Page A/B Layouts',
    description: 'High-converting landing page variants with clean hierarchy.',
    cta: 'View Details',
    tone: 'orange',
    kind: 'frontend',
    liveUrl: 'https://example.com/landing-ab',
    repoUrl: 'https://github.com/example/landing-page-ab-layouts',
    client: 'Growth',
    role: 'Frontend Developer',
    timeline: '4 days',
    stack: ['Marketing'],
    tech: ['HTML', 'CSS', 'React'],
    highlights: ['Variant layouts', 'CTA focus', 'Fast rendering'],
  },
  {
    id: 'fe-product-ui',
    title: 'E-commerce Product UI',
    description: 'Product listing, filters, PDP layout, and cart components.',
    cta: 'View Details',
    tone: 'mint',
    kind: 'frontend',
    liveUrl: 'https://example.com/product-ui',
    repoUrl: 'https://github.com/example/ecommerce-product-ui',
    client: 'E-commerce',
    role: 'Frontend Developer',
    timeline: '1 week',
    stack: ['UI'],
    tech: ['React', 'CSS'],
    highlights: ['Filters', 'PDP layout', 'Cart UI'],
  },
  {
    id: 'fe-charts',
    title: 'Analytics Charts Pack',
    description: 'Reusable chart layouts and dashboard sections.',
    cta: 'View Details',
    tone: 'sky',
    kind: 'frontend',
    liveUrl: 'https://example.com/charts',
    repoUrl: 'https://github.com/example/analytics-charts-pack',
    client: 'Analytics',
    role: 'Frontend Developer',
    timeline: '5 days',
    stack: ['Charts'],
    tech: ['React', 'TypeScript'],
    highlights: ['Chart containers', 'Empty states', 'Responsive charts'],
  },
  {
    id: 'fe-marketing-sections',
    title: 'Marketing Site Sections',
    description: 'Hero, testimonials, pricing, FAQ, and CTA blocks.',
    cta: 'View Details',
    tone: 'indigo',
    kind: 'frontend',
    liveUrl: 'https://example.com/marketing-sections',
    repoUrl: 'https://github.com/example/marketing-site-sections',
    client: 'Marketing',
    role: 'Frontend Developer',
    timeline: '3 days',
    stack: ['Sections'],
    tech: ['HTML', 'CSS'],
    highlights: ['Pricing', 'FAQ', 'Testimonials'],
  },
  {
    id: 'fe-auth-ui',
    title: 'Auth Screens UI',
    description: 'Login, signup, reset password, and verification flows.',
    cta: 'View Details',
    tone: 'green',
    kind: 'frontend',
    liveUrl: 'https://example.com/auth-ui',
    repoUrl: 'https://github.com/example/auth-screens-ui',
    client: 'SaaS UI',
    role: 'Frontend Developer',
    timeline: '3 days',
    stack: ['Auth UI'],
    tech: ['React', 'CSS'],
    highlights: ['Form layout', 'Validation states', 'Responsive'],
  },
  {
    id: 'fe-data-grid',
    title: 'Table & Data Grid UI',
    description: 'Sorting, pagination, empty states, and bulk actions.',
    cta: 'View Details',
    tone: 'teal',
    kind: 'frontend',
    liveUrl: 'https://example.com/data-grid',
    repoUrl: 'https://github.com/example/table-data-grid-ui',
    client: 'Admin',
    role: 'Frontend Developer',
    timeline: '1 week',
    stack: ['Data grid'],
    tech: ['React', 'TypeScript'],
    highlights: ['Pagination', 'Bulk actions', 'Empty states'],
  },
  {
    id: 'fe-mobile-ui',
    title: 'Mobile UI Components',
    description: 'Cards, lists, tabs, and responsive layouts for small screens.',
    cta: 'View Details',
    tone: 'purple',
    kind: 'frontend',
    liveUrl: 'https://example.com/mobile-ui',
    repoUrl: 'https://github.com/example/mobile-ui-components',
    client: 'Mobile web',
    role: 'Frontend Developer',
    timeline: '4 days',
    stack: ['Components'],
    tech: ['CSS', 'React'],
    highlights: ['Responsive cards', 'Tab layouts', 'Touch-friendly'],
  },
  {
    id: 'fe-micro-interactions',
    title: 'Animation Micro-interactions',
    description: 'Hover states, transitions, and polished motion for UX.',
    cta: 'View Details',
    tone: 'blue',
    kind: 'frontend',
    liveUrl: 'https://example.com/micro-interactions',
    repoUrl: 'https://github.com/example/animation-micro-interactions',
    client: 'UX polish',
    role: 'Frontend Developer',
    timeline: '3 days',
    stack: ['Motion'],
    tech: ['Framer Motion', 'CSS'],
    highlights: ['Button states', 'Transitions', 'Hover polish'],
  },
  {
    id: 'fe-blog-ui',
    title: 'Blog UI + Markdown',
    description: 'Typography scale, code blocks, and reading comfort.',
    cta: 'View Details',
    tone: 'orange',
    kind: 'frontend',
    liveUrl: 'https://example.com/blog-ui',
    repoUrl: 'https://github.com/example/blog-ui-markdown',
    client: 'Content',
    role: 'Frontend Developer',
    timeline: '5 days',
    stack: ['Blog UI'],
    tech: ['React', 'CSS'],
    highlights: ['Typography', 'Code blocks', 'Reading layout'],
  },
  {
    id: 'fe-settings-ui',
    title: 'Settings & Preferences UI',
    description: 'Toggles, selects, validation, and grouped settings layout.',
    cta: 'View Details',
    tone: 'sky',
    kind: 'frontend',
    liveUrl: 'https://example.com/settings-ui',
    repoUrl: 'https://github.com/example/settings-preferences-ui',
    client: 'SaaS',
    role: 'Frontend Developer',
    timeline: '4 days',
    stack: ['Settings'],
    tech: ['React', 'TypeScript'],
    highlights: ['Grouped settings', 'Validation', 'Clear labels'],
  },
  {
    id: 'fe-car-rental',
    title: 'Car Rental — Responsive Web App',
    description:
      'Modern and responsive car rental UI where users browse cars, view details, and select a vehicle for rental.',
    cta: 'View Details',
    tone: 'mint',
    kind: 'frontend',
    liveUrl: 'https://github.com/00tatheer00/Car-Rental',
    repoUrl: 'https://github.com/00tatheer00/Car-Rental',
    client: 'Personal project',
    role: 'Frontend Developer',
    timeline: 'MVP',
    stack: ['Web App', 'UI', 'Components'],
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    highlights: ['Browse available cars', 'Vehicle details view', 'Clean responsive layout', 'Component-based architecture'],
  },
  {
    id: 'fe-checkout',
    title: 'Checkout UI Flow',
    description: 'Address, shipping, payment, and order summary UI.',
    cta: 'View Details',
    tone: 'indigo',
    kind: 'frontend',
    liveUrl: 'https://example.com/checkout',
    repoUrl: 'https://github.com/example/checkout-ui-flow',
    client: 'E-commerce',
    role: 'Frontend Developer',
    timeline: '1 week',
    stack: ['Checkout UI'],
    tech: ['React', 'TypeScript', 'CSS'],
    highlights: ['Step-based checkout', 'Order summary', 'Payment UI'],
  },
]

function Thumb({ tone }: { tone: Project['tone'] }) {
  return (
    <div className={`thumb thumb--${tone}`} aria-hidden="true">
      <div className="thumb__frame">
        <div className="thumb__topbar" />
        <div className="thumb__content">
          <div className="thumb__left">
            <div className="thumb__line thumb__line--w1" />
            <div className="thumb__line thumb__line--w2" />
            <div className="thumb__line thumb__line--w3" />
            <div className="thumb__chip" />
            <div className="thumb__chip thumb__chip--2" />
          </div>
          <div className="thumb__right">
            <div className="thumb__card" />
            <div className="thumb__card thumb__card--2" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Icon({ name }: { name: 'ig' | 'in' | 'fb' | 'yt' | 'lt' }) {
  const common = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none' as const }
  if (name === 'ig') {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'in') {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M7 8v13H3V8h4ZM5 6.4A2.3 2.3 0 1 0 5 1.8a2.3 2.3 0 0 0 0 4.6Z"
          fill="currentColor"
        />
        <path
          d="M10 8h3.9v1.8h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.5 5 6.2V21h-4v-6c0-1.7 0-3.8-2.5-3.8S14 13 14 14.9V21h-4V8Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  if (name === 'fb') {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M14 8.5V7c0-.8.4-1.2 1.3-1.2H17V3h-2.2C12.6 3 11 4.4 11 6.9v1.6H9v2.7h2V21h3v-9.8h2.4L17 8.5H14Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  if (name === 'yt') {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M21.7 8.2a3 3 0 0 0-2.1-2.1C17.9 5.6 12 5.6 12 5.6s-5.9 0-7.6.5A3 3 0 0 0 2.3 8.2 31.3 31.3 0 0 0 2 12c0 1.2.1 2.5.3 3.8a3 3 0 0 0 2.1 2.1c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a3 3 0 0 0 2.1-2.1c.2-1.3.3-2.6.3-3.8 0-1.2-.1-2.5-.3-3.8Z"
          fill="currentColor"
          opacity="0.92"
        />
        <path d="M10.6 15.2V8.8L16 12l-5.4 3.2Z" fill="#fff" />
      </svg>
    )
  }
  return (
    <svg {...common} aria-hidden="true">
      <path
        d="M12 2.5c2.7 0 4.8.7 6.2 2.1 1.4 1.4 2.1 3.5 2.1 6.2s-.7 4.8-2.1 6.2c-1.4 1.4-3.5 2.1-6.2 2.1s-4.8-.7-6.2-2.1C4.4 15.6 3.7 13.5 3.7 10.8s.7-4.8 2.1-6.2C7.2 3.2 9.3 2.5 12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.8 12.2c1.9 0 3.4-1.5 3.4-3.4V7.6h3v1.2c0 3.6-2.9 6.5-6.5 6.5H7.6v-3h1.2Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  )
}

type TechId =
  | 'react'
  | 'ts'
  | 'next'
  | 'vite'
  | 'html'
  | 'css'
  | 'sass'
  | 'tailwind'
  | 'mui'
  | 'framer'
  | 'node'
  | 'express'
  | 'nestjs'
  | 'php'
  | 'laravel'
  | 'xampp'
  | 'mysql'
  | 'postgres'
  | 'mongo'
  | 'redis'
  | 'prisma'
  | 'rest'
  | 'graphql'
  | 'jwt'
  | 'oauth'
  | 'ws'
  | 'zod'
  | 'rq'
  | 'redux'
  | 'jest'
  | 'playwright'
  | 'docker'
  | 'nginx'
  | 'linux'
  | 'aws'
  | 'cicd'

function TechIcon({ id, label }: { id: TechId; label: string }) {
  const size = 22
  const iconMap: Partial<Record<TechId, IconType>> = {
    react: SiReact,
    ts: SiTypescript,
    next: SiNextdotjs,
    vite: SiVite,
    html: SiHtml5,
    css: SiCss,
    sass: SiSass,
    tailwind: SiTailwindcss,
    mui: SiMaterialdesign,
    framer: SiFramer,
    node: SiNodedotjs,
    express: SiExpress,
    nestjs: SiNestjs,
    php: undefined,
    laravel: SiLaravel,
    xampp: SiXampp,
    mysql: SiMysql,
    postgres: SiPostgresql,
    mongo: SiMongodb,
    redis: SiRedis,
    prisma: SiPrisma,
    graphql: SiGraphql,
    jwt: undefined,
    oauth: SiAuth0,
    ws: SiSocketdotio,
    zod: SiZod,
    rq: SiReactquery,
    redux: SiRedux,
    jest: SiJest,
    playwright: undefined,
    docker: SiDocker,
    nginx: SiNginx,
    linux: SiLinux,
    aws: undefined,
    cicd: SiGithubactions,
  }

  const brandColors: Partial<Record<TechId, string>> = {
    react: '#61DAFB',
    ts: '#3178C6',
    next: '#111827',
    vite: '#646CFF',
    html: '#E34F26',
    css: '#1572B6',
    sass: '#CC6699',
    tailwind: '#38BDF8',
    mui: '#007FFF',
    framer: '#111827',
    node: '#3C873A',
    express: '#111827',
    nestjs: '#E0234E',
    laravel: '#FF2D20',
    xampp: '#FB7A24',
    mysql: '#00758F',
    postgres: '#336791',
    mongo: '#47A248',
    redis: '#D82C20',
    prisma: '#0C344B',
    graphql: '#E10098',
    jwt: '#111827',
    oauth: '#EB5424',
    ws: '#111827',
    zod: '#4F46E5',
    rq: '#EF4444',
    redux: '#764ABC',
    jest: '#C21325',
    playwright: '#111827',
    docker: '#2496ED',
    nginx: '#009639',
    linux: '#111827',
    aws: '#FF9900',
    cicd: '#0EA5E9',
  }

  const Cmp = iconMap[id]
  if (Cmp) return <Cmp size={size} color={brandColors[id] ?? 'currentColor'} aria-hidden />

  // Text fallback (if we don't have an icon yet)
  return (
    <svg className={`tech__icon tech__icon--${id}`} width={22} height={22} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="6" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <text
        x="12"
        y="14"
        textAnchor="middle"
        fontSize="7"
        fontWeight="800"
        fill="currentColor"
        style={{ letterSpacing: '0.3px' }}
      >
        {label.slice(0, 4).toUpperCase()}
      </text>
    </svg>
  )
}

const techCategories: { title: string; items: { id: TechId; label: string }[] }[] = [
  {
    title: 'Frontend',
    items: [
      { id: 'react', label: 'React' },
      { id: 'ts', label: 'TypeScript' },
      { id: 'next', label: 'Next.js' },
      { id: 'vite', label: 'Vite' },
      { id: 'html', label: 'HTML' },
      { id: 'css', label: 'CSS' },
      { id: 'sass', label: 'Sass' },
      { id: 'tailwind', label: 'Tailwind CSS' },
      { id: 'mui', label: 'Material UI' },
      { id: 'framer', label: 'Framer Motion' },
      { id: 'rq', label: 'React Query' },
      { id: 'redux', label: 'Redux Toolkit' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { id: 'node', label: 'Node.js' },
      { id: 'express', label: 'Express' },
      { id: 'nestjs', label: 'NestJS' },
      { id: 'php', label: 'PHP' },
      { id: 'laravel', label: 'Laravel' },
      { id: 'rest', label: 'REST' },
      { id: 'graphql', label: 'GraphQL' },
      { id: 'jwt', label: 'JWT' },
      { id: 'oauth', label: 'OAuth' },
      { id: 'ws', label: 'WebSockets' },
      { id: 'zod', label: 'Zod' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { id: 'mysql', label: 'MySQL' },
      { id: 'postgres', label: 'PostgreSQL' },
      { id: 'mongo', label: 'MongoDB' },
      { id: 'redis', label: 'Redis' },
      { id: 'prisma', label: 'Prisma' },
      { id: 'xampp', label: 'XAMPP' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { id: 'docker', label: 'Docker' },
      { id: 'nginx', label: 'Nginx' },
      { id: 'linux', label: 'Linux' },
      { id: 'aws', label: 'AWS' },
      { id: 'cicd', label: 'CI/CD' },
    ],
  },
  {
    title: 'Testing',
    items: [
      { id: 'jest', label: 'Jest' },
      { id: 'playwright', label: 'Playwright' },
    ],
  },
]

export default function App() {
  const [page, setPage] = useState<'home' | 'projects' | 'details'>('home')
  const [filter, setFilter] = useState<Project['kind']>('frontend')
  const [visibleCount, setVisibleCount] = useState(4)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isBootLoading, setIsBootLoading] = useState(true)
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false)
  const projectsMenuRef = useRef<HTMLDivElement | null>(null)
  const [contactOpen, setContactOpen] = useState(false)
  const contactRef = useRef<HTMLDivElement | null>(null)
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [contactError, setContactError] = useState<string>('')

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.kind === filter),
    [filter],
  )

  useEffect(() => {
    setVisibleCount(4)
    setIsLoadingMore(false)
  }, [filter])

  useEffect(() => {
    const t = setTimeout(() => setIsBootLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    setProjectsMenuOpen(false)
  }, [page])

  useEffect(() => {
    if (!projectsMenuOpen) return

    const onDown = (e: PointerEvent) => {
      const el = projectsMenuRef.current
      if (!el) return
      if (e.target instanceof Node && !el.contains(e.target)) setProjectsMenuOpen(false)
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProjectsMenuOpen(false)
    }

    window.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [projectsMenuOpen])

  useEffect(() => {
    if (!contactOpen) return

    const onDown = (e: PointerEvent) => {
      const el = contactRef.current
      if (!el) return
      if (e.target instanceof Node && !el.contains(e.target)) setContactOpen(false)
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setContactOpen(false)
    }

    window.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [contactOpen])

  const upsertHidden = (form: HTMLFormElement, name: string, value: string) => {
    const existing = form.querySelector<HTMLInputElement>(`input[type="hidden"][name="${name}"]`)
    if (existing) {
      existing.value = value
      return
    }
    const el = document.createElement('input')
    el.type = 'hidden'
    el.name = name
    el.value = value
    form.appendChild(el)
  }

  const normalizeEmailJsFields = (form: HTMLFormElement) => {
    const fromName = form.querySelector<HTMLInputElement>('input[name="from_name"]')?.value ?? ''
    const replyTo = form.querySelector<HTMLInputElement>('input[name="reply_to"]')?.value ?? ''
    const subject = form.querySelector<HTMLInputElement>('input[name="subject"]')?.value ?? ''
    const message = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]')?.value ?? ''

    // Common EmailJS variable names (covers many templates)
    upsertHidden(form, 'user_name', fromName)
    upsertHidden(form, 'name', fromName)
    upsertHidden(form, 'from', fromName)
    upsertHidden(form, 'user_email', replyTo)
    upsertHidden(form, 'email', replyTo)
    upsertHidden(form, 'from_email', replyTo)
    upsertHidden(form, 'contact_email', replyTo)
    upsertHidden(form, 'to_name', 'Tatheer')
    upsertHidden(form, 'to_email', 'tatheerabidi00@gmail.com')
    upsertHidden(form, 'recipient', 'tatheerabidi00@gmail.com')
    upsertHidden(form, 'to', 'tatheerabidi00@gmail.com')
    upsertHidden(form, 'project_subject', subject)
    upsertHidden(form, 'title', subject)
    upsertHidden(form, 'message_html', message)
    upsertHidden(form, 'message_text', message)
  }

  const sendContact = async (form: HTMLFormElement) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

    if (!serviceId || !templateId || !publicKey) {
      setContactStatus('error')
      setContactError('Email service is not configured yet. Add EmailJS keys to your .env and restart dev server.')
      return
    }

    setContactStatus('sending')
    setContactError('')

    try {
      // Prefer send() so we can guarantee recipient params
      const fromName = form.querySelector<HTMLInputElement>('input[name="from_name"]')?.value ?? ''
      const replyTo = form.querySelector<HTMLInputElement>('input[name="reply_to"]')?.value ?? ''
      const subject = form.querySelector<HTMLInputElement>('input[name="subject"]')?.value ?? ''
      const message = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]')?.value ?? ''

      await emailjs.send(
        serviceId,
        templateId,
        {
          // sender
          from_name: fromName,
          user_name: fromName,
          name: fromName,
          reply_to: replyTo,
          user_email: replyTo,
          email: replyTo,
          from_email: replyTo,

          // recipient (fixes "recipients address is empty")
          to_name: 'Tatheer',
          to_email: 'tatheerabidi00@gmail.com',
          to: 'tatheerabidi00@gmail.com',
          recipient: 'tatheerabidi00@gmail.com',

          // content
          subject,
          project_subject: subject,
          title: subject,
          message,
          message_text: message,
          message_html: message,
        },
        { publicKey },
      )

      // Also keep fields normalized (useful if template relies on sendForm in future)
      normalizeEmailJsFields(form)
      setContactStatus('sent')
      form.reset()
      setTimeout(() => setContactOpen(false), 2500)
    } catch (err) {
      setContactStatus('error')
      setContactError(
        'Failed to send. If it still says recipient is empty, set your EmailJS template "To Email" to your address or add {{to_email}} in the template To field.',
      )
      // Optional: keep for debugging during dev
      console.error(err)
    } finally {
      setTimeout(() => setContactStatus('idle'), 3000)
    }
  }

  const goProjects = (kind?: Project['kind']) => {
    if (kind) setFilter(kind)
    setPage('projects')
  }

  const openDetails = (id: string) => {
    setSelectedProjectId(id)
    setPage('details')
  }

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) ?? null,
    [selectedProjectId],
  )

  const loadMore = async () => {
    if (isLoadingMore) return
    const remaining = filteredProjects.length - visibleCount
    if (remaining <= 0) return

    setIsLoadingMore(true)
    await new Promise((r) => setTimeout(r, 1000))
    setVisibleCount((c) => Math.min(filteredProjects.length, c + 4))
    setIsLoadingMore(false)
  }

  return (
    <div className={`page ${page === 'home' ? 'page--home' : 'page--alt'}`}>
      <header className="top">
        <div className="container">
          <div className="top__bar">
            <div className="brand">
              <div className="brand__mark">
                <img className="brand__logo" src={logoUrl} alt="Tatheer logo" />
              </div>
              <div className="brand__text">Tatheer</div>
            </div>

            <nav className="nav" aria-label="Primary">
              <button
                className={`nav__btn ${page === 'home' ? 'is-active' : ''}`}
                type="button"
                onClick={() => setPage('home')}
              >
                Home
              </button>

              <div
                className={`dropdown ${projectsMenuOpen ? 'dropdown--open' : ''}`}
                ref={projectsMenuRef}
              >
                <button
                  className="dropdown__trigger"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={projectsMenuOpen}
                  onClick={() => setProjectsMenuOpen((v) => !v)}
                >
                  Projects
                  <span className="dropdown__chev" aria-hidden="true">
                    ▾
                  </span>
                </button>
                <div className="dropdown__menu" role="menu" aria-label="Projects filter">
                  <button
                    className={`dropdown__item ${filter === 'frontend' ? 'is-active' : ''}`}
                    type="button"
                    role="menuitemradio"
                    aria-checked={filter === 'frontend'}
                    onClick={() => {
                      goProjects('frontend')
                      setProjectsMenuOpen(false)
                    }}
                  >
                    Frontend Projects
                  </button>
                  <button
                    className={`dropdown__item ${filter === 'fullstack' ? 'is-active' : ''}`}
                    type="button"
                    role="menuitemradio"
                    aria-checked={filter === 'fullstack'}
                    onClick={() => {
                      goProjects('fullstack')
                      setProjectsMenuOpen(false)
                    }}
                  >
                    Full Stack Projects
                  </button>
                </div>
              </div>
            </nav>

            <button
              className="hire"
              type="button"
              onClick={() => {
                setProjectsMenuOpen(false)
                setContactError('')
                setContactStatus('idle')
                setContactOpen(true)
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="content" key={`${page}:${selectedProjectId ?? ''}`}>
          {isBootLoading ? (
            <div className="boot" aria-label="Loading">
              <div className="boot__hero skeleton" aria-hidden="true">
                <div className="boot__line boot__line--h1" />
                <div className="boot__line boot__line--h2" />
                <div className="boot__line boot__line--p1" />
                <div className="boot__line boot__line--p2" />
              </div>
              <div className="boot__row">
                <div className="boot__card skeleton" aria-hidden="true" />
                <div className="boot__card skeleton" aria-hidden="true" />
              </div>
              <div className="boot__grid" aria-hidden="true">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div className="card skeleton" key={`boot-skel-${i}`}>
                    <div className="thumb skeleton__thumb" />
                    <div className="card__body">
                      <div className="skeleton__line skeleton__line--t" />
                      <div className="skeleton__line skeleton__line--d1" />
                      <div className="skeleton__line skeleton__line--d2" />
                    </div>
                  <div className="card__cta skeleton__btn" />
                  </div>
                ))}
              </div>
            </div>
          ) : page === 'home' ? (
            <>
              <section className="hero hero--home">
                <h1 className="hero__title">
                  Showcasing My Latest
                  <br />
                  Projects &amp; Solutions
                </h1>
                <p className="hero__sub">
                  Explore a curated collection of my frontend and full-stack applications,
                  <br />
                  built with passion from Peshawar, Pakistan.
                </p>
              </section>

              <section className="categories" aria-label="Project categories">
                <div className="category category--left">
                  <div className="category__head">
                    <div>
                      <div className="category__kicker">Category</div>
                      <h2 className="category__title">Frontend Projects</h2>
                      <p className="category__desc">
                        UI-heavy builds: landing pages, dashboards, design systems and components.
                      </p>
                    </div>
                    <button className="category__btn" type="button" onClick={() => goProjects('frontend')}>
                      View Frontend
                    </button>
                  </div>
                </div>

                <div className="category category--right">
                  <div className="category__head">
                    <div>
                      <div className="category__kicker">Category</div>
                      <h2 className="category__title">Full Stack Projects</h2>
                      <p className="category__desc">
                        End-to-end apps: auth, APIs, databases, realtime features and admin tools.
                      </p>
                    </div>
                    <button className="category__btn" type="button" onClick={() => goProjects('fullstack')}>
                      View Full Stack
                    </button>
                  </div>
                </div>
              </section>

              <section className="stats" aria-label="Quick stats">
                <div className="stat">
                  <div className="stat__num">32+</div>
                  <div className="stat__label">Projects shipped</div>
                </div>
                <div className="stat">
                  <div className="stat__num">3–7d</div>
                  <div className="stat__label">Typical MVP turnaround</div>
                </div>
                <div className="stat">
                  <div className="stat__num">100%</div>
                  <div className="stat__label">Responsive-first</div>
                </div>
                <div className="stat">
                  <div className="stat__num">A+</div>
                  <div className="stat__label">UI polish mindset</div>
                </div>
              </section>

              <section className="panel" aria-label="What I do">
                <div className="panel__head">
                  <div>
                    <div className="panel__kicker">Services</div>
                    <h2 className="panel__title">Professional, production-ready builds</h2>
                    <p className="panel__desc">
                      From pixel-perfect UI to scalable full-stack systems—clean UX, clear code, and
                      fast iteration.
                    </p>
                  </div>
                  <a
                    className="panel__cta"
                    href="https://drive.google.com/file/d/1zMZhqjNw0h35NL6uRxD9JI9lHQBsS5h6/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download CV
                  </a>
                </div>

                <div className="features" aria-label="Highlights">
                  <div className="feature">
                    <div className="feature__title">Frontend engineering</div>
                    <div className="feature__desc">React UI, state patterns, component systems, and accessibility.</div>
                  </div>
                  <div className="feature">
                    <div className="feature__title">Full-stack delivery</div>
                    <div className="feature__desc">APIs, auth, DB design, deployment workflows, and admin panels.</div>
                  </div>
                  <div className="feature">
                    <div className="feature__title">Performance & UX</div>
                    <div className="feature__desc">Fast loads, smooth interactions, sensible defaults, and clarity.</div>
                  </div>
                </div>

                <div className="tech" aria-label="Tech stack">
                  {techCategories.map((c) => (
                    <section className="tech__section" key={c.title} aria-label={c.title}>
                      <div className="tech__title">{c.title}</div>
                      <div className="tech__grid">
                        {c.items.map((it) => (
                          <div className="tech__tile" key={it.id} title={it.label} aria-label={it.label}>
                            <TechIcon id={it.id} label={it.label} />
                            <div className="tech__name">{it.label}</div>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </section>

              <section className="cta" aria-label="Call to action">
                <div className="cta__inner">
                  <div>
                    <div className="cta__kicker">Let’s build something</div>
                    <h2 className="cta__title">Have a project in mind?</h2>
                    <p className="cta__desc">
                      Share a brief and I’ll respond with a clear plan, timeline, and estimate.
                    </p>
                  </div>
                  <div className="cta__actions">
                    <a className="cta__btn cta__btn--primary" href="mailto:tatheerabidi00@gmail.com">
                      Email Me
                    </a>
                    <a
                      className="cta__btn"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        goProjects()
                      }}
                    >
                      See Projects
                    </a>
                  </div>
                </div>
              </section>
            </>
          ) : page === 'projects' ? (
            <>
              <section className="hero hero--projects">
                <h1 className="hero__title">Projects</h1>
                <p className="hero__sub">
                  Showing: <strong>{filter === 'frontend' ? 'Frontend Projects' : 'Full Stack Projects'}</strong>
                </p>
                <div className="segmented" role="tablist" aria-label="Projects filter">
                  <button
                    className={`segmented__btn ${filter === 'frontend' ? 'is-active' : ''}`}
                    type="button"
                    role="tab"
                    aria-selected={filter === 'frontend'}
                    onClick={() => setFilter('frontend')}
                  >
                    Frontend
                  </button>
                  <button
                    className={`segmented__btn ${filter === 'fullstack' ? 'is-active' : ''}`}
                    type="button"
                    role="tab"
                    aria-selected={filter === 'fullstack'}
                    onClick={() => setFilter('fullstack')}
                  >
                    Full Stack
                  </button>
                </div>
              </section>

              <section className="grid" aria-label="Projects">
                {filteredProjects.slice(0, visibleCount).map((p) => (
                  <article
                    className="card card--clickable"
                    key={p.title}
                    tabIndex={0}
                    role="link"
                    aria-label={`View details: ${p.title}`}
                    onClick={() => openDetails(p.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') openDetails(p.id)
                    }}
                  >
                    <Thumb tone={p.tone} />
                    <div className="card__body">
                      <h3 className="card__title">{p.title}</h3>
                      <p className="card__desc">{p.description}</p>
                    </div>
                    <button
                      className="card__cta"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        openDetails(p.id)
                      }}
                    >
                      View Details
                    </button>
                  </article>
                ))}

                {isLoadingMore
                  ? Array.from({ length: Math.min(4, Math.max(0, filteredProjects.length - visibleCount)) }).map(
                      (_, idx) => (
                        <div className="card skeleton" key={`sk-${filter}-${visibleCount}-${idx}`} aria-hidden="true">
                          <div className="thumb skeleton__thumb" />
                          <div className="card__body">
                            <div className="skeleton__line skeleton__line--t" />
                            <div className="skeleton__line skeleton__line--d1" />
                            <div className="skeleton__line skeleton__line--d2" />
                          </div>
                          <div className="card__cta skeleton__btn" />
                        </div>
                      ),
                    )
                  : null}
              </section>

              <div className="more">
                <button
                  className="more__btn"
                  type="button"
                  onClick={loadMore}
                  disabled={isLoadingMore || visibleCount >= filteredProjects.length}
                >
                  {visibleCount >= filteredProjects.length ? 'No more projects' : isLoadingMore ? 'Loading…' : 'View More'}
                </button>
              </div>
            </>
          ) : (
            <>
              {selectedProject ? (
                <section className="details" aria-label="Project details">
                  <button className="details__back" type="button" onClick={() => setPage('projects')}>
                    ← Back to Projects
                  </button>

                  <div className="details__top">
                    <div className="details__meta">
                      <div className="details__kicker">
                        {selectedProject.kind === 'frontend' ? 'Frontend Project' : 'Full Stack Project'}
                      </div>
                      <h1 className="details__title">{selectedProject.title}</h1>
                      <p className="details__sub">{selectedProject.description}</p>

                      <div className="details__chips" aria-label="Project facts">
                        <span className="pill">Client: {selectedProject.client}</span>
                        <span className="pill">Role: {selectedProject.role}</span>
                        <span className="pill">Timeline: {selectedProject.timeline}</span>
                      </div>

                      <div className="details__actions">
                        <a
                          className="cta__btn cta__btn--primary"
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Preview
                        </a>
                        <a className="cta__btn" href={selectedProject.repoUrl} target="_blank" rel="noreferrer">
                          GitHub Repo
                        </a>
                      </div>
                    </div>

                    <div className="details__hero" aria-label="Website screenshot">
                      <div className={`shot shot--${selectedProject.tone}`}>
                        <div className="shot__bar">
                          <div className="shot__dot" />
                          <div className="shot__dot" />
                          <div className="shot__dot" />
                        </div>
                        <div className="shot__body">
                          <div className="shot__sidebar" />
                          <div className="shot__content">
                            <div className="shot__h" />
                            <div className="shot__p" />
                            <div className="shot__p shot__p--2" />
                            <div className="shot__grid">
                              <div className="shot__card" />
                              <div className="shot__card" />
                              <div className="shot__card" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="details__cols">
                    <div className="panel">
                      <div className="panel__head">
                        <div>
                          <div className="panel__kicker">Stack</div>
                          <h2 className="panel__title">What it includes</h2>
                          <p className="panel__desc">Key building blocks and deliverables for this project.</p>
                        </div>
                      </div>
                      <div className="stack" aria-label="Stack">
                        {selectedProject.stack.map((t) => (
                          <span className="pill" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="panel">
                      <div className="panel__head">
                        <div>
                          <div className="panel__kicker">Tech</div>
                          <h2 className="panel__title">Tools & technologies</h2>
                          <p className="panel__desc">Main frameworks, libraries, and tooling used.</p>
                        </div>
                      </div>
                      <div className="stack" aria-label="Tech used">
                        {selectedProject.tech.map((t) => (
                          <span className="pill" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="panel">
                    <div className="panel__head">
                      <div>
                        <div className="panel__kicker">Highlights</div>
                        <h2 className="panel__title">What was built</h2>
                        <p className="panel__desc">A quick breakdown of the most important features.</p>
                      </div>
                    </div>
                    <ul className="details__list">
                      {selectedProject.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              ) : (
                <section className="details" aria-label="Project details">
                  <button className="details__back" type="button" onClick={() => setPage('projects')}>
                    ← Back to Projects
                  </button>
                  <div className="panel">
                    <div className="panel__head">
                      <div>
                        <div className="panel__kicker">Not found</div>
                        <h2 className="panel__title">Project not found</h2>
                        <p className="panel__desc">Please go back and select a project again.</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </>
          )}
          </div>
        </div>
      </main>

      <a className="wa" href="https://wa.me/923275792600" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2a9.7 9.7 0 0 0-9.7 9.7c0 1.7.5 3.3 1.3 4.7L2 22l5.8-1.5a9.7 9.7 0 0 0 4.2 1c5.4 0 9.7-4.3 9.7-9.7A9.7 9.7 0 0 0 12 2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3.4.9.9-3.3-.2-.3a8 8 0 1 1 7.1 4Z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M16.7 14.7c-.2.5-1.1 1-1.5 1-.3.1-.7.1-1.1 0-.3-.1-.7-.2-1.1-.4-2-.9-3.3-3.2-3.4-3.4-.1-.2-.7-.9-.7-1.8 0-.9.5-1.4.6-1.6.2-.2.3-.2.4-.2h.3c.1 0 .3 0 .4.3.1.3.6 1.6.7 1.7.1.1.1.2 0 .4-.1.2-.2.3-.3.4l-.2.2c-.1.1-.2.2-.1.4.1.2.5.9 1.1 1.5.7.7 1.3 1 1.5 1.1.2.1.3.1.4-.1l.5-.7c.1-.2.3-.2.4-.2.2 0 1.1.5 1.7.8.2.1.3.2.3.3 0 .1 0 .6-.2 1Z"
            fill="currentColor"
          />
        </svg>
      </a>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__left">Contact Information</div>
          <div className="footer__center" aria-label="Social links">
            <a
              className="social"
              href="https://www.youtube.com/@tech4edges"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="yt" />
            </a>
            <a className="social" href="https://instagram.com/tatheerii" aria-label="Instagram" target="_blank" rel="noreferrer">
              <Icon name="ig" />
            </a>
            <a className="social" href="https://linkedin.com/in/tatheer-hussain" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <Icon name="in" />
            </a>
            <a className="social" href="https://facebook.com/tatheerhussainsth" aria-label="Facebook" target="_blank" rel="noreferrer">
              <Icon name="fb" />
            </a>
            <a className="social" href="https://linktr.ee/tatheer_hussain" aria-label="Linktree" target="_blank" rel="noreferrer">
              <Icon name="lt" />
            </a>
          </div>
          <div className="footer__right">© Copyright, Pakistan</div>
        </div>
      </footer>

      {contactOpen ? (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Contact form">
          <div className="modal__backdrop" />
          <div className="modal__panel" ref={contactRef}>
            <div className="modal__head">
              <div>
                <div className="modal__kicker">Contact</div>
                <div className="modal__title">Hire Tatheer</div>
                <div className="modal__sub">Tell me about your project and I’ll get back to you.</div>
              </div>
              <button className="modal__close" type="button" onClick={() => setContactOpen(false)} aria-label="Close">
                ✕
              </button>
            </div>

            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault()
                void sendContact(e.currentTarget)
              }}
            >
              <div className="form__row">
                <label className="field">
                  <div className="field__label">Name</div>
                  <input className="field__input" name="from_name" required placeholder="Your name" />
                </label>
                <label className="field">
                  <div className="field__label">Email</div>
                  <input className="field__input" name="reply_to" type="email" required placeholder="you@email.com" />
                </label>
              </div>

              <label className="field">
                <div className="field__label">Subject</div>
                <input className="field__input" name="subject" required placeholder="Website / App / Landing page" />
              </label>

              <label className="field">
                <div className="field__label">Message</div>
                <textarea className="field__textarea" name="message" required rows={5} placeholder="Describe your project, budget, and timeline." />
              </label>

              {contactStatus === 'error' ? <div className="form__error">{contactError}</div> : null}
              {contactStatus === 'sent' ? <div className="form__success">Sent! I’ll reply soon.</div> : null}

              <div className="form__actions">
                <button className="cta__btn" type="button" onClick={() => setContactOpen(false)}>
                  Cancel
                </button>
                <button className="cta__btn cta__btn--primary" type="submit" disabled={contactStatus === 'sending'}>
                  {contactStatus === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}

