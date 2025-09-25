'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function ProfileSetupPage() {
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
    location: '',
    subcategory: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { user, profile, updateProfile } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/auth/signin')
      return
    }

    // Pre-fill form with existing profile data
    if (profile) {
      setFormData({
        displayName: profile.display_name || '',
        bio: profile.bio || '',
        location: profile.location?.city || '',
        subcategory: profile.subcategory || ''
      })
    }
  }, [user, profile, router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const updates = {
        display_name: formData.displayName,
        bio: formData.bio,
        location: formData.location ? { city: formData.location } : null,
        subcategory: formData.subcategory,
        completion_percentage: 50 // Basic profile setup complete
      }

      const { data, error } = await updateProfile(updates)

      if (error) {
        setError(error.message)
      } else {
        // Redirect to dashboard after successful profile setup
        router.push('/dashboard')
      }
    } catch (err) {
      setError('An error occurred while updating your profile')
    }

    setLoading(false)
  }

  const handleSkip = () => {
    router.push('/dashboard')
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen gradient-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="card-elevated p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👤</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Complete Your Profile
            </h1>
            <p className="text-gray-600">
              Help others discover you on Flow Stage
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="displayName" className="form-label">
                Display Name *
              </label>
              <input
                id="displayName"
                name="displayName"
                type="text"
                required
                value={formData.displayName}
                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                placeholder="Your stage name or business name"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="subcategory" className="form-label">
                Category
              </label>
              <select
                id="subcategory"
                name="subcategory"
                value={formData.subcategory}
                onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                className="form-input"
              >
                <option value="">Select a category</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="electronic">Electronic</option>
                <option value="jazz">Jazz</option>
                <option value="classical">Classical</option>
                <option value="hip-hop">Hip-Hop</option>
                <option value="country">Country</option>
                <option value="folk">Folk</option>
                <option value="venue">Venue</option>
                <option value="booking-agency">Booking Agency</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="City, Country"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                placeholder="Tell us about yourself..."
                className="form-input resize-none"
              />
            </div>

            {error && (
              <div className="form-error">
                {error}
              </div>
            )}

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex-1"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="spinner w-5 h-5 mr-2"></div>
                    Saving...
                  </div>
                ) : (
                  'Complete Profile'
                )}
              </button>
              <button
                type="button"
                onClick={handleSkip}
                className="btn-secondary flex-1"
              >
                Skip for Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
