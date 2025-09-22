const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seeding...')

  // Create sample users
  const artistUser = await prisma.user.create({
    data: {
      auth0Id: 'auth0|artist123',
      email: 'artist@example.com',
      name: 'John Musician',
      role: 'ARTIST',
    },
  })

  const venueUser = await prisma.user.create({
    data: {
      auth0Id: 'auth0|venue456',
      email: 'venue@example.com',
      name: 'Music Venue Owner',
      role: 'VENUE',
    },
  })

  // Create artist profile
  const artist = await prisma.artist.create({
    data: {
      userId: artistUser.id,
      genres: ['Rock', 'Blues', 'Jazz'],
      instruments: ['Guitar', 'Vocals', 'Piano'],
      bio: 'Experienced musician with 10+ years in the industry',
      experience: 'Professional',
      portfolio: ['https://example.com/portfolio1', 'https://example.com/portfolio2'],
      available: true,
      travelRadius: 100,
      minFee: 500,
      maxFee: 2000,
      latitude: 40.7128,
      longitude: -74.0060,
      city: 'New York',
      country: 'USA',
    },
  })

  // Create venue profile
  const venue = await prisma.venue.create({
    data: {
      userId: venueUser.id,
      name: 'The Music Hall',
      description: 'Intimate venue perfect for acoustic performances',
      capacity: 200,
      venueType: 'CONCERT_HALL',
      amenities: ['Sound System', 'Lighting', 'Bar', 'Parking'],
      address: '123 Music Street',
      city: 'New York',
      country: 'USA',
      latitude: 40.7589,
      longitude: -73.9851,
      postalCode: '10019',
      phone: '+1-555-0123',
      email: 'bookings@musichall.com',
      website: 'https://musichall.com',
      available: true,
    },
  })

  // Create a sample booking
  const booking = await prisma.booking.create({
    data: {
      artistId: artist.id,
      venueId: venue.id,
      eventName: 'Acoustic Evening',
      eventDate: new Date('2024-02-15'),
      startTime: new Date('2024-02-15T20:00:00Z'),
      endTime: new Date('2024-02-15T23:00:00Z'),
      description: 'An intimate acoustic performance featuring original songs',
      agreedFee: 800,
      currency: 'USD',
      setupTime: 60,
      soundcheck: true,
      equipment: ['Acoustic Guitar', 'Microphone', 'Monitor'],
      status: 'PENDING',
    },
  })

  // Create sample messages
  await prisma.message.create({
    data: {
      bookingId: booking.id,
      senderId: artistUser.id,
      receiverId: venueUser.id,
      content: 'Hi! I\'m excited about the upcoming performance. Do you have any specific requirements?',
      messageType: 'TEXT',
    },
  })

  await prisma.message.create({
    data: {
      bookingId: booking.id,
      senderId: venueUser.id,
      receiverId: artistUser.id,
      content: 'Great! We have a full sound system and lighting setup. Just bring your guitar and we\'ll handle the rest.',
      messageType: 'TEXT',
    },
  })

  // Create sample contract
  await prisma.contract.create({
    data: {
      bookingId: booking.id,
      createdById: venueUser.id,
      title: 'Performance Agreement - Acoustic Evening',
      content: 'This agreement covers the performance details, payment terms, and venue requirements...',
      terms: JSON.stringify({
        payment: 'Due 7 days after performance',
        cancellation: '48 hours notice required',
        equipment: 'Venue provides sound system',
      }),
      signatures: JSON.stringify({}),
      status: 'DRAFT',
      validFrom: new Date(),
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    },
  })

  console.log('Database seeding completed successfully!')
  console.log(`Created user: ${artistUser.email}`)
  console.log(`Created user: ${venueUser.email}`)
  console.log(`Created artist: ${artist.id}`)
  console.log(`Created venue: ${venue.id}`)
  console.log(`Created booking: ${booking.id}`)
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
