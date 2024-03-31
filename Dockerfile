# base node image
FROM node:20-slim AS base

# pnpm setup
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# 환경변수 설정
ENV NODE_ENV production
ENV PORT 8080

# STEP 1) development dependencies, 빌드 과정에서 필요한 devDependencies 포함
FROM base AS deps

WORKDIR /app

ADD package.json .npmrc pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod=false --frozen-lockfile

# STEP 2) 빌드
FROM base as build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN pnpm run build

# STEP 3) production dependencies, 불필요한 devDependencies 제외
FROM base AS production-deps

WORKDIR /app

ADD package.json .npmrc pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod=true --frozen-lockfile

# STEP 4) production image 빌드, production-deps에서 생성된 node_modules를 사용
FROM base AS final

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app/package.json

EXPOSE $PORT

CMD [ "pnpm", "start" ]
