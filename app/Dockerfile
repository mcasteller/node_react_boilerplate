# Tell Docker we want to use Node v10.4.1 installed in a alpine Linux image
FROM node:10.13.0-alpine

# Create the working dir
RUN mkdir -p /opt/app/trendauto-app
WORKDIR /opt/app/trendauto-app

COPY package.json yarn.lock /opt/app/trendauto-app/

# Install the node modules that the project needs
RUN yarn install

COPY . .

# Now our app lives in the container, we can run the command npm start
CMD [ "yarn", "start" ]