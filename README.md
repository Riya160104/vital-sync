# VitalSync - Healthcare Dashboard

A premium healthcare patient management dashboard with complete CRUD operations and real-time data visualization.

## Project Overview

VitalSync is a modern healthcare dashboard built for doctors and hospital staff to manage patients efficiently. It provides complete patient management with beautiful analytics charts and a premium dark-themed UI.


## Tech Stack

- **Frontend:** React 18
- **Routing:** React Router DOM v6
- **State Management:** Zustand with localStorage persistence
- **Charts:** Recharts
- **Styling:** Custom CSS (No Tailwind)
- **Build Tool:** Vite
- **Notifications:** React Hot Toast

## Features

### Mission 14 - Authentication & MVP
- Email/Password authentication (Doctor & Patient roles)
- Protected routes with redirect
- Persistent login using localStorage
- Premium dashboard with stats cards
- Appointments and Doctors pages

### Mission 15 - CRUD & Analytics
- **Create Patient** - Add new patients with form validation
- **Read Patients** - Display patients in premium card grid
- **Update Patient** - Edit existing patient details
- **Delete Patient** - Remove with confirmation dialog
- **Real-time UI** - No page refresh needed for any operation
- **4 Interactive Charts**:
  - Line Chart: Monthly patient admissions
  - Pie Chart: Blood group distribution
  - Bar Chart: Age distribution
  - Bar Chart: Diagnosis distribution
- **Statistics Cards** - Total patients, monthly admissions, and more

## Project Structure
vitalsync-mvp/
├── src/
│ ├── components/
│ │ ├── Layout/
│ │ │ ├── Sidebar.jsx
│ │ │ └── Header.jsx
│ │ ├── Auth/
│ │ │ ├── Login.jsx
│ │ │ └── Register.jsx
│ │ └── Patients/
│ │ ├── PatientCard.jsx
│ │ ├── PatientForm.jsx
│ │ └── DeleteConfirmation.jsx
│ ├── pages/
│ │ ├── LoginPage.jsx
│ │ ├── RegisterPage.jsx
│ │ ├── DashboardPage.jsx
│ │ ├── PatientsPage.jsx
│ │ ├── AppointmentsPage.jsx
│ │ ├── DoctorsPage.jsx
│ │ └── SettingsPage.jsx
│ ├── store/
│ │ ├── authStore.jsx
│ │ └── patientStore.jsx
│ ├── styles/
│ │ └── global.css
│ ├── App.jsx
│ └── index.jsx
├── public/
│ └── index.html
├── package.json
└── vite.config.js

text

## Login Credentials

| Role | Email | Password |
|------|-------|----------|
| Doctor | dr.sharma@vitalsync.com | doctor123 |
| Patient | rahul.verma@vitalsync.com | patient123 |

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Step 1: Clone the repository
```bash
git clone https://github.com/Riya160104/vital-sync.git
cd vital-sync
Step 2: Install dependencies
bash
npm install
Step 3: Run development server
bash
npm run dev
Step 4: Build for production
bash
npm run build

Pages & Functionality
Login Page
Email and password authentication

Role selection (Doctor/Patient)

Link to registration page

Dashboard Page
Statistics cards (total patients, appointments, revenue)

Upcoming appointments list

Recent activities feed

Department-wise patient distribution

Patients Page (CRUD + Charts)
Add Patient: Click "Add New Patient" button → Fill form → Submit

Edit Patient: Click Edit button on any patient card → Modify data → Save

Delete Patient: Click Delete button → Confirm → Patient removed

View Charts: See real-time analytics updating with data changes

Appointments Page
Complete appointments table with status badges

Upcoming schedule view

Doctors Page
Doctor statistics cards

Premium doctor cards with specialties and availability

Settings Page
Profile information editing

Notification preferences

CRUD Operations Explained
Operation	How it works
CREATE	Form opens → User enters data → Submit → Patient added to top of list
READ	Patients displayed in responsive card grid with all details
UPDATE	Edit button opens pre-filled form → Modify → Save → Updates instantly
DELETE	Delete button shows confirmation modal → Confirm → Removed permanently

🎨 Design Features
Glassmorphism Effect - Blur backgrounds on all cards

Gradient UI - Purple to pink gradients throughout

Dark Theme - Premium dark color scheme

Smooth Animations - Hover effects and transitions

Responsive Design - Works on all screen sizes

Custom Scrollbar - Brand-colored scrollbar

🚀 Deployment
The project is deployed on Netlify.

Deploy to Netlify
Connect GitHub repository

Build command: npm run build

Publish directory: dist