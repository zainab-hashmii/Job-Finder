# Job Finder

A simple, client-side React application built with Vite for browsing, creating, editing, and deleting job listings. Demonstrates modern React patterns, Tailwind CSS styling, React Router data APIs, and integration with a RESTful `/api/jobs` backend.

---

## 🚀 Features

- **Home Page** hero section with “Browse Jobs” and “Add Job” calls-to-action  
- **Job Listings**: grid view of all jobs (or a limited “Recent Jobs” view)  
- **Job Details**: full description, salary, company info, and management actions  
- **Add & Edit Job** forms with client-side validation  
- **Delete Job** confirmation modal  
- **404 Not Found** page  
- **Loading Spinner** during data fetches  
- **Toast Notifications** for successful operations  

---

## ⚙️ Prerequisites

- **Node.js** ≥ 18  
- **npm** ≥ 9 (or **yarn** / **pnpm**)  
- A running backend exposing:
  - `GET    /api/jobs`
  - `GET    /api/jobs/:id`
  - `POST   /api/jobs`
  - `PUT    /api/jobs/:id`
  - `DELETE /api/jobs/:id`

---

## 💻 Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/<your-username>/job-finder.git
   cd job-finder
