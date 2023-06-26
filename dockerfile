FROM codeceptjs/codeceptjs

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx playwright install

COPY . .

CMD ["npx", "codeceptjs", "run"]