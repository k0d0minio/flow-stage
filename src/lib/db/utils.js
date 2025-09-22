import { prisma } from '../prisma/client.js'

// Database connection utilities
export const connectDB = async () => {
  try {
    await prisma.$connect()
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Database connection failed:', error)
    throw error
  }
}

export const disconnectDB = async () => {
  try {
    await prisma.$disconnect()
    console.log('Database disconnected successfully')
  } catch (error) {
    console.error('Database disconnection failed:', error)
    throw error
  }
}

// Health check
export const healthCheck = async () => {
  try {
    await prisma.$queryRaw`SELECT 1`
    return { status: 'healthy', timestamp: new Date().toISOString() }
  } catch (error) {
    return { status: 'unhealthy', error: error.message, timestamp: new Date().toISOString() }
  }
}

// Transaction wrapper
export const withTransaction = async (callback) => {
  return await prisma.$transaction(callback)
}

// Pagination helper
export const paginate = (page = 1, limit = 10) => {
  const skip = (page - 1) * limit
  return { skip, take: limit }
}

// Error handling
export const handleDatabaseError = (error) => {
  console.error('Database error:', error)
  
  if (error.code === 'P2002') {
    return { error: 'A record with this information already exists', code: 'DUPLICATE' }
  }
  
  if (error.code === 'P2025') {
    return { error: 'Record not found', code: 'NOT_FOUND' }
  }
  
  if (error.code === 'P2003') {
    return { error: 'Foreign key constraint failed', code: 'FOREIGN_KEY' }
  }
  
  return { error: 'Database operation failed', code: 'UNKNOWN' }
}
