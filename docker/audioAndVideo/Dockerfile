FROM node:alpine

COPY ./ /home/node/app

WORKDIR /home/node/app/examples/audioAndVideo

RUN npm install

EXPOSE 3009

CMD ["node", "backend.js"]
