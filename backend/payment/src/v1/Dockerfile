FROM node:alpine
WORKDIR /backend/payment/src
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]
