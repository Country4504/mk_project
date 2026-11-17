FROM node:20-alpine AS build

WORKDIR /app
RUN sed -i 's|https://dl-cdn.alpinelinux.org/alpine|https://mirrors.aliyun.com/alpine|g' /etc/apk/repositories \
    && apk add --no-cache bash

RUN corepack enable \
    && corepack prepare pnpm@9.0.0 --activate

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --registry=https://registry.npmmirror.com

COPY . .
ARG NEXT_PUBLIC_CONTACT_API_URL=https://replace-with-your-worker-domain
ARG NEXT_PUBLIC_TURNSTILE_SITE_KEY=replace-with-turnstile-site-key
ENV NEXT_PUBLIC_CONTACT_API_URL=$NEXT_PUBLIC_CONTACT_API_URL \
    NEXT_PUBLIC_TURNSTILE_SITE_KEY=$NEXT_PUBLIC_TURNSTILE_SITE_KEY
RUN pnpm build

FROM nginx:1.27-alpine AS runtime
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
