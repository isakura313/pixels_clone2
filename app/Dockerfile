FROM node:lts-alpine as build-stage

# RUN apt-get update

ENV APP_ROOT /src

WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}

RUN npm i
RUN npm run build

ENV HOST 0.0.0.0
