FROM node:alpine

USER root

RUN mkdir /home/node/app

COPY . /home/node/app

WORKDIR /home/node/app/packages/wmm-utils

RUN npm install

WORKDIR /home/node/app/packages/wmm-web-components

RUN npm install

WORKDIR /home/node/app/docs

RUN npm install

WORKDIR /home/node/app/examples/audioAndVideo

RUN npm install

WORKDIR /home/node/app/examples/text

RUN npm install

WORKDIR /home/node/app/examples

# CMD ["node", "backend.js"]
