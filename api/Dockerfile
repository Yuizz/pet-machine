FROM node:16.14.2-alpine3.15

WORKDIR /api

ENV PATH /api/node_modules/.bin$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

CMD ["yarn", "start"]

