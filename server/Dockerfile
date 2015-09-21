FROM node:latest

RUN npm install -g nodemon forever
RUN mkdir /src
WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install

EXPOSE 3000
RUN node --version
RUN ls /src -al

CMD node /src/app/server.js
