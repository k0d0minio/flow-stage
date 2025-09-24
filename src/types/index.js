// User types
export const USER_TYPES = {
  ARTIST: 'artist',
  VENUE: 'venue', 
  BOOKER: 'booker'
}

// Profile completion levels
export const COMPLETION_LEVELS = {
  BASIC: 30,      // Name, type, location
  DETAILED: 70,   // Bio, photos, demos
  EXPERT: 100     // All fields + verification
}

// Matching criteria weights
export const MATCHING_WEIGHTS = {
  GENRE_COMPATIBILITY: 0.25,
  CAPACITY_MATCH: 0.20,
  BUDGET_COMPATIBILITY: 0.20,
  AVAILABILITY_MATCH: 0.15,
  LOCATION_PROXIMITY: 0.10,
  TECHNICAL_FIT: 0.10
}
