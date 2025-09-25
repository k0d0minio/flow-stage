import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { validateConfig } from "@/lib/config";

// Validate configuration on app startup
try {
  validateConfig();
} catch (error) {
  console.error('Configuration validation failed:', error.message);
  // In production, you might want to throw this error to prevent app startup
  if (process.env.NODE_ENV === 'production') {
    throw error;
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flow Stage - Music Booking Platform",
  description: "Revolutionary B2B SaaS platform automating the entire music touring value chain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
