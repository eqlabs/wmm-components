FROM node:alpine

COPY ./ /home/node/app

WORKDIR /home/node/app/packages/wmm-utils

RUN npm install

WORKDIR /home/node/app/packages/wmm-web-components

RUN npm install

WORKDIR /home/node/app/examples/text

RUN npm install

EXPOSE 3008

CMD ["node", "backend.js"]
