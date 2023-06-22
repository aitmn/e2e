FROM node:18.14-alpine
WORKDIR /app
COPY . .
RUN npm i
CMD ["codeceptjs", "run", "tests"]