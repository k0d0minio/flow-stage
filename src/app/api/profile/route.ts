import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { ensureProfile, getProfile } from '@/lib/supabase/profile'

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const profile = await getProfile(userId)
    
    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error fetching profile:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user data from Clerk
    const clerkUser = await currentUser()
    
    if (!clerkUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const profile = await ensureProfile({
      id: clerkUser.id,
      emailAddresses: clerkUser.emailAddresses,
      firstName: clerkUser.firstName,
      lastName: clerkUser.lastName,
      imageUrl: clerkUser.imageUrl,
    })

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error creating/updating profile:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
