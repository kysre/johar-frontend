# Build stage
FROM node:21-alpine3.18 AS build
WORKDIR /app
COPY package*.json ./
COPY yarn.lock .
RUN yarn install
COPY . .
RUN npm run build

# Production stage
FROM nginx:1.21.1-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

