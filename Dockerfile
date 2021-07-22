FROM node:latest
RUN npm --force install -g yarn
WORKDIR /app/
COPY package.json .
RUN yarn
COPY . .