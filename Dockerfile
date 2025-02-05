# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Install only production dependencies (to reduce image size)
RUN npm prune --production

# Stage 2: Run the application
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app ./

# Expose port 3000 (the default port for Next.js)
EXPOSE 3000

# Start the Next.js application in production mode
CMD ["npm", "start"]
