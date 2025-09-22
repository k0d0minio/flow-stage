// Flow Stage Application Constants

export const APP_CONFIG = {
  name: "Flow Stage",
  description: "Plateforme 360° du Touring Musical",
  version: "1.0.0",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
};

export const API_ENDPOINTS = {
  base: "/api",
  auth: "/api/auth",
  artists: "/api/artists",
  venues: "/api/venues",
  bookings: "/api/bookings",
  matches: "/api/matches",
};

export const USER_TYPES = {
  ARTIST: "artist",
  VENUE: "venue",
  BOOKER: "booker",
  TECHNICIAN: "technician",
  MUNICIPALITY: "municipality",
  CAMPING: "camping",
};

export const MATCHING_CRITERIA = {
  CAPACITY: "capacity",
  BUDGET: "budget",
  GENRE: "genre",
  LOCATION: "location",
  AVAILABILITY: "availability",
  TECHNICAL_REQUIREMENTS: "technical_requirements",
};

export const CONTRACT_STATUS = {
  DRAFT: "draft",
  PENDING: "pending",
  SIGNED: "signed",
  CANCELLED: "cancelled",
  COMPLETED: "completed",
};

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  ARTISTS: "/artists",
  VENUES: "/venues",
  BOOKINGS: "/bookings",
  PROFILE: "/profile",
  LOGIN: "/login",
  REGISTER: "/register",
};
