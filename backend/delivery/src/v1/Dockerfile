FROM node:alpine
WORKDIR /backend/delivery/src
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]