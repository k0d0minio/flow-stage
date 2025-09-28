import { GET, POST } from './route'

// Mock Clerk server functions
jest.mock('@clerk/nextjs/server', () => ({
  auth: jest.fn(),
  currentUser: jest.fn(),
}))

// Mock profile functions
jest.mock('@/lib/supabase/profile', () => ({
  getProfile: jest.fn(),
  ensureProfile: jest.fn(),
}))

import { auth, currentUser } from '@clerk/nextjs/server'
import { getProfile, ensureProfile } from '@/lib/supabase/profile'

const mockAuth = auth as jest.MockedFunction<typeof auth>
const mockCurrentUser = currentUser as jest.MockedFunction<typeof currentUser>
const mockGetProfile = getProfile as jest.MockedFunction<typeof getProfile>
const mockEnsureProfile = ensureProfile as jest.MockedFunction<typeof ensureProfile>

// Mock NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data, init) => ({
      json: () => Promise.resolve(data),
      status: init?.status || 200,
      statusText: init?.statusText || 'OK',
    })),
  },
}))

describe('/api/profile', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET /api/profile', () => {
    it('returns profile for authenticated user', async () => {
      const mockProfile = { id: 'test-profile-123', email: 'test@example.com' }

      mockAuth.mockResolvedValue({ 
        userId: 'test-user-123', 
        getToken: jest.fn().mockResolvedValue('mock-jwt-token')
      })
      mockGetProfile.mockResolvedValue(mockProfile)

      const response = await GET()
      const json = await response.json()

      expect(response.status).toBe(200)
      expect(json).toEqual(mockProfile)
      expect(mockGetProfile).toHaveBeenCalledWith('test-user-123', 'mock-jwt-token')
    })

    it('returns 404 when profile not found', async () => {
      mockAuth.mockResolvedValue({ 
        userId: 'test-user-123', 
        getToken: jest.fn().mockResolvedValue('mock-jwt-token')
      })
      mockGetProfile.mockResolvedValue(null)

      const response = await GET()
      const json = await response.json()

      expect(response.status).toBe(404)
      expect(json).toEqual({ error: 'Profile not found' })
    })

    it('returns 401 when user not authenticated', async () => {
      mockAuth.mockResolvedValue({ userId: null })

      const response = await GET()
      const json = await response.json()

      expect(response.status).toBe(401)
      expect(json).toEqual({ error: 'Unauthorized' })
    })

    it('handles getProfile error', async () => {
      mockAuth.mockResolvedValue({ 
        userId: 'test-user-123', 
        getToken: jest.fn().mockResolvedValue('mock-jwt-token')
      })
      mockGetProfile.mockRejectedValue(new Error('Database error'))

      const response = await GET()
      const json = await response.json()

      expect(response.status).toBe(500)
      expect(json).toEqual({ error: 'Internal server error' })
    })
  })

  describe('POST /api/profile', () => {
    it('creates profile for authenticated user', async () => {
      const mockUser = { 
        id: 'test-user-123', 
        emailAddresses: [{ emailAddress: 'test@example.com' }],
        firstName: 'Test',
        lastName: 'User',
        imageUrl: 'https://example.com/avatar.jpg'
      }
      const mockProfile = { id: 'test-profile-123', email: 'test@example.com' }

      mockAuth.mockResolvedValue({ 
        userId: 'test-user-123', 
        getToken: jest.fn().mockResolvedValue('mock-jwt-token')
      })
      mockCurrentUser.mockResolvedValue(mockUser)
      mockEnsureProfile.mockResolvedValue(mockProfile)

      const response = await POST()
      const json = await response.json()

      expect(response.status).toBe(201)
      expect(json).toEqual(mockProfile)
      expect(mockEnsureProfile).toHaveBeenCalledWith(mockUser, 'mock-jwt-token')
    })

    it('returns 401 when user not authenticated', async () => {
      mockAuth.mockResolvedValue({ userId: null })

      const response = await POST()
      const json = await response.json()

      expect(response.status).toBe(401)
      expect(json).toEqual({ error: 'Unauthorized' })
    })

    it('handles ensureProfile error', async () => {
      const mockUser = { 
        id: 'test-user-123', 
        emailAddresses: [{ emailAddress: 'test@example.com' }],
        firstName: 'Test',
        lastName: 'User',
        imageUrl: 'https://example.com/avatar.jpg'
      }

      mockAuth.mockResolvedValue({ 
        userId: 'test-user-123', 
        getToken: jest.fn().mockResolvedValue('mock-jwt-token')
      })
      mockCurrentUser.mockResolvedValue(mockUser)
      mockEnsureProfile.mockRejectedValue(new Error('Database error'))

      const response = await POST()
      const json = await response.json()

      expect(response.status).toBe(500)
      expect(json).toEqual({ error: 'Internal server error' })
    })

    it('handles currentUser error', async () => {
      mockAuth.mockResolvedValue({ 
        userId: 'test-user-123', 
        getToken: jest.fn().mockResolvedValue('mock-jwt-token')
      })
      mockCurrentUser.mockRejectedValue(new Error('User not found'))

      const response = await POST()
      const json = await response.json()

      expect(response.status).toBe(500)
      expect(json).toEqual({ error: 'Internal server error' })
    })
  })
})