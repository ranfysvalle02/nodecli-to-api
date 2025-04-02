# Use the official Node.js 18 LTS Alpine image as the base image  
FROM node:18-alpine  
  
# Set the working directory inside the container  
WORKDIR /usr/src/app  
  
# Copy package.json and package-lock.json to the working directory  
COPY package*.json ./  
  
# Install the app dependencies  
RUN npm install  
  
# Copy the rest of the application code to the working directory  
COPY . .  
  
# Ensure init-demo.js has execute permissions (optional but recommended)  
RUN chmod +x init-demo.js  
  
# Expose the port your app runs on (3000 in this case)  
EXPOSE 3000  
  
# Define the command to run your app  
CMD [ "node", "server.js" ]  

# docker build -t init-demo-app .  
# docker run -p 3000:3000 init-demo-app  
