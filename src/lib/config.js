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
  }
}

// Validation function
export function validateConfig() {
  const required = ['supabase.url', 'supabase.anonKey']
  const missing = required.filter(key => {
    const value = key.split('.').reduce((obj, k) => obj?.[k], config)
    return !value
  })
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
}
