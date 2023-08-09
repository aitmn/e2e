FROM codeceptjs/codeceptjs

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "test"]

