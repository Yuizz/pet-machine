FROM node:16.14.2-alpine3.15

WORKDIR /app

# ENV PATH /app/node_modules/.bin$PATH

COPY package.json ./

RUN npm install

COPY . ./

CMD ["yarn", "dev", "--host", "0.0.0.0"]
