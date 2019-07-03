FROM node:10.16.0-alpine

WORKDIR /opt/app

RUN apk update && apk add yarn

COPY package.json .
COPY yarn.lock .

RUN yarn

CMD yarn develop
