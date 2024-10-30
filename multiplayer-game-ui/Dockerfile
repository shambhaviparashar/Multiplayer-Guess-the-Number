# Stage 1: Build the React App
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files needed for the build process
COPY . .

# Run the build script to generate the optimized production build
RUN npm run build

# Stage 2: Serve the React App using Nginx
FROM nginx:alpine

# Copy the built output from Stage 1 to Nginx's HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default Nginx HTTP port
EXPOSE 80

# Start Nginx to serve the built application
ENTRYPOINT ["nginx", "-g", "daemon off;"]
