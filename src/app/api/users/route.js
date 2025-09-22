import { NextResponse } from 'next/server'
import { createUser, getUsersByRole } from '@/lib/db/queries/users'

export async function POST(request) {
  try {
    const userData = await request.json()
    const result = await createUser(userData)
    
    if (result.success) {
      return NextResponse.json(result.data, { status: 201 })
    } else {
      return NextResponse.json(result.error, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request data' }, 
      { status: 400 }
    )
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const role = searchParams.get('role')
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    
    if (role) {
      const result = await getUsersByRole(role, page, limit)
      
      if (result.success) {
        return NextResponse.json({
          users: result.data,
          pagination: result.pagination
        })
      } else {
        return NextResponse.json(result.error, { status: 400 })
      }
    }
    
    return NextResponse.json(
      { error: 'Role parameter is required' }, 
      { status: 400 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request parameters' }, 
      { status: 400 }
    )
  }
}
