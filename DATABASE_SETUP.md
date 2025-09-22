# Database Setup Guide - Flow Stage Platform

## Overview
This guide covers the PostgreSQL database setup with Prisma ORM for the Flow Stage musical touring platform.

## Prerequisites
- Node.js 18+ installed
- Vercel account (for database hosting)
- Vercel CLI installed (`npm i -g vercel`)

## Database Configuration

### 1. Vercel Postgres Setup
1. Go to your Vercel dashboard
2. Navigate to your project settings
3. Go to the "Storage" tab
4. Create a new Postgres database
5. Copy the connection string

### 2. Environment Variables
Create a `.env.local` file in your project root with:

```env
# Database
DATABASE_URL="your-vercel-postgres-connection-string"

# Auth0 Configuration (add your Auth0 credentials)
AUTH0_SECRET="your-auth0-secret"
AUTH0_BASE_URL="http://localhost:3000"
AUTH0_ISSUER_BASE_URL="https://your-domain.auth0.com"
AUTH0_CLIENT_ID="your-auth0-client-id"
AUTH0_CLIENT_SECRET="your-auth0-client-secret"
```

### 3. Database Migration
Run the following commands to set up your database:

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database (for development)
npm run db:push

# Or run migrations (for production)
npm run db:migrate:deploy
```

### 4. Seed Development Data (Optional)
```bash
npm run db:seed
```

## Database Schema

### Core Models
- **User**: Auth0-compatible user accounts with roles (Artist, Venue, Technician, Admin)
- **Artist**: Music profiles with genres, instruments, availability, and location
- **Venue**: Venue profiles with capacity, amenities, and location data
- **Booking**: Event bookings connecting artists and venues
- **Message**: Chat system for communication between users
- **Contract**: Legal documents with file storage and signature tracking

### Key Features
- **Geospatial Support**: Location-based search for artists and venues
- **Role-based Access**: Different user types with appropriate permissions
- **File Storage**: Contract files stored directly in database
- **Real-time Messaging**: Chat system for booking communication
- **Payment Tracking**: Financial status and fee management

## API Endpoints

### Health Check
- `GET /api/health` - Database connection status

### Users
- `GET /api/users?role=ARTIST&page=1&limit=10` - List users by role
- `POST /api/users` - Create new user

### Artists
- `GET /api/artists` - Search artists with filters
- `GET /api/artists/nearby?lat=40.7128&lng=-74.0060&radius=50` - Find nearby artists

### Venues
- `GET /api/venues` - Search venues with filters
- `GET /api/venues/nearby?lat=40.7128&lng=-74.0060&radius=50` - Find nearby venues

### Bookings
- `GET /api/bookings/artist/{artistId}` - Get artist's bookings
- `GET /api/bookings/venue/{venueId}` - Get venue's bookings
- `POST /api/bookings` - Create new booking

## Development Commands

```bash
# Start development server
npm run dev

# Generate Prisma client
npm run db:generate

# Push schema changes
npm run db:push

# Run migrations
npm run db:migrate

# Open Prisma Studio (database GUI)
npm run db:studio

# Seed development data
npm run db:seed
```

## Production Deployment

1. Set up Vercel Postgres database
2. Add environment variables in Vercel dashboard
3. Deploy your application
4. Run migrations: `npm run db:migrate:deploy`

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check your `DATABASE_URL` environment variable
   - Ensure Vercel Postgres is running
   - Verify network connectivity

2. **Prisma Client Not Found**
   - Run `npm run db:generate`
   - Check if `@prisma/client` is installed

3. **Migration Errors**
   - Check schema syntax with `npx prisma validate`
   - Reset database with `npx prisma migrate reset` (development only)

4. **Auth0 Integration Issues**
   - Verify Auth0 configuration
   - Check user role mapping in your Auth0 rules

## File Structure

```
src/
├── lib/
│   ├── prisma/
│   │   └── client.js          # Prisma client instance
│   └── db/
│       ├── utils.js           # Database utilities
│       └── queries/           # Query functions
│           ├── users.js
│           ├── artists.js
│           ├── venues.js
│           ├── bookings.js
│           ├── messages.js
│           └── contracts.js
├── types/
│   └── database.ts            # TypeScript types
└── app/
    └── api/                   # API routes
        ├── health/
        └── users/

prisma/
├── schema.prisma              # Database schema
├── migrations/                # Migration files
└── seed.js                    # Development data
```

## Security Considerations

- All database queries use parameterized statements (Prisma handles this)
- User authentication is handled by Auth0
- File uploads for contracts are validated
- Input validation on all API endpoints
- Rate limiting should be implemented for production

## Performance Optimization

- Database connection pooling is enabled
- Indexes are automatically created for foreign keys
- Consider adding custom indexes for frequently queried fields
- Use Prisma's `select` and `include` to limit data fetching
- Implement caching for frequently accessed data

## Monitoring

- Database health check endpoint: `/api/health`
- Prisma Studio for database inspection
- Vercel Postgres provides built-in monitoring
- Consider adding application-level logging
