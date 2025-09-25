'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen gradient-secondary flex items-center justify-center">
        <div className="text-center">
          <div className="spinner h-16 w-16 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-soft border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🎵</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900">Flow Stage</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700 font-medium">
                Welcome, {user.email}
              </span>
              <button
                onClick={signOut}
                className="bg-error-600 hover:bg-error-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-soft hover:shadow-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="card-elevated p-12 text-center animate-fade-in">
            <div className="w-24 h-24 bg-gradient-to-br from-success-500 to-success-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">🎉</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Flow Stage!
            </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Your authentication is working perfectly. You&apos;re ready to start your musical journey!
              </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  Profile Status
                </h3>
                <div className="text-sm text-primary-700 space-y-1">
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Status:</strong> Verified</p>
                  <p><strong>Member since:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                  Next Steps
                </h3>
                <div className="text-sm text-secondary-700 space-y-1">
                  <p>✓ Account created</p>
                  <p>✓ Authentication verified</p>
                  <p>→ Complete your profile</p>
                </div>
              </div>
              
              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-accent-800 mb-2">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <button className="btn-outline w-full text-sm py-2">
                    Complete Profile
                  </button>
                  <button className="btn-outline w-full text-sm py-2">
                    Explore Features
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Started
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
