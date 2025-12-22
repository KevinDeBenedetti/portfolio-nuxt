# Bun version - should match package.json packageManager field
ARG BUN_VERSION=1.3.5

# =============================================================================
# Base Stage - Common setup for all stages
# =============================================================================
FROM oven/bun:${BUN_VERSION}-alpine AS base
WORKDIR /app

# Copy package files
COPY package.json bunfig.toml ./

# =============================================================================
# Development Stage - Hot reload with mounted volumes
# =============================================================================
FROM base AS dev

# Install all dependencies including devDependencies
# Use --ignore-scripts to skip better-sqlite3 compilation (Nuxt uses native bun:sqlite)
RUN bun install --ignore-scripts

# Expose dev server port
ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000

# Start development server
CMD ["bun", "run", "dev"]

# =============================================================================
# Build Stage - Build the application with Bun
# =============================================================================
FROM base AS build

# Install dependencies (ignore scripts - Bun uses native bun:sqlite, no need for better-sqlite3)
RUN bun install --ignore-scripts

# Copy source code
COPY . ./

# Build application
RUN bun run build

# =============================================================================
# Production Stage - Minimal Bun runtime image
# =============================================================================
FROM oven/bun:${BUN_VERSION}-alpine AS production
WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nuxt -u 1001 -G nodejs

COPY --from=build --chown=nuxt:nodejs /app/.output/ ./

# Install production dependencies from the generated package.json
WORKDIR /app/server
RUN bun install --production --ignore-scripts

ENV PORT=80
ENV HOST=0.0.0.0
ENV NODE_ENV=production

EXPOSE 80

# Switch to non-root user
USER nuxt

WORKDIR /app
CMD ["bun", "/app/server/index.mjs"]
