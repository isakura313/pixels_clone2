FROM node:lts-alpine as build-stage
ENV APP_ROOT /web
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
RUN npm ci
COPY ..
RUN npm run build


FROM nginix:stable-alpine as production-stage

copy --from=build-stage /${APP_ROOT}/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]