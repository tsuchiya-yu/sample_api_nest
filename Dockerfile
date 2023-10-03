FROM node:18.17
RUN npm i -g @nestjs/cli prisma

WORKDIR /api

COPY package*.json /api/
RUN npm i
RUN npx prisma generate

CMD [ "npm", "run", "start:dev"]