export const waraqaProject = {
  title: "Waraqa (ورقة)",
  subtitle: "Full-Stack Online Learning & School Management Platform",
  role: "Freelance Full-Stack Developer",
  timeline: "2022",
  location: "Alexandria, Egypt (Client Project)",
  deployment: "DigitalOcean (Linux Ubuntu, Nginx, SSL, DNS)",
  overview:
    "Waraqa is a comprehensive school administration and online learning system developed for a private educational institution. The platform replaced fragmented manual spreadsheets with a secure, centralized web application supporting multi-role access for administrators, teachers, students, and guardians.",
  highlights: [
    {
      title: "Role-Based Access Control",
      desc: "Granular authorization separating Admin, Teacher, Student, and Guardian dashboards with JWT security.",
    },
    {
      title: "Class & Schedule Management",
      desc: "Automated timetable generation, course assignments, and classroom schedule tracking.",
    },
    {
      title: "Billing & Invoicing System",
      desc: "Student fee tracking, custom invoice generation, payment status logs, and financial records.",
    },
    {
      title: "Production Infrastructure",
      desc: "Independently provisioned and configured Linux VPS on DigitalOcean, Nginx reverse proxy, custom domain DNS, and automated SSL.",
    },
  ],
  techStack: [
    "Vue.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JWT Authentication",
    "DigitalOcean",
    "Linux (Ubuntu)",
    "Nginx",
    "SSL / Let's Encrypt",
  ],
  screenshots: [
    {
      id: 1,
      title: "Admin Analytics & Operations Dashboard",
      caption:
        "High-level administrative hub displaying real-time metrics for active classes, student counts, staff roster, and operational indicators.",
      image: "/waraqa/admin-dashboard.png",
      tag: "Admin Dashboard",
    },
    {
      id: 2,
      title: "Secure Authentication & Login Portal",
      caption:
        "Clean, responsive entry portal featuring JWT-based credentials authentication, role routing, and session persistence.",
      image: "/waraqa/auth-login.png",
      tag: "Authentication",
    },
    {
      id: 3,
      title: "Class Timetable & Schedule Management",
      caption:
        "Populated schedule matrix organizing course timings, assigned teachers, room numbers, and academic tracks.",
      image: "/waraqa/classes-schedule.png",
      tag: "Course Scheduling",
    },
    {
      id: 4,
      title: "Faculty & Teachers Directory",
      caption:
        "Centralized roster for instructors with subject specializations, contact information, and teaching assignment logs.",
      image: "/waraqa/teachers-roster.png",
      tag: "Staff Directory",
    },
    {
      id: 5,
      title: "Guardians & Parents Management",
      caption:
        "Parent directory linked to student profiles for attendance notifications, emergency contacts, and administrative updates.",
      image: "/waraqa/guardians-directory.png",
      tag: "Guardian Portal",
    },
    {
      id: 6,
      title: "Student Admissions & Academic Records",
      caption:
        "Comprehensive student records management including enrollment status, grade levels, and academic histories.",
      image: "/waraqa/students-records.png",
      tag: "Student Records",
    },
    {
      id: 7,
      title: "Tuition Invoicing & Billing Ledger",
      caption:
        "Financial management module tracking tuition invoices, installment payments, receipt issuance, and overdue balances.",
      image: "/waraqa/billing-invoices.png",
      tag: "Billing & Ledger",
    },
    {
      id: 8,
      title: "Teacher Workspace & Daily Schedule",
      caption:
        "Dedicated workspace for educators displaying daily class agendas, student rosters, and curriculum notes.",
      image: "/waraqa/teacher-portal.png",
      tag: "Teacher Portal",
    },
    {
      id: 9,
      title: "Teacher Subject & Classroom Schedule",
      caption:
        "Detailed classroom timetable showing subject allocations, weekly hours, and session schedules per group.",
      image: "/waraqa/teacher-classes.png",
      tag: "Classroom Schedule",
    },
  ],
};
