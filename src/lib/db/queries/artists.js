import { prisma } from '@/lib/prisma/client.js'
import { handleDatabaseError, paginate } from '@/lib/db/utils.js'

// Artist queries
export const createArtist = async (artistData) => {
  try {
    const artist = await prisma.artist.create({
      data: artistData,
      include: {
        user: true,
        bookings: {
          include: {
            venue: {
              include: { user: true }
            }
          }
        }
      },
    })
    return { success: true, data: artist }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getArtistById = async (id) => {
  try {
    const artist = await prisma.artist.findUnique({
      where: { id },
      include: {
        user: true,
        bookings: {
          include: {
            venue: {
              include: { user: true }
            }
          }
        }
      },
    })
    return { success: true, data: artist }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getArtistByUserId = async (userId) => {
  try {
    const artist = await prisma.artist.findUnique({
      where: { userId },
      include: {
        user: true,
        bookings: {
          include: {
            venue: {
              include: { user: true }
            }
          }
        }
      },
    })
    return { success: true, data: artist }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const updateArtist = async (id, updateData) => {
  try {
    const artist = await prisma.artist.update({
      where: { id },
      data: updateData,
      include: {
        user: true,
        bookings: {
          include: {
            venue: {
              include: { user: true }
            }
          }
        }
      },
    })
    return { success: true, data: artist }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const searchArtists = async (filters = {}, page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    const where = {
      available: true,
      ...(filters.genres && { genres: { hasSome: filters.genres } }),
      ...(filters.instruments && { instruments: { hasSome: filters.instruments } }),
      ...(filters.city && { city: { contains: filters.city, mode: 'insensitive' } }),
      ...(filters.country && { country: { contains: filters.country, mode: 'insensitive' } }),
      ...(filters.minFee && { minFee: { gte: filters.minFee } }),
      ...(filters.maxFee && { maxFee: { lte: filters.maxFee } }),
    }

    const artists = await prisma.artist.findMany({
      where,
      skip,
      take,
      include: {
        user: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    
    const total = await prisma.artist.count({ where })
    
    return { 
      success: true, 
      data: artists, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getNearbyArtists = async (latitude, longitude, radiusKm = 50, page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    // Using raw SQL for geospatial queries (PostgreSQL with PostGIS would be better)
    // For now, we'll use a simple bounding box approximation
    const latRange = radiusKm / 111 // Rough conversion: 1 degree ≈ 111 km
    const lngRange = radiusKm / (111 * Math.cos(latitude * Math.PI / 180))
    
    const artists = await prisma.artist.findMany({
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
    
    const total = await prisma.artist.count({
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
      data: artists, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}
