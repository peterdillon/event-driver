# Stage 1: Build the Angular application
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Clean install all dependencies (including dev dependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the Angular app for production
RUN npm run build --configuration=production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Copy the built app from the previous stage
COPY --from=build /app/dist/eventdriver/browser /usr/share/nginx/html

# IMPORTANT: Copy health.html to root of web directory
COPY --from=build /app/dist/eventdriver/browser/health.html /usr/share/nginx/html/health.html

# Copy custom nginx configuration (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]