# We're starting from the Node.js 5.1.0 container
FROM nodesource/trusty:5.1.0

# INSTALL any further tools you need here so they are cached in the docker build

# Set the WORKDIR to /app so all following commands run in /app
WORKDIR /app

# COPY the package.json and if you use npm shrinkwrap the npm-shrinkwrap.json and
# install npm dependencies before copying the whole code into the container.
COPY package.json ./
# COPY npm-shrinkwrap.json ./
RUN npm install && npm rebuild node-sass

# After installing dependencies copy the whole codebase into the Container to not invalidate the cache before
COPY . ./
