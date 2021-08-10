FROM node:14

WORKDIR /app

COPY ./code /app

RUN npm install

CMD [ "sh", "-c", "npm run start" ]
