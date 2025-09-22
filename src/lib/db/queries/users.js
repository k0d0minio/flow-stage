import { prisma } from '@/lib/prisma/client.js'
import { handleDatabaseError, paginate } from '@/lib/db/utils.js'

// User queries
export const createUser = async (userData) => {
  try {
    const user = await prisma.user.create({
      data: userData,
      include: {
        artistProfile: true,
        venueProfile: true,
      },
    })
    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        artistProfile: true,
        venueProfile: true,
      },
    })
    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getUserByAuth0Id = async (auth0Id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { auth0Id },
      include: {
        artistProfile: true,
        venueProfile: true,
      },
    })
    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const updateUser = async (id, updateData) => {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        artistProfile: true,
        venueProfile: true,
      },
    })
    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const deleteUser = async (id) => {
  try {
    await prisma.user.delete({
      where: { id },
    })
    return { success: true }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getUsersByRole = async (role, page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    const users = await prisma.user.findMany({
      where: { role },
      skip,
      take,
      include: {
        artistProfile: true,
        venueProfile: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    
    const total = await prisma.user.count({ where: { role } })
    
    return { 
      success: true, 
      data: users, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}
