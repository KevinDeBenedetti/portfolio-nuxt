ARG NODE_VERSION=22.17.1-alpine

# Build Dev
# FROM node:${NODE_VERSION} AS dev
# WORKDIR /app
# RUN corepack enable
# COPY package.json pnpm-lock.yaml .npmrc pnpm-workspace.yaml ./
# RUN pnpm i

# # COPY . ./
# COPY ./app /app/
# COPY ./config /app/config/
# COPY ./content /app/content/
# COPY ./i18n /app/i18n/
# COPY ./public /app/public/
# COPY ./nuxt.config.ts tsconfig.json eslint.config.mjs .prettierrc .prettierignore content.config.ts /app/

# EXPOSE 3000

# CMD [ "pnpm", "run", "dev" ]

# Build Stage 1
FROM node:${NODE_VERSION} AS build
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml .npmrc pnpm-workspace.yaml ./

RUN pnpm i --frozen-lockfile

COPY . ./

# Add ARG
ARG NUXT_GTAG_ID
# Add ENV
ENV NUXT_GTAG_ID=$NUXT_GTAG_ID

RUN pnpm run build

# Build Stage 2
FROM node:${NODE_VERSION}
WORKDIR /app

COPY --from=build /app/.output/ ./

ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["node", "/app/server/index.mjs"]
