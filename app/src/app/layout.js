import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flow Stage - 360° Musical Touring Platform",
  description: "B2B SaaS platform that automates the entire musical touring value chain, from artist-venue matching to complete tour management.",
  keywords: "musical touring, booking, artists, venues, concerts, B2B platform, automation",
  authors: [{ name: "Flow Stage" }],
  creator: "Flow Stage",
  publisher: "Flow Stage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: "Flow Stage - 360° Musical Touring Platform",
    description: "Revolutionize musical touring with our complete automation platform",
    url: "/",
    siteName: "Flow Stage",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Stage - 360° Musical Touring Platform",
    description: "Revolutionize musical touring with our complete automation platform",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
