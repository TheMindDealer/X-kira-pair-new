# Overview

A modern, animated portfolio website built with Next.js 16 showcasing a developer's work, skills, experience, and contact information. The site features advanced animations powered by Framer Motion, a clean minimal design with TailwindCSS, and centralized configuration through a single JSON file. The project emphasizes visual appeal through custom cursors, parallax effects, animated backgrounds, and smooth page transitions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: Next.js 16 with React 19.2.0 using the App Router architecture
- Server-side rendering for optimal SEO and performance
- TypeScript for type safety throughout the application
- Single-page application with smooth scroll navigation between sections

**Component Structure**: 
- Modular component-based architecture with 20+ reusable components
- All components located in `app/components/` directory
- Each section (Hero, About, Skills, Experience, Education, Certifications, Projects, Testimonials, Contact) is a standalone component
- Shared UI components include: Navbar, Footer, LoadingScreen, CustomCursor, ScrollProgress, AnimatedBackground

**Styling Strategy**:
- TailwindCSS 4 for utility-first styling
- Custom CSS variables defined in `globals.css` for theming (background, foreground, accent, muted colors)
- Dark theme with minimal color palette (black background, white text, accent colors)
- Responsive design using Tailwind's breakpoint system

**Animation System**:
- Framer Motion for all animations and transitions
- Scroll-triggered animations using `useInView` hook for performance
- Custom animation variants for consistent motion design
- Advanced effects: parallax text scrolling, magnetic buttons, custom cursor tracking
- Spring-based physics for natural movement

**State Management**:
- React hooks (useState, useEffect, useRef) for local component state
- Framer Motion hooks (useScroll, useMotionValue, useSpring) for animation state
- No global state management library - keeps architecture simple

## Configuration Architecture

**Centralized Settings**: 
- Single `settings.json` file contains all editable content
- Imported throughout components using `@/settings.json`
- Sections include: personal info, social links, SEO metadata, skills, services, experience, education, certifications, projects, testimonials, statistics

**Content Structure**:
- Personal information (name, title, email, tagline, availability status)
- Social media links (GitHub, LinkedIn, Twitter)
- SEO configuration (site URL, meta descriptions, keywords, OG images)
- Skills array with proficiency levels
- Services/offerings array with icons and descriptions
- Experience timeline with dates, descriptions, achievements, technologies
- Education history
- Certifications with credential IDs
- Projects portfolio with tech stack, links, featured status
- Client testimonials with ratings
- Statistical counters (projects completed, clients, etc.)

**Benefits of Centralized Config**:
- Non-developers can update content by editing JSON
- No code changes required for content updates
- Consistent data structure across components
- Easy to validate and maintain

## SEO & Metadata

**Next.js Metadata API**:
- Generated dynamically from settings.json
- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card optimization
- Canonical URLs
- Google Site Verification support

**Static Assets**:
- `robots.txt` for search engine crawling permissions
- Sitemap support (referenced in robots.txt)

## Design Patterns

**Intersection Observer Pattern**: 
- Components use `useInView` to trigger animations only when visible
- Improves performance by preventing off-screen animations
- Enhances user experience with staggered reveals

**Compound Component Pattern**:
- Complex components broken into smaller sub-components
- Example: ProjectModal, ContactForm as separate reusable pieces

**Render Props / Custom Hooks**:
- Animation logic extracted into reusable variants
- Scroll tracking and cursor positioning in custom components

# External Dependencies

## Core Framework Dependencies

- **next**: v16.0.0 - React framework for production applications
- **react**: v19.2.0 - UI library
- **react-dom**: v19.2.0 - React DOM renderer
- **typescript**: v5 - Type safety and developer experience

## UI & Styling

- **tailwindcss**: v4 - Utility-first CSS framework
- **@tailwindcss/postcss**: v4 - PostCSS integration for Tailwind
- **lucide-react**: v0.468.0 - Icon library (500+ icons)

## Animation Libraries

- **framer-motion**: v11.11.17 - Production-ready animation library
  - Used for: page transitions, scroll animations, gesture animations, layout animations
  - Provides: useScroll, useInView, useSpring, useMotionValue hooks
- **@popmotion/popcorn**: v0.4.4 - Utility functions for animation
  - Used for: wrap function in parallax text scrolling

## Font System

- **Geist**: Google Fonts integration
  - Geist Sans (primary font)
  - Geist Mono (monospace font for code)
  - Variable fonts for optimal performance

## Development Tools

- **eslint**: v9 - Code linting
- **eslint-config-next**: v16.0.0 - Next.js specific linting rules
- **@types/node**, **@types/react**, **@types/react-dom**: TypeScript type definitions

## Build & Deployment

**Development Server**: 
- Runs on port 5000 (customized from default 3000)
- Bound to 0.0.0.0 for network accessibility
- Hot module replacement enabled

**Production Build**:
- Optimized for Vercel deployment (recommended platform)
- Static generation where possible
- Automatic code splitting
- Image optimization through Next.js Image component

**No Backend/Database**: 
- Pure frontend application
- Contact form currently simulates submission (no actual backend integration)
- All data stored in settings.json (no CMS or database)

## Third-Party Integrations

**Potential Integrations** (referenced but not implemented):
- Email service for contact form (mailto links only)
- Google Analytics (site verification code in settings)
- Social media platforms (links provided)
- CV/Resume download (file path in settings.json)

**No Current External APIs**: Application is self-contained with no runtime API dependencies