'use client'

import { useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

function CallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const type = searchParams.get('type') || 'signup'
        const code = searchParams.get('code')
        
        console.log('🔍 Callback page handling:', { 
          type, 
          hasCode: !!code,
          url: window.location.href
        })

        // Check if this is an implicit flow with access_token in URL hash
        if (window.location.hash.includes('access_token=')) {
          console.log('🔍 Implicit flow detected')
          
          // Get the URL hash parameters
          const hashParams = new URLSearchParams(window.location.hash.substring(1))
          const accessToken = hashParams.get('access_token')
          const refreshToken = hashParams.get('refresh_token')

          console.log('🔍 Hash params:', { 
            hasAccessToken: !!accessToken, 
            hasRefreshToken: !!refreshToken
          })

          if (accessToken && refreshToken) {
            // Set the session using the tokens from the URL
            const { data, error } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken
            })

            if (error) {
              console.error('❌ Error setting session:', error)
              router.push('/auth/auth-code-error')
              return
            }

            console.log('✅ Session set successfully:', data.user?.id)

            // Redirect based on type
            if (type === 'signup') {
              router.push('/auth/account-confirmed')
            } else if (type === 'recovery') {
              router.push('/auth/profile-setup')
            } else {
              router.push('/dashboard')
            }
          } else {
            console.log('❌ No tokens found in URL hash')
            router.push('/auth/auth-code-error')
          }
        } 
        // Handle PKCE flow with authorization code
        else if (code) {
          console.log('🔍 PKCE flow detected')
          
          // Get the stored code verifier from localStorage or cookies
          const getCookie = (name) => {
            const value = `; ${document.cookie}`
            const parts = value.split(`; ${name}=`)
            if (parts.length === 2) return parts.pop().split(';').shift()
            return null
          }
          
          // Try localStorage first (more reliable)
          let codeVerifier = localStorage.getItem('sb-code-verifier')
          
          // Fallback to cookies if localStorage doesn't have it
          if (!codeVerifier) {
            codeVerifier = getCookie('sb-code-verifier')
          }
          
          if (!codeVerifier) {
            console.error('❌ No code verifier found in localStorage or cookies')
            router.push('/auth/auth-code-error')
            return
          }
          
          console.log('🔍 Found code verifier:', !!codeVerifier)
          console.log('🔍 Code value:', code)
          console.log('🔍 Code verifier value:', codeVerifier)
          console.log('🔍 Code length:', code?.length)
          console.log('🔍 Code verifier length:', codeVerifier?.length)
          
          // Validate both code and code verifier are non-empty
          if (!code || !codeVerifier) {
            console.error('❌ Missing required parameters:', { 
              hasCode: !!code, 
              hasCodeVerifier: !!codeVerifier 
            })
            router.push('/auth/auth-code-error')
            return
          }
          
          const { data, error } = await supabase.auth.exchangeCodeForSession(code, codeVerifier)
          
          if (error) {
            console.error('❌ Error exchanging code:', error)
            router.push('/auth/auth-code-error')
            return
          }

          console.log('✅ Code exchanged successfully:', data.user?.id)
          
          // Clear the code verifier from both localStorage and cookies
          localStorage.removeItem('sb-code-verifier')
          document.cookie = 'sb-code-verifier=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'

          // Redirect based on type
          if (type === 'signup') {
            router.push('/auth/account-confirmed')
          } else if (type === 'recovery') {
            router.push('/auth/profile-setup')
          } else {
            router.push('/dashboard')
          }
        } else {
          console.log('❌ No authentication data found')
          router.push('/auth/auth-code-error')
        }
      } catch (error) {
        console.error('❌ Callback error:', error)
        router.push('/auth/auth-code-error')
      }
    }

    handleAuthCallback()
  }, [router, searchParams])

  return (
    <div className="min-h-screen gradient-secondary flex items-center justify-center">
      <div className="text-center">
        <div className="spinner w-8 h-8 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing authentication...</p>
      </div>
    </div>
  )
}

export default function CallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen gradient-secondary flex items-center justify-center">
        <div className="text-center">
          <div className="spinner w-8 h-8 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <CallbackContent />
    </Suspense>
  )
}
