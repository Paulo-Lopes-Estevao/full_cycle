FROM node:16

WORKDIR /usr/src/app

COPY ["package.json", "yarn-lock*", "./"]

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]
