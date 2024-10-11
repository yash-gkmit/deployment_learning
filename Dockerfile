# Use an official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code into the container
COPY . .

# Expose the application on port 3000
EXPOSE 3000

# Command to run the app
#CMD ["npm", "start"]
ENTRYPOINT npm start