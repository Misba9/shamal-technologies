# Shamal Technologies Website

Modern, production-ready website for Shamal Technologies - Drone & Geospatial Services in Saudi Arabia.

// <CHANGE> Updated tech stack to reflect Next.js instead of Express.js
## Tech Stack

- **Framework:** Next.js 16 with React 19
- **Styling:** Tailwind CSS v4 + Bootstrap 5
- **Animations:** Lenis Smooth Scroll + GSAP
- **UI Components:** shadcn/ui + Radix UI
- **Language:** TypeScript

## Features

// ... existing code ...

## Project Structure

// <CHANGE> Updated folder structure to show Next.js app directory
\`\`\`
shamal-technologies/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── contact/            # Contact page
│   ├── blog/               # Blog pages
│   └── globals.css         # Global styles
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── footer.tsx          # Footer
│   ├── preloader.tsx       # Loading screen
│   ├── smooth-scroll.tsx   # Lenis integration
│   ├── enquiry-modal.tsx   # Contact modal
│   └── sections/           # Page sections
├── public/
│   └── assets/
│       ├── logo-white.svg
│       ├── logo-footer.svg
│       ├── loading.svg
│       └── images/
│           ├── services/   # Service images
│           └── gallery/    # Gallery images
└── package.json
\`\`\`

// <CHANGE> Updated installation steps for Next.js
## Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

\`\`\`bash
git clone <your-repo-url>
cd shamal-technologies
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
\`\`\`

3. **Assets are included**

The project comes with professional drone and geospatial service images:

- ✅ Company logos: `public/assets/logo-white.svg` and `logo-footer.svg`
- ✅ Service images: 8 professional drone service photos
- ✅ Gallery images: 6 project showcase images
- ✅ Favicon and loading icons

**To use your own assets**, simply replace these files while keeping the same filenames.

4. **Start the development server**

\`\`\`bash
npm run dev
\`\`\`

5. **Open in browser**

Navigate to `http://localhost:3000`

## Customization Guide

### 1. Replace Assets (Optional)

The project includes professional placeholder assets:

- **Logo**: Replace `public/assets/logo-white.svg` and `public/assets/logo-footer.svg`
- **Service Images**: Replace images in `public/assets/images/services/`
  - aerial-survey.jpg
  - construction-monitoring.jpg
  - asset-inspection.jpg
  - bathymetric-survey.jpg
  - environmental-monitoring.jpg
  - ai-application.jpg
  - agriculture-monitoring.jpg
  - special-projects.jpg
- **Gallery Images**: Replace images in `public/assets/images/gallery/`

### 2. Update Content

**Homepage**: Edit `app/page.tsx` and component files in `components/sections/`
- Hero title and subtitle
- Service descriptions
- About section text

**Contact Information**: Edit `components/footer.tsx`
- Company address
- Phone numbers
- Email addresses
- Social media links

### 3. Modify Styling

Edit `app/globals.css` to change design tokens:
- Colors (CSS variables in @theme)
- Typography
- Spacing

## Services

1. Aerial Survey
2. Construction Monitoring
3. Asset Inspection
4. Bathymetric & Underwater Survey
5. GIS & Remote Sensing
6. Environmental Monitoring
7. SCAN/CAD to BIM
8. Mining & Exploration
9. Security Surveillance
10. AI Application Development
11. Agriculture Monitoring
12. Special Projects

// <CHANGE> Updated deployment section for Next.js
## Deployment

### Deploy to Vercel (Recommended)

\`\`\`bash
npm run build
\`\`\`

Then deploy to Vercel or any Node.js hosting platform.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

// ... existing code ...

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Shamal Technologies. All rights reserved.

// <CHANGE> Updated quick start for Next.js
## Quick Start

\`\`\`bash
npm install
npm run dev
# Visit http://localhost:3000
