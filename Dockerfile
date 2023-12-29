# Step 1: Use an official Node runtime as a parent image
FROM node:latest

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy the current directory contents into the container at /usr/src/app
COPY . .

# Step 4: Install any needed packages specified in package.json
RUN npm install i

# Step 5: Make port 3000 available to the world outside this container
EXPOSE 3000

# Step 6: Define environment variable
ENV NODE_ENV=production


# Step 7: Run the app when the container launches
CMD ["npm", "start"]
