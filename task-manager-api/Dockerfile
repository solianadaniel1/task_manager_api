# Step 1: Use the official Node.js image as the base image
FROM node:22.14.0

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (if it exists)
# This will help with caching dependencies
COPY package*.json ./

# Step 4: Install the application dependencies
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Expose the port the app will run on (default is 3000)
EXPOSE 3000

# Step 7: Set the command to run the application
CMD ["npm", "run", "dev"]
