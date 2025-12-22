# Bun and Node versions - should match package.json packageManager field
ARG BUN_VERSION=1.3.5
ARG NODE_VERSION=22.20.0-alpine

# =============================================================================
# Base Stage - Common setup for all stages
# =============================================================================
FROM oven/bun:${BUN_VERSION}-alpine AS base
WORKDIR /app

# Install build dependencies for native modules (better-sqlite3)
RUN apk add --no-cache python3 make g++ gcc

# Copy package files
COPY package.json bunfig.toml ./

# =============================================================================
# Development Stage - Hot reload with mounted volumes
# =============================================================================
FROM base AS dev

# Install all dependencies including devDependencies
RUN bun install

# Expose dev server port
ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000

# Start development server
CMD ["bun", "run", "dev"]

# =============================================================================
# Build Stage - Build the application
# =============================================================================
FROM base AS build

# Install dependencies (ignore scripts to skip better-sqlite3 native build - not needed for SSG)
RUN bun install --ignore-scripts

# Copy source code
COPY . ./

# Build application
RUN bun run build

# =============================================================================
# Production Stage - Minimal runtime image
# =============================================================================
FROM node:${NODE_VERSION} AS production
WORKDIR /app

COPY --from=build /app/.output/ ./

ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["node", "/app/server/index.mjs"]
