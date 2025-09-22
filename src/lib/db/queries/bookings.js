import { prisma } from '@/lib/prisma/client.js'
import { handleDatabaseError, paginate } from '@/lib/db/utils.js'

// Booking queries
export const createBooking = async (bookingData) => {
  try {
    const booking = await prisma.booking.create({
      data: bookingData,
      include: {
        artist: {
          include: { user: true }
        },
        venue: {
          include: { user: true }
        },
        messages: true,
        contracts: true,
      },
    })
    return { success: true, data: booking }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getBookingById = async (id) => {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        artist: {
          include: { user: true }
        },
        venue: {
          include: { user: true }
        },
        messages: {
          include: {
            sender: true,
            receiver: true,
          },
          orderBy: { createdAt: 'asc' },
        },
        contracts: true,
      },
    })
    return { success: true, data: booking }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const updateBooking = async (id, updateData) => {
  try {
    const booking = await prisma.booking.update({
      where: { id },
      data: updateData,
      include: {
        artist: {
          include: { user: true }
        },
        venue: {
          include: { user: true }
        },
        messages: true,
        contracts: true,
      },
    })
    return { success: true, data: booking }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getBookingsByArtist = async (artistId, page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    const bookings = await prisma.booking.findMany({
      where: { artistId },
      skip,
      take,
      include: {
        artist: {
          include: { user: true }
        },
        venue: {
          include: { user: true }
        },
        messages: true,
        contracts: true,
      },
      orderBy: { eventDate: 'desc' },
    })
    
    const total = await prisma.booking.count({ where: { artistId } })
    
    return { 
      success: true, 
      data: bookings, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getBookingsByVenue = async (venueId, page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    const bookings = await prisma.booking.findMany({
      where: { venueId },
      skip,
      take,
      include: {
        artist: {
          include: { user: true }
        },
        venue: {
          include: { user: true }
        },
        messages: true,
        contracts: true,
      },
      orderBy: { eventDate: 'desc' },
    })
    
    const total = await prisma.booking.count({ where: { venueId } })
    
    return { 
      success: true, 
      data: bookings, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getBookingsByStatus = async (status, page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    const bookings = await prisma.booking.findMany({
      where: { status },
      skip,
      take,
      include: {
        artist: {
          include: { user: true }
        },
        venue: {
          include: { user: true }
        },
        messages: true,
        contracts: true,
      },
      orderBy: { eventDate: 'desc' },
    })
    
    const total = await prisma.booking.count({ where: { status } })
    
    return { 
      success: true, 
      data: bookings, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getUpcomingBookings = async (page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    const now = new Date()
    
    const bookings = await prisma.booking.findMany({
      where: {
        eventDate: { gte: now },
        status: { in: ['PENDING', 'CONFIRMED'] },
      },
      skip,
      take,
      include: {
        artist: {
          include: { user: true }
        },
        venue: {
          include: { user: true }
        },
        messages: true,
        contracts: true,
      },
      orderBy: { eventDate: 'asc' },
    })
    
    const total = await prisma.booking.count({
      where: {
        eventDate: { gte: now },
        status: { in: ['PENDING', 'CONFIRMED'] },
      },
    })
    
    return { 
      success: true, 
      data: bookings, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}
