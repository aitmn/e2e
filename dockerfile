FROM node:alpine
WORKDIR /projects/crm-e2e
COPY . .
RUN npm i
CMD ["npx", "codeceptjs", "run"]