FROM codeceptjs/codeceptjs

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN "printenv"

CMD ["npm", "run", "test"]

