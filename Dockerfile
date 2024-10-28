# syntax=docker/dockerfile:1

# ARG NODE_VERSION=20.10.0
ARG NODE_VERSION=21.0.0

ARG PORT=3000

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app

FROM base as build

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN pnpm install

COPY . .

RUN pnpm run build

FROM base

WORKDIR /APP

EXPOSE $PORT

COPY --from=build /app/.output ./.output

CMD ["node", ".output/server/index.mjs"]