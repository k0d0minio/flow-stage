import { NextResponse } from 'next/server'
import { createVenue, searchVenues, getNearbyVenues } from '@/lib/db/queries/venues'

export async function POST(request) {
  try {
    const venueData = await request.json()
    const result = await createVenue(venueData)
    
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
    const latitude = searchParams.get('lat')
    const longitude = searchParams.get('lng')
    const radius = searchParams.get('radius')
    
    // Check if this is a nearby search
    if (latitude && longitude) {
      const lat = parseFloat(latitude)
      const lng = parseFloat(longitude)
      const radiusKm = radius ? parseFloat(radius) : 50
      const page = parseInt(searchParams.get('page')) || 1
      const limit = parseInt(searchParams.get('limit')) || 10
      
      const result = await getNearbyVenues(lat, lng, radiusKm, page, limit)
      
      if (result.success) {
        return NextResponse.json({
          venues: result.data,
          pagination: result.pagination
        })
      } else {
        return NextResponse.json(result.error, { status: 400 })
      }
    }
    
    // Regular search with filters
    const filters = {
      venueType: searchParams.get('venueType'),
      city: searchParams.get('city'),
      country: searchParams.get('country'),
      minCapacity: searchParams.get('minCapacity') ? parseInt(searchParams.get('minCapacity')) : undefined,
      maxCapacity: searchParams.get('maxCapacity') ? parseInt(searchParams.get('maxCapacity')) : undefined,
      amenities: searchParams.get('amenities')?.split(','),
    }
    
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    
    const result = await searchVenues(filters, page, limit)
    
    if (result.success) {
      return NextResponse.json({
        venues: result.data,
        pagination: result.pagination
      })
    } else {
      return NextResponse.json(result.error, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request parameters' }, 
      { status: 400 }
    )
  }
}
