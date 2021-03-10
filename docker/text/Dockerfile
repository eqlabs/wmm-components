FROM node:alpine

COPY ./ /home/node/app

WORKDIR /home/node/app/examples/text

RUN npm install

EXPOSE 3008

CMD ["node", "backend.js"]
