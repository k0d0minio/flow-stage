# Flow Stage - Musical Touring Platform

A Next.js 15 application with React 19, Tailwind CSS v4, and shadcn/ui components for the Flow Stage musical touring platform.

## 🚀 Tech Stack

- **Framework:** Next.js 15.5.3
- **React:** 19.1.0
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Language:** JavaScript (no TypeScript)
- **Package Manager:** npm
- **Node Version:** 18+ (compatible with Next.js 15)

## 📁 Project Structure

```
app/
├── src/
│   ├── app/                    # Next.js 15 app router
│   │   ├── globals.css        # Global styles with Tailwind v4
│   │   ├── layout.js          # Root layout with metadata
│   │   ├── page.js            # Home page
│   │   └── (routes)/          # Route groups
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   └── custom/           # Custom Flow Stage components
│   ├── lib/                  # Utility functions
│   │   ├── utils.js          # shadcn/ui utility functions
│   │   └── constants.js      # Application constants
│   ├── hooks/                # Custom React hooks
│   └── types/                # Type definitions (if needed)
├── public/                   # Static assets
├── .env.local               # Environment variables
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── components.json         # shadcn/ui configuration
└── next.config.mjs         # Next.js configuration
```

## 🎨 Design System

### Color Palette
The application uses a modern purple-based color scheme:

- **Primary:** Purple (#8b5cf6 / #a78bfa in dark mode)
- **Secondary:** Slate gray (#f1f5f9 / #1e293b in dark mode)
- **Background:** White (#ffffff / #0a0a0a in dark mode)
- **Foreground:** Dark slate (#0f172a / #f8fafc in dark mode)

### Components
- **Button:** Multiple variants (default, outline, secondary, ghost, link)
- **Card:** Complete card system with header, content, footer
- **Input:** Styled form inputs with focus states
- **Icons:** Lucide React icons throughout the application

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm (package manager)

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd /home/jamie-nisbet/Apps/flow-stage/app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Tailwind CSS v4
- **No PostCSS configuration required**
- **Theme configuration** in `src/app/globals.css`
- **Custom color palette** with CSS variables
- **Dark mode support** via `prefers-color-scheme`

### shadcn/ui
- **Configuration** in `components.json`
- **Utility functions** in `src/lib/utils.js`
- **Component variants** using `class-variance-authority`

### ESLint & Prettier
- **ESLint** configured for Next.js and React
- **Prettier** for consistent code formatting
- **VS Code settings** for automatic formatting

## 🌐 Environment Variables

```env
# Anthropic API Configuration
ANTHROPIC_API_KEY=your_api_key_here

# Next.js Configuration
NEXT_PUBLIC_APP_NAME=Flow Stage
NEXT_PUBLIC_APP_DESCRIPTION=Musical Touring Platform
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📱 Features

### Current Implementation
- ✅ Next.js 15 with App Router
- ✅ React 19 with modern features
- ✅ Tailwind CSS v4 with custom theme
- ✅ shadcn/ui component library
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Modern color palette
- ✅ ESLint & Prettier configuration
- ✅ VS Code workspace settings

### Planned Features
- 🔄 User authentication system
- 🔄 Artist and venue profiles
- 🔄 Smart matching algorithm
- 🔄 Contract generation
- 🔄 Payment processing
- 🔄 Geographic optimization
- 🔄 Technical staff matching

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Setup
Ensure all environment variables are properly configured for production.

## 📚 Documentation

- **Next.js 15:** [Official Documentation](https://nextjs.org/docs)
- **Tailwind CSS v4:** [Official Documentation](https://tailwindcss.com/docs)
- **shadcn/ui:** [Component Documentation](https://ui.shadcn.com)
- **React 19:** [Official Documentation](https://react.dev)

## 🤝 Contributing

1. Follow the established code style (ESLint + Prettier)
2. Use conventional commit messages
3. Test your changes thoroughly
4. Update documentation as needed

## 📄 License

This project is part of the Flow Stage musical touring platform.

---

**Flow Stage** - Révolutionnez le Touring Musical 🎵