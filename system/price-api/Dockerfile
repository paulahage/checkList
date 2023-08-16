FROM node:20-alpine
WORKDIR /app

COPY src src
COPY package*.json ./
RUN npm install


EXPOSE 80

CMD ["node", "src/index.js"]