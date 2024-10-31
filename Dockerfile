# syntax=docker/dockerfile:1

# ARG NODE_VERSION=20.10.0
ARG NODE_VERSION=21.0.0

ARG PORT=3000

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app

RUN npm install -g pnpm

ENV NODE_OPTIONS="--max-old-space-size=8192"

FROM base as build

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile && pnpm store prune

COPY . .

ARG NUXT_GTAG_ID
ENV NUXT_GTAG_ID=$NUXT_GTAG_ID

# RUN pnpm run build
RUN node --max-old-space-size=8192 $(which pnpm) run build

FROM base

WORKDIR /app

EXPOSE $PORT

COPY --from=build /app/.output ./.output

CMD ["node", ".output/server/index.mjs"]