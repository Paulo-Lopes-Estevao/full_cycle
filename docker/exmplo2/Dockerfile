FROM node:14

WORKDIR /usr/src/app/exemplo

RUN apk update && apk install -y wget

RUN npm install

COPY . /usr/src/app/exemplo/

EXPOSE 5000
