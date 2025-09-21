ARG NODE_VERSION=22.17.1-slim
ARG PNPM_VERSION=10.17.0

FROM docker.io/node:${NODE_VERSION} AS base
WORKDIR /app
RUN npm install --ignore-scripts --location=global pnpm@${PNPM_VERSION}
COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile && pnpm store prune

# Dev
FROM base AS dev
COPY app /app/
COPY config /app/config/
COPY content /app/content/
COPY i18n /app/i18n/
COPY public /app/public/
COPY nuxt.config.ts tsconfig.json eslint.config.mjs .prettierrc global.d.ts content.config.ts /app/

CMD [ "pnpm", "run", "dev" ]

# Prod dependencies
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
RUN pnpm install --frozen-lockfile

# Build
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# Prod
FROM docker.io/node:${NODE_VERSION} AS prod

ARG NUXT_GTAG_ID
ARG NODE_ENV
ENV NUXT_GTAG_ID=$NUXT_GTAG_ID
ENV NODE_ENV=$NODE_ENV

WORKDIR /app
COPY --from=build /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]