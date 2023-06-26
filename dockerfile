FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install codeceptjs playwright --save

CMD ["codeceptjs", "run"]