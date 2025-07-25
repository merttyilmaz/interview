# Product Showcase - Next.js E-commerce App

A modern, responsive e-commerce application built with Next.js 15, featuring server-side rendering, protected routes, and a global cart state management system.

## 🚀 Live Demo

[View Live Demo](https://your-vercel-deployment-url.vercel.app) *(will be updated after deployment)*

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4.0 with custom utilities
- **State Management**: Zustand
- **UI Components**: Shadcn/ui with Lucide React icons
- **Language**: TypeScript
- **Data Source**: FakeStore API for SSR product data

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Authentication Flow

The app uses a simple cookie-based authentication system:

1. Visit `/checkout` without authentication → Redirected to `/login`
2. Login with any credentials (demo form) → Sets `auth=true` cookie
3. Access `/checkout` with valid cookie → Allowed access
4. Logout → Clears cookie and redirects to home

## 🛒 Cart Functionality

The shopping cart is powered by Zustand and includes:

- **Add items** from product pages or card quick-add buttons
- **Update quantities** with +/- controls
- **Remove items** individually
- **View total** items and price
- **Persistent state** during session
- **Clear cart** after checkout

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with default settings (no environment variables needed)

### Manual Build

```bash
npm run build
npm run start
```

## 🧪 Testing Browser Compatibility

The application has been tested and works on:
- ✅ Chrome (latest)
- ✅ Safari (latest)
- ✅ Firefox (latest)
- ✅ Edge (latest)

## 🔧 Global State Management Choice

**Selected: Zustand**

### Why Zustand?

1. **Simplicity**: Minimal boilerplate compared to Redux
6. **Learning Curve**: Much easier for team members to understand
4. **Size**: Lightweight (~2KB) vs Redux (~15KB with toolkit)
2. **TypeScript Support**: Excellent TypeScript integration out of the box
3. **Performance**: No providers needed, direct state access
5. **Devtools**: Built-in Redux DevTools support

## 📝 Development Notes

-I would prefer to use pnpm as a package manager but for this task I used npm per requirements.
-I used loading.tsx for requirements but I highly prefer using suspense and skeleton instead of loading.tsx because loading.tsx is the only thing rendered while api is being fetched but is suspense is used, the static html can we shown to the user immediately and suspense's fallback can show the skeleton.
