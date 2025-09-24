# Base image for dependency installation
FROM node:22-alpine AS base

# Set up environment variables and working directory
WORKDIR /app

RUN npm install -g npm@latest

# Efficient caching by copying only package files first
COPY package.json package-lock.json* ./

# Install dependencies in base stage (production dependencies only)
RUN npm install --legacy-peer-deps

RUN mkdir -p /app/public

# Copy the rest of the app code
COPY . .

# Build stage
FROM base AS build
COPY .env .env
RUN npx update-browserslist-db@latest
RUN npm run build

# Production image
FROM node:22-alpine AS production

WORKDIR /app

COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/.env ./.env

CMD ["npm", "run", "start"]

# Development stage with hot reloading
FROM base AS development

# Command for development
CMD ["npm", "run", "dev"]
