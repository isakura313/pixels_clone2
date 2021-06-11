FROM node:lts-alpine as build-stage
WORKDIR /pixels_clone2
# ADD . ${APP_ROOT}
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm run generate


FROM nginx:stable-alpine as production-stage
COPY --from=build-stage  /pixels_clone2/dist  /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon on;"]


