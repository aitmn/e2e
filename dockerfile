FROM node:18.14-alpine
WORKDIR C:\Users\ivanov\projects\crm-e2e
COPY . .
RUN npm i
EXPOSE 3000
CMD ["npx", "codeceptjs", "run", "tests"]