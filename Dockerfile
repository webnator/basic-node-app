FROM node:14.11-alpine

COPY . /app
WORKDIR /app

RUN npm i

ENTRYPOINT npm start
