import { NextResponse } from 'next/server'
import { healthCheck } from '@/lib/db/utils'

export async function GET() {
  try {
    const health = await healthCheck()
    
    if (health.status === 'healthy') {
      return NextResponse.json(health, { status: 200 })
    } else {
      return NextResponse.json(health, { status: 503 })
    }
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'unhealthy', 
        error: error.message, 
        timestamp: new Date().toISOString() 
      }, 
      { status: 503 }
    )
  }
}
