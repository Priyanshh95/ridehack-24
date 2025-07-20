# SmartMed (ridehack-24)

SmartMed is a web application built for an internal college hackathon. It provides a platform for patients, healthcare providers, and caregivers to access and manage medical records, collaborate, and streamline healthcare processes.

## Features
- Modern, responsive UI built with Next.js and Tailwind CSS
- Medicine information, prescription upload, and diagnostic reports
- Timeline and event sections for hackathon activities
- File upload and feedback forms
- Mobile-friendly navigation and layouts

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd ridehack-24
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building for Production
To build the app for production:
```bash
npm run build
npm start
```

### Linting
To check for linting errors:
```bash
npm run lint
```

## Project Structure
- `app/` – Main app entry, layout, and pages
- `components/` – Reusable UI components (Navbar, Footer, Cards, etc.)
- `sections/` – Main page sections (About, Explore, Feedback, etc.)
- `styles/` – Global and component-specific styles
- `public/` – Static assets (images, icons, etc.)
- `constants/` – Static data and configuration
- `utils/` – Utility functions (animations, etc.)

## Customization
- Update content and images in the `public/` and `constants/` folders.
- Modify styles using Tailwind CSS in `styles/globals.css` and `tailwind.config.js`.

## License
This project is for educational and hackathon use only.