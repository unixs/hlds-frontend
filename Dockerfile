FROM node:24-alpine AS builder

WORKDIR /usr/local/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:24-alpine

LABEL org.opencontainers.image.authors="Alex"
WORKDIR /usr/local/app

COPY --from=builder --exclude=src \
                    --exclude=package-lock.json \
                    --exclude=graphql/**/*.ts \
                    /usr/local/app ./

EXPOSE 3000/tcp
USER node

ENTRYPOINT ["npx"]
CMD ["next", "start"]
