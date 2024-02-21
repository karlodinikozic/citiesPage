# Use official Node.js image as the base image
FROM node:21

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Nest CLI globally
RUN npm install -g @nestjs/cli

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5000 to the outside world
EXPOSE ${PORT}

# Command to run the NestJS app
CMD ["npm", "run", "start:dev"]
