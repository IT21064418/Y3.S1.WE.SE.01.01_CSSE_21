FROM node:alpine
WORKDIR /backend/item_management/src
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]