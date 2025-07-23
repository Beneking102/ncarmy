# NC-Army Website - React App

This is the React-only version of the NC-Army website, ready for deployment on Netlify.

## Features

- Complete military-themed responsive website
- Working recruitment and contact forms (using localStorage for data persistence)
- Army-themed Easter egg mini-game
- Discord integration notices
- Modern military styling with animations

## Deployment to Netlify

### Fixed Configuration

The project is now configured for Netlify deployment with:
- Updated `package.json` with all required dependencies
- Simplified build script (removed TypeScript check)
- Proper TypeScript configuration
- Tailwind CSS setup

### Option 1: Git Deployment (Recommended)

1. Push your code to a Git repository
2. Connect the repository to Netlify
3. The `netlify.toml` file is already configured with:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/dist`

### Option 2: Drag & Drop Deployment

```bash
cd client
npm install
npm run build
```
Then upload the generated `dist` folder to Netlify

### Option 3: Netlify CLI

```bash
cd client
npm install
npm run build
npx netlify deploy --prod --dir=dist
```

### Build Issues Fixed
- Added missing `@types/node` dependency
- Removed TypeScript compilation from build step
- Simplified configuration files
- Fixed dependency conflicts

## Local Development

```bash
cd client
npm install
npm run dev
```

## Data Storage

The application uses localStorage to simulate backend functionality:
- Application submissions are stored in `nc-army-applications`
- Contact form submissions are stored in `nc-army-contacts`

## Structure Updates

- **Ranks**: Generäle (5), Abteilungsleitung (8), Drill Sergeants (10), Soldaten (unlimited), Rekruten (15)
- **Departments**: MP (30), Seals (10), Infanterie (20), Airforce (10)
- **Requirements**: Visa level minimum 10, 14-day crime-free period, age 18+
- **Training**: German localization, 5-7 day duration
- **Special Positions**: Sonderposten system with 7 roles

## Features

- Fully responsive design
- Working forms with validation
- Easter egg target practice game in footer
- Discord integration notices
- Real-time animations and military styling