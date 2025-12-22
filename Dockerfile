ARG BUN_VERSION=1.2.15
ARG NODE_VERSION=22.20.0-alpine

# Build Stage 1
FROM oven/bun:${BUN_VERSION}-alpine AS build
WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . ./

RUN bun run build

# Build Stage 2
FROM node:${NODE_VERSION}
WORKDIR /app

COPY --from=build /app/.output/ ./

ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["node", "/app/server/index.mjs"]
