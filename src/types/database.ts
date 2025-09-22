// Database types for Flow Stage platform

export enum UserRole {
  ARTIST = 'ARTIST',
  VENUE = 'VENUE',
  TECHNICIAN = 'TECHNICIAN',
  ADMIN = 'ADMIN',
}

export enum VenueType {
  CONCERT_HALL = 'CONCERT_HALL',
  CLUB = 'CLUB',
  BAR = 'BAR',
  RESTAURANT = 'RESTAURANT',
  OUTDOOR = 'OUTDOOR',
  THEATER = 'THEATER',
  STUDIO = 'STUDIO',
  OTHER = 'OTHER',
}

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  DISPUTED = 'DISPUTED',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  PARTIAL = 'PARTIAL',
  REFUNDED = 'REFUNDED',
  DISPUTED = 'DISPUTED',
}

export enum MessageType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  FILE = 'FILE',
  SYSTEM = 'SYSTEM',
}

export enum ContractStatus {
  DRAFT = 'DRAFT',
  PENDING_SIGNATURE = 'PENDING_SIGNATURE',
  SIGNED = 'SIGNED',
  EXPIRED = 'EXPIRED',
  CANCELLED = 'CANCELLED',
}

// Base types
export interface User {
  id: string
  auth0Id: string
  email: string
  name?: string
  avatar?: string
  role: UserRole
  createdAt: Date
  updatedAt: Date
  artistProfile?: Artist
  venueProfile?: Venue
  bookings?: Booking[]
  sentMessages?: Message[]
  receivedMessages?: Message[]
  contracts?: Contract[]
}

export interface Artist {
  id: string
  userId: string
  user: User
  genres: string[]
  instruments: string[]
  bio?: string
  experience?: string
  portfolio: string[]
  available: boolean
  travelRadius?: number
  minFee?: number
  maxFee?: number
  latitude?: number
  longitude?: number
  city?: string
  country?: string
  createdAt: Date
  updatedAt: Date
  bookings?: Booking[]
}

export interface Venue {
  id: string
  userId: string
  user: User
  name: string
  description?: string
  capacity?: number
  venueType: VenueType
  amenities: string[]
  address: string
  city: string
  country: string
  latitude: number
  longitude: number
  postalCode?: string
  phone?: string
  email?: string
  website?: string
  bookingContact?: string
  available: boolean
  bookingRules?: string
  createdAt: Date
  updatedAt: Date
  bookings?: Booking[]
}

export interface Booking {
  id: string
  artistId: string
  venueId: string
  status: BookingStatus
  eventName: string
  eventDate: Date
  startTime: Date
  endTime: Date
  description?: string
  agreedFee?: number
  currency: string
  paymentStatus: PaymentStatus
  setupTime?: number
  soundcheck: boolean
  equipment: string[]
  specialRequests?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
  artist: Artist
  venue: Venue
  messages?: Message[]
  contracts?: Contract[]
}

export interface Message {
  id: string
  bookingId: string
  senderId: string
  receiverId: string
  content: string
  messageType: MessageType
  attachments: string[]
  read: boolean
  createdAt: Date
  booking: Booking
  sender: User
  receiver: User
}

export interface Contract {
  id: string
  bookingId: string
  createdById: string
  title: string
  content: string
  fileUrl?: string
  fileData?: Buffer
  terms: string
  signatures: string
  status: ContractStatus
  validFrom?: Date
  validUntil?: Date
  signedAt?: Date
  createdAt: Date
  updatedAt: Date
  booking: Booking
  createdBy: User
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    error: string
    code: string
  }
  pagination?: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Query filter types
export interface ArtistFilters {
  genres?: string[]
  instruments?: string[]
  city?: string
  country?: string
  minFee?: number
  maxFee?: number
}

export interface VenueFilters {
  venueType?: VenueType
  city?: string
  country?: string
  minCapacity?: number
  maxCapacity?: number
  amenities?: string[]
}

// Create/Update types
export interface CreateUserData {
  auth0Id: string
  email: string
  name?: string
  avatar?: string
  role?: UserRole
}

export interface CreateArtistData {
  userId: string
  genres: string[]
  instruments: string[]
  bio?: string
  experience?: string
  portfolio?: string[]
  available?: boolean
  travelRadius?: number
  minFee?: number
  maxFee?: number
  latitude?: number
  longitude?: number
  city?: string
  country?: string
}

export interface CreateVenueData {
  userId: string
  name: string
  description?: string
  capacity?: number
  venueType: VenueType
  amenities?: string[]
  address: string
  city: string
  country: string
  latitude: number
  longitude: number
  postalCode?: string
  phone?: string
  email?: string
  website?: string
  bookingContact?: string
  available?: boolean
  bookingRules?: string
}

export interface CreateBookingData {
  artistId: string
  venueId: string
  eventName: string
  eventDate: Date
  startTime: Date
  endTime: Date
  description?: string
  agreedFee?: number
  currency?: string
  setupTime?: number
  soundcheck?: boolean
  equipment?: string[]
  specialRequests?: string
  notes?: string
}

export interface CreateMessageData {
  bookingId: string
  senderId: string
  receiverId: string
  content: string
  messageType?: MessageType
  attachments?: string[]
}

export interface CreateContractData {
  bookingId: string
  createdById: string
  title: string
  content: string
  fileUrl?: string
  fileData?: Buffer
  terms: string
  signatures: string
  validFrom?: Date
  validUntil?: Date
}
