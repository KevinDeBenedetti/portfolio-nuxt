# pnpm version - should match package.json packageManager field
ARG PNPM_VERSION=10.11.0
ARG NODE_VERSION=22

# =============================================================================
# Base Stage - Common setup for all stages
# =============================================================================
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# =============================================================================
# Development Stage - Hot reload with mounted volumes
# =============================================================================
FROM base AS dev

# Install all dependencies including devDependencies
RUN pnpm install --frozen-lockfile

# Expose dev server port
ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000

# Start development server
CMD ["pnpm", "run", "dev"]

# =============================================================================
# Build Stage - Build the application with pnpm
# =============================================================================
FROM base AS build

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . ./

# Build application
RUN pnpm run build

# =============================================================================
# Production Stage - Minimal Node.js runtime image
# =============================================================================
FROM node:${NODE_VERSION}-alpine AS production
WORKDIR /app

# Install pnpm
ARG PNPM_VERSION=10.11.0
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nuxt -u 1001 -G nodejs

COPY --from=build --chown=nuxt:nodejs /app/.output/ ./

# Install production dependencies from the generated package.json
WORKDIR /app/server
RUN pnpm install --prod

ENV PORT=80
ENV HOST=0.0.0.0
ENV NODE_ENV=production

EXPOSE 80

# Switch to non-root user
USER nuxt

WORKDIR /app
CMD ["node", "/app/server/index.mjs"]
