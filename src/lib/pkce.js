// PKCE utility functions for Supabase authentication

/**
 * Generate a cryptographically secure random string
 */
function generateRandomString(length = 43) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
  let result = ''
  const randomValues = new Uint8Array(length)
  crypto.getRandomValues(randomValues)
  
  for (let i = 0; i < length; i++) {
    result += charset[randomValues[i] % charset.length]
  }
  
  return result
}

/**
 * Generate PKCE code verifier
 */
export function generateCodeVerifier() {
  return generateRandomString(128)
}

/**
 * Generate PKCE code challenge from verifier
 */
export async function generateCodeChallenge(verifier) {
  const encoder = new TextEncoder()
  const data = encoder.encode(verifier)
  const digest = await crypto.subtle.digest('SHA-256', data)
  
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

/**
 * Store code verifier in secure cookie and localStorage as fallback
 */
export function storeCodeVerifier(verifier) {
  try {
    // Store in localStorage as primary method (more reliable)
    localStorage.setItem('sb-code-verifier', verifier)
    
    // Also store in cookie as backup (with relaxed samesite for redirects)
    document.cookie = `sb-code-verifier=${verifier}; path=/; samesite=lax; max-age=600` // 10 minutes
  } catch (error) {
    console.warn('Failed to store code verifier:', error)
  }
}

/**
 * Generate and store PKCE parameters
 */
export async function generatePKCEParams() {
  const codeVerifier = generateCodeVerifier()
  const codeChallenge = await generateCodeChallenge(codeVerifier)
  
  storeCodeVerifier(codeVerifier)
  
  return {
    codeVerifier,
    codeChallenge
  }
}
