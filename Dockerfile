# Stage 1: Build the Angular application
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --configuration=production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
# Install curl for health checks
RUN apk add --no-cache curl
COPY --from=build /app/dist/eventdriver/browser /usr/share/nginx/html
# IMPORTANT: Copy health.html to root of web directory
COPY --from=build /app/dist/eventdriver/browser/health.html /usr/share/nginx/html/health.html
# Copy custom nginx configuration (optional)
COPY nginx.conf /etc/nginx/nginx.conf
RUN chmod -R 644 /usr/share/nginx/html && find /usr/share/nginx/html -type d -exec chmod 755 {} \;
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]