FROM node:alpine
WORKDIR /backend/userProfiles/src
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]