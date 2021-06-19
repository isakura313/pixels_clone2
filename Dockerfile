FROM node:lts-alpine as build-stage
ENV APP_ROOT /web
ENV NODE_ENV production

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm i
RUN npm run build

CMD ["npm", "run", "start"]