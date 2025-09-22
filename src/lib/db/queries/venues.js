import { prisma } from '@/lib/prisma/client.js'
import { handleDatabaseError, paginate } from '@/lib/db/utils.js'

// Venue queries
export const createVenue = async (venueData) => {
  try {
    const venue = await prisma.venue.create({
      data: venueData,
      include: {
        user: true,
        bookings: {
          include: {
            artist: {
              include: { user: true }
            }
          }
        }
      },
    })
    return { success: true, data: venue }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getVenueById = async (id) => {
  try {
    const venue = await prisma.venue.findUnique({
      where: { id },
      include: {
        user: true,
        bookings: {
          include: {
            artist: {
              include: { user: true }
            }
          }
        }
      },
    })
    return { success: true, data: venue }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getVenueByUserId = async (userId) => {
  try {
    const venue = await prisma.venue.findUnique({
      where: { userId },
      include: {
        user: true,
        bookings: {
          include: {
            artist: {
              include: { user: true }
            }
          }
        }
      },
    })
    return { success: true, data: venue }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const updateVenue = async (id, updateData) => {
  try {
    const venue = await prisma.venue.update({
      where: { id },
      data: updateData,
      include: {
        user: true,
        bookings: {
          include: {
            artist: {
              include: { user: true }
            }
          }
        }
      },
    })
    return { success: true, data: venue }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const searchVenues = async (filters = {}, page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    const where = {
      available: true,
      ...(filters.venueType && { venueType: filters.venueType }),
      ...(filters.city && { city: { contains: filters.city, mode: 'insensitive' } }),
      ...(filters.country && { country: { contains: filters.country, mode: 'insensitive' } }),
      ...(filters.minCapacity && { capacity: { gte: filters.minCapacity } }),
      ...(filters.maxCapacity && { capacity: { lte: filters.maxCapacity } }),
      ...(filters.amenities && { amenities: { hasSome: filters.amenities } }),
    }

    const venues = await prisma.venue.findMany({
      where,
      skip,
      take,
      include: {
        user: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    
    const total = await prisma.venue.count({ where })
    
    return { 
      success: true, 
      data: venues, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getNearbyVenues = async (latitude, longitude, radiusKm = 50, page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    // Using bounding box approximation for geospatial queries
    const latRange = radiusKm / 111
    const lngRange = radiusKm / (111 * Math.cos(latitude * Math.PI / 180))
    
    const venues = await prisma.venue.findMany({
      where: {
        available: true,
        latitude: {
          gte: latitude - latRange,
          lte: latitude + latRange,
        },
        longitude: {
          gte: longitude - lngRange,
          lte: longitude + lngRange,
        },
      },
      skip,
      take,
      include: {
        user: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    
    const total = await prisma.venue.count({
      where: {
        available: true,
        latitude: {
          gte: latitude - latRange,
          lte: latitude + latRange,
        },
        longitude: {
          gte: longitude - lngRange,
          lte: longitude + lngRange,
        },
      },
    })
    
    return { 
      success: true, 
      data: venues, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}
