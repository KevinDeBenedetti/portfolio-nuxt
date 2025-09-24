ARG NODE_VERSION=22.17.1-alpine

# Build Dev
FROM node:${NODE_VERSION} AS dev
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml .npmrc pnpm-workspace.yaml ./
RUN pnpm i

# COPY . ./
COPY ./app /app/
COPY ./config /app/config/
COPY ./content /app/content/
COPY ./i18n /app/i18n/
COPY ./public /app/public/
COPY ./nuxt.config.ts tsconfig.json eslint.config.mjs .prettierrc .prettierignore content.config.ts /app/

EXPOSE 3000

CMD [ "pnpm", "run", "dev" ]

# Build Stage 1

FROM node:${NODE_VERSION} AS build
WORKDIR /app

RUN corepack enable

# Copy package.json and your lockfile, here we add pnpm-lock.yaml for illustration
COPY package.json pnpm-lock.yaml .npmrc pnpm-workspace.yaml ./

# Install dependencies
RUN pnpm i --frozen-lockfile

# Copy the entire project
COPY . ./

ARG NUXT_GTAG_ID
ARG NODE_ENV
ENV NUXT_GTAG_ID=$NUXT_GTAG_ID
ENV NODE_ENV=$NODE_ENV

# Build the project
RUN pnpm run build

# Build Stage 2

FROM node:${NODE_VERSION} as prod
WORKDIR /app

# Only `.output` folder is needed from the build stage
COPY --from=build /app/.output/ ./

# Change the port and host
ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["node", "/app/server/index.mjs"]


# COPY ./package.json ./pnpm-lock.yaml ./
# RUN pnpm install --frozen-lockfile && pnpm store prune

# # Dev
# FROM base AS dev
# COPY app /app/
# COPY config /app/config/
# COPY content /app/content/
# COPY i18n /app/i18n/
# COPY public /app/public/
# COPY nuxt.config.ts tsconfig.json eslint.config.mjs .prettierrc global.d.ts content.config.ts /app/

# CMD [ "pnpm", "run", "dev" ]

# # Prod dependencies
# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
# RUN pnpm install --frozen-lockfile

# # Build
# FROM base AS build
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# RUN pnpm run build

# # Prod
# FROM docker.io/node:${NODE_VERSION} AS prod

# ARG NUXT_GTAG_ID
# ARG NODE_ENV
# ENV NUXT_GTAG_ID=$NUXT_GTAG_ID
# ENV NODE_ENV=$NODE_ENV

# WORKDIR /app
# COPY --from=build /app/.output ./.output

# EXPOSE 3000

# CMD ["node", ".output/server/index.mjs"]