import { NextResponse } from 'next/server'
import { createArtist, searchArtists, getNearbyArtists } from '@/lib/db/queries/artists'

export async function POST(request) {
  try {
    const artistData = await request.json()
    const result = await createArtist(artistData)
    
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
      
      const result = await getNearbyArtists(lat, lng, radiusKm, page, limit)
      
      if (result.success) {
        return NextResponse.json({
          artists: result.data,
          pagination: result.pagination
        })
      } else {
        return NextResponse.json(result.error, { status: 400 })
      }
    }
    
    // Regular search with filters
    const filters = {
      genres: searchParams.get('genres')?.split(','),
      instruments: searchParams.get('instruments')?.split(','),
      city: searchParams.get('city'),
      country: searchParams.get('country'),
      minFee: searchParams.get('minFee') ? parseFloat(searchParams.get('minFee')) : undefined,
      maxFee: searchParams.get('maxFee') ? parseFloat(searchParams.get('maxFee')) : undefined,
    }
    
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    
    const result = await searchArtists(filters, page, limit)
    
    if (result.success) {
      return NextResponse.json({
        artists: result.data,
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
