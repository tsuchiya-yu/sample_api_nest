FROM node:18.17
RUN npm i -g @nestjs/cli

WORKDIR /api

COPY package*.json /api/
RUN npm i
CMD [ "npm", "run", "start:dev"]