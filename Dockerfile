ARG NODE_IMAGE=docker.io/node:22.17.1-alpine

# Base stage
FROM ${NODE_IMAGE} AS base

ARG PNPM_VERSION=10.13.1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

ENV NODE_OPTIONS="--max_old_space_size=8192"

WORKDIR /app
# Installer les outils de compilation nécessaires pour better-sqlite3
# RUN apt-get update && apt-get install -y \
#     python3 \
#     make \
#     g++ \
#     && rm -rf /var/lib/apt/lists/*

RUN corepack enable pnpm && corepack install -g pnpm@${PNPM_VERSION}
COPY --chown=node:root . ./

# Dev stage
FROM base AS dev

# RUN pnpm install --frozen-lockfile

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
CMD [ "pnpm", "run", "dev" ]

# Prod dependencies stage
FROM base AS prod-deps

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
RUN pnpm install --frozen-lockfile

# Build stage
FROM base AS build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# RUN pnpm install --frozen-lockfile
# COPY . ./
RUN pnpm run build

# Prod stage
FROM ${NODE_IMAGE} AS prod

ARG NUXT_GTAG_ID
ARG NODE_ENV

ENV NUXT_GTAG_ID=$NUXT_GTAG_ID
ENV NODE_ENV=$NODE_ENV

# ARG APP_VERSION
# ENV APP_VERSION=$APP_VERSION
WORKDIR /app
# RUN apt update && apt install -y git && rm -rf /var/lib/apt/lists/* \
#   && mkdir -p /home/node/logs && chmod 660 -R /home/node/logs \
#   && mkdir -p /home/node/.npm && chmod 660 -R /home/node/.npm \
#   && chown -R node:root /app \
#   && git config --system --add safe.directory '*'

# COPY --chown=node:root --from=build /app/.output ./.output
COPY --from=build /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]