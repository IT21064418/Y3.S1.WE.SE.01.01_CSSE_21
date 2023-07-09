FROM node:alpine
WORKDIR /backend/ratingsAndReviews/src
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]