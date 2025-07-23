# NC-Army Website

## Overview

This is a modern, responsive website for the fictional NC-Army, a military organization responsible for security and order in Narco City. The application is built as a full-stack web application with a React frontend and Express backend, featuring military recruitment, department information, training modules, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom military color palette
- **Component Library**: Radix UI components with shadcn/ui styling
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Development**: Hot reload with Vite middleware in development
- **Production**: Static file serving for built frontend

### Database Strategy
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (via Neon Database serverless driver)
- **Schema**: Shared TypeScript schema definitions
- **Migrations**: Drizzle Kit for schema management
- **Development Fallback**: In-memory storage for development/testing

## Key Components

### Frontend Components
1. **Navigation System**: Fixed navigation with smooth scrolling and active section detection
2. **Hero Section**: Military-themed landing with call-to-action buttons
3. **Information Sections**: About, Structure, Departments, Training modules
4. **Interactive Forms**: Application and contact forms with validation
5. **Responsive Design**: Mobile-first approach with breakpoint handling

### Backend Services
1. **Application Management**: CRUD operations for recruitment applications
2. **Contact System**: Message handling and status tracking
3. **User Management**: Basic user authentication structure (prepared)
4. **Storage Layer**: Abstracted storage interface supporting both database and memory storage

### Shared Resources
1. **Schema Definitions**: Centralized database schema with Zod validation
2. **Type Safety**: Full TypeScript integration across frontend and backend
3. **API Contracts**: Type-safe API communication

## Data Flow

### Application Process
1. User fills application form on frontend
2. Form validation using React Hook Form + Zod
3. POST request to `/api/applications` endpoint
4. Backend validates and stores application
5. Success/error feedback to user via toast notifications

### Content Management
1. Static content rendered from component definitions
2. Dynamic content fetched via TanStack Query
3. Optimistic updates for better user experience
4. Error boundaries and loading states

### Contact System
1. Contact form submission to `/api/contact` endpoint
2. Message storage with status tracking
3. Administrative interface ready for implementation

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **react-hook-form**: Performance-focused form library
- **zod**: TypeScript schema validation

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-***: Replit-specific development enhancements

### UI Components
- Complete shadcn/ui component library integration
- Custom military-themed color scheme
- Responsive design utilities
- Icon library (Lucide React)

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild compiles TypeScript server to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production

### Environment Configuration
- **Development**: Vite dev server with Express API proxy
- **Production**: Single Express server serving both API and static files
- **Database**: Environment variable configuration for database URL

### Scalability Considerations
- **Database**: Serverless PostgreSQL for automatic scaling
- **Storage**: Abstracted storage interface allows easy migration
- **Deployment**: Single-server deployment ready for containerization

### Performance Optimizations
- **Code Splitting**: Vite automatic code splitting
- **Caching**: Query caching via TanStack Query
- **Asset Optimization**: Vite's built-in asset optimization
- **Database**: Efficient Drizzle ORM queries

The application is designed as a complete military recruitment and information platform with modern web technologies, responsive design, and scalable architecture patterns.

## Recent Changes (January 2025)

### Design Modernization & Army Styling
- **Enhanced Military Color Palette**: Updated to more authentic army colors with tactical green, desert sand, and charcoal tones
- **Advanced Animations**: Added military-themed animations including radar sweeps, tactical pulses, and slide-in effects
- **Hero Section Overhaul**: Complete redesign with HUD overlay, real-time clock, rotating radar indicator (eye-catcher element)
- **Military Typography**: Implemented uppercase military headings with proper letter spacing and mono fonts
- **About Section Enhancement**: Added classified styling, military stats bar, and enhanced mission statement with decorative corners
- **Navigation Modernization**: Military-style logo, tactical color scheme, and active section indicators
- **Tactical Grid Background**: Subtle grid overlay for military aesthetic
- **Status Indicator**: Floating real-time status widget showing system operational status, online count, and current time

### Structure & Requirements Updates (January 2025)
- **Updated Rank Structure**: Generäle (5), Abteilungsleitung (8), Drill Sergeants (10), Soldaten (unlimited), Rekruten (15 training slots)
- **Department Modernization**: MP (30 slots), SEALS (10 slots), Infanterie (20 slots), Airforce (10 slots)
- **Requirement Updates**: Visa level minimum 10, 14-day crime-free requirement, maintained 18+ age requirement
- **Training Program Localization**: Converted to German, updated duration from weeks to 5-7 days for basic training
- **Sonderposten System**: Replaced achievements with special positions including Ausbilder, Drill Sergeant, Abteilungsleitung roles

### Functionality Improvements  
- **Easter Egg Mini-Game**: Added army-themed target practice game in footer with high score tracking
- **Discord Integration Notices**: Added information about Discord connectivity for applications and contact forms
- **Eye-Catcher Elements**: Animated radar sweep in hero section and floating status indicator
- **Interactive Animations**: Scroll-triggered animations and hover effects throughout
- **Real-Time Elements**: Live clock displays and dynamic online counters
- **Enhanced User Experience**: Smooth transitions, better visual hierarchy, and improved readability

### Technical Enhancements
- **CSS Animation System**: Comprehensive keyframe animations for military effects
- **Component Optimization**: Better state management and intersection observers for performance
- **TypeScript Integration**: Full type safety across all new components
- **Responsive Design**: Maintained mobile-first approach with enhanced desktop experience
- **React-Only Conversion**: Converted from full-stack to React-only app for Netlify deployment with mock API services
- **Netlify Ready**: Added configuration files and deployment instructions for seamless hosting