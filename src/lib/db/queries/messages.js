import { prisma } from '@/lib/prisma/client.js'
import { handleDatabaseError, paginate } from '@/lib/db/utils.js'

// Message queries
export const createMessage = async (messageData) => {
  try {
    const message = await prisma.message.create({
      data: messageData,
      include: {
        sender: true,
        receiver: true,
        booking: {
          include: {
            artist: { include: { user: true } },
            venue: { include: { user: true } },
          }
        },
      },
    })
    return { success: true, data: message }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getMessagesByBooking = async (bookingId, page = 1, limit = 50) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    const messages = await prisma.message.findMany({
      where: { bookingId },
      skip,
      take,
      include: {
        sender: true,
        receiver: true,
      },
      orderBy: { createdAt: 'asc' },
    })
    
    const total = await prisma.message.count({ where: { bookingId } })
    
    return { 
      success: true, 
      data: messages, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getUnreadMessages = async (userId, page = 1, limit = 20) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    const messages = await prisma.message.findMany({
      where: {
        receiverId: userId,
        read: false,
      },
      skip,
      take,
      include: {
        sender: true,
        booking: {
          include: {
            artist: { include: { user: true } },
            venue: { include: { user: true } },
          }
        },
      },
      orderBy: { createdAt: 'desc' },
    })
    
    const total = await prisma.message.count({
      where: {
        receiverId: userId,
        read: false,
      },
    })
    
    return { 
      success: true, 
      data: messages, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const markMessageAsRead = async (messageId) => {
  try {
    const message = await prisma.message.update({
      where: { id: messageId },
      data: { read: true },
    })
    return { success: true, data: message }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const markAllMessagesAsRead = async (userId, bookingId) => {
  try {
    const result = await prisma.message.updateMany({
      where: {
        receiverId: userId,
        bookingId,
        read: false,
      },
      data: { read: true },
    })
    return { success: true, data: { count: result.count } }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getConversation = async (userId1, userId2, bookingId, page = 1, limit = 50) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    const messages = await prisma.message.findMany({
      where: {
        bookingId,
        OR: [
          { senderId: userId1, receiverId: userId2 },
          { senderId: userId2, receiverId: userId1 },
        ],
      },
      skip,
      take,
      include: {
        sender: true,
        receiver: true,
      },
      orderBy: { createdAt: 'asc' },
    })
    
    const total = await prisma.message.count({
      where: {
        bookingId,
        OR: [
          { senderId: userId1, receiverId: userId2 },
          { senderId: userId2, receiverId: userId1 },
        ],
      },
    })
    
    return { 
      success: true, 
      data: messages, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}