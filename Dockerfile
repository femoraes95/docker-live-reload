FROM node:17-slim

RUN apt-get update\
    && apt-get install -y build-essential

WORKDIR /app-reload/

COPY package.json package-lock.json /app-reload/

RUN npm i 

COPY . .

USER node

CMD npm run live-reload