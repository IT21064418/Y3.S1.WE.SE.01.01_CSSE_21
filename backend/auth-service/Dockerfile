FROM node:alpine
WORKDIR /backend/auth-service/src
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]