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
        // Handle email confirmation flow with authorization code
        else if (code) {
          console.log('🔍 Email confirmation flow detected')
          console.log('🔍 Code value:', code)
          console.log('🔍 Code length:', code?.length)
          
          // For email confirmation, use verifyOtp instead of exchangeCodeForSession
          const { data, error } = await supabase.auth.verifyOtp({
            token_hash: code,
            type: 'email'
          })
          
          if (error) {
            console.error('❌ Error verifying OTP:', error)
            router.push('/auth/auth-code-error')
            return
          }

          console.log('✅ Email verified successfully:', data.user?.id)

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
