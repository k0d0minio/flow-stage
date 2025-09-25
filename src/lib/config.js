// Environment configuration
export const config = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY
  },
  nextauth: {
    secret: process.env.NEXTAUTH_SECRET,
    url: process.env.NEXTAUTH_URL || 'http://localhost:3000'
  },
  app: {
    name: 'Flow Stage',
    description: 'Music Booking Platform',
    version: '0.1.0'
  },
  urls: {
    base: 'http://localhost:3000',
    callback: 'http://localhost:3000/auth/callback',
    signupCallback: 'http://localhost:3000/auth/callback?type=signup',
    recoveryCallback: 'http://localhost:3000/auth/callback?type=recovery',
    dashboard: 'http://localhost:3000/dashboard',
    profileSetup: 'http://localhost:3000/auth/profile-setup',
    accountConfirmed: 'http://localhost:3000/auth/account-confirmed',
    authError: 'http://localhost:3000/auth/auth-code-error'
  }
}

// Validation function
export function validateConfig() {
  const required = ['supabase.url', 'supabase.anonKey', 'nextauth.secret', 'urls.base']
  const missing = required.filter(key => {
    const value = key.split('.').reduce((obj, k) => obj?.[k], config)
    return !value
  })
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
  
  // Validate URL format
  try {
    new URL(config.urls.base)
    new URL(config.urls.callback)
  } catch (error) {
    throw new Error(`Invalid URL configuration: ${error.message}`)
  }
  
  return true
}
