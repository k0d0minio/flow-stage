import { prisma } from '@/lib/prisma/client.js'
import { handleDatabaseError, paginate } from '@/lib/db/utils.js'

// Contract queries
export const createContract = async (contractData) => {
  try {
    const contract = await prisma.contract.create({
      data: contractData,
      include: {
        booking: {
          include: {
            artist: { include: { user: true } },
            venue: { include: { user: true } },
          }
        },
        createdBy: true,
      },
    })
    return { success: true, data: contract }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getContractById = async (id) => {
  try {
    const contract = await prisma.contract.findUnique({
      where: { id },
      include: {
        booking: {
          include: {
            artist: { include: { user: true } },
            venue: { include: { user: true } },
          }
        },
        createdBy: true,
      },
    })
    return { success: true, data: contract }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getContractsByBooking = async (bookingId, page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    const contracts = await prisma.contract.findMany({
      where: { bookingId },
      skip,
      take,
      include: {
        booking: {
          include: {
            artist: { include: { user: true } },
            venue: { include: { user: true } },
          }
        },
        createdBy: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    
    const total = await prisma.contract.count({ where: { bookingId } })
    
    return { 
      success: true, 
      data: contracts, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getContractsByStatus = async (status, page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    
    const contracts = await prisma.contract.findMany({
      where: { status },
      skip,
      take,
      include: {
        booking: {
          include: {
            artist: { include: { user: true } },
            venue: { include: { user: true } },
          }
        },
        createdBy: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    
    const total = await prisma.contract.count({ where: { status } })
    
    return { 
      success: true, 
      data: contracts, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const updateContract = async (id, updateData) => {
  try {
    const contract = await prisma.contract.update({
      where: { id },
      data: updateData,
      include: {
        booking: {
          include: {
            artist: { include: { user: true } },
            venue: { include: { user: true } },
          }
        },
        createdBy: true,
      },
    })
    return { success: true, data: contract }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const signContract = async (id, signatureData) => {
  try {
    const contract = await prisma.contract.update({
      where: { id },
      data: {
        status: 'SIGNED',
        signatures: signatureData,
        signedAt: new Date(),
      },
      include: {
        booking: {
          include: {
            artist: { include: { user: true } },
            venue: { include: { user: true } },
          }
        },
        createdBy: true,
      },
    })
    return { success: true, data: contract }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}

export const getExpiredContracts = async (page = 1, limit = 10) => {
  try {
    const { skip, take } = paginate(page, limit)
    const now = new Date()
    
    const contracts = await prisma.contract.findMany({
      where: {
        status: { in: ['DRAFT', 'PENDING_SIGNATURE'] },
        validUntil: { lt: now },
      },
      skip,
      take,
      include: {
        booking: {
          include: {
            artist: { include: { user: true } },
            venue: { include: { user: true } },
          }
        },
        createdBy: true,
      },
      orderBy: { validUntil: 'asc' },
    })
    
    const total = await prisma.contract.count({
      where: {
        status: { in: ['DRAFT', 'PENDING_SIGNATURE'] },
        validUntil: { lt: now },
      },
    })
    
    return { 
      success: true, 
      data: contracts, 
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    }
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) }
  }
}
