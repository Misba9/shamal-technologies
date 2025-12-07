# Shamal Technologies Website

Modern, production-ready website for Shamal Technologies - Drone & Geospatial Services in Saudi Arabia.

## Tech Stack

- **Framework:** Next.js 16 with React 19
- **Styling:** Tailwind CSS v4 + Bootstrap 5
- **Animations:** Lenis Smooth Scroll + GSAP
- **UI Components:** shadcn/ui + Radix UI
- **Language:** TypeScript

## Features

- Responsive design for all device sizes
- Smooth scrolling navigation
- Animated content transitions
- Professional drone service showcase
- Contact form and inquiry modal
- Blog section
- Gallery showcase

## Project Structure

```
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
```

## Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd shamal-technologies
```

2. **Install dependencies**

```bash
npm install
```

3. **Assets are included**

The project comes with professional drone and geospatial service images:

- ✅ Company logos: `public/assets/logo-white.svg` and `logo-footer.svg`
- ✅ Service images: 8 professional drone service photos
- ✅ Gallery images: 6 project showcase images
- ✅ Favicon and loading icons

**To use your own assets**, simply replace these files while keeping the same filenames.

4. **Start the development server**

```bash
npm run dev
```

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

## Deployment

### Deploy to Vercel (Recommended)

This project is optimized for Vercel deployment with the included `vercel.json` configuration file.

1. Push your code to GitHub/GitLab/Bitbucket
2. Sign up/in to Vercel
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect the Next.js framework
6. Click "Deploy" - no additional configuration needed!

The project includes:
- Automatic build and deployment
- Preview deployments for pull requests
- Custom domain support
- Automatic HTTPS
- Global CDN distribution

### Manual Vercel Deployment

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory for any environment variables:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=info@your-domain.com
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Shamal Technologies. All rights reserved.

## Quick Start

```bash
npm install
npm run dev
# Visit http://localhost:3000
```