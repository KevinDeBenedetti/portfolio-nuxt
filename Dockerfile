# syntax=docker/dockerfile:1

# ARG NODE_VERSION=20.10.0
ARG NODE_VERSION=21.0.0

ARG PORT=3000

FROM node:lts-alpine AS base

RUN npm install -g npm@latest && npm install -g pnpm@latest

WORKDIR /app

FROM base AS build

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

ADD . /app

ARG NUXT_GTAG_ID
ARG NODE_ENV

ENV NUXT_GTAG_ID=$NUXT_GTAG_ID
ENV NODE_ENV=$NODE_ENV
ENV NODE_OPTIONS="--max_old_space_size=8192"

RUN pnpm run build

FROM base

COPY --from=build /app/.output ./.output

EXPOSE $PORT

CMD ["node", ".output/server/index.mjs"]