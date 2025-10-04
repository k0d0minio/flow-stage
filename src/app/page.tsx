'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import { ProfileSection } from '@/components/ProfileSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {process.env.NEXT_PUBLIC_APP_NAME || 'Flow Stage'}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
              'The ultimate platform for music booking and artist management. Connect artists with venues, manage bookings, and grow your music career.'}
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Authentication Status */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Authentication Status
            </h2>
            <SignedOut>
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  You are currently signed out
                </p>
                <p className="text-sm text-gray-500">
                  Use the Sign In or Sign Up buttons in the header to get
                  started
                </p>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-green-600 dark:text-green-400 mb-4 font-medium">
                  ✅ Successfully authenticated!
                </p>
                <p className="text-sm text-gray-500">
                  You can now access all platform features
                </p>
              </div>
            </SignedIn>
          </div>

          {/* Profile Section */}
          <SignedIn>
            <ProfileSection />
          </SignedIn>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Platform Features
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Clerk Authentication
                  </span>
                  <p className="text-sm text-gray-500">
                    Secure user management
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Supabase Database
                  </span>
                  <p className="text-sm text-gray-500">
                    Real-time data storage
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Next.js 15
                  </span>
                  <p className="text-sm text-gray-500">
                    Modern React framework
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Responsive Design
                  </span>
                  <p className="text-sm text-gray-500">Mobile-first approach</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🔧</span>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Linear Integration
                  </span>
                  <p className="text-sm text-gray-500">Auto error reporting</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <SignedOut>
          <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of artists and venues already using Flow Stage
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Sign Up Now
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </SignedOut>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Built with Next.js 15, Clerk, Supabase, and Tailwind CSS
          </p>
        </div>
      </main>
    </div>
  );
}
