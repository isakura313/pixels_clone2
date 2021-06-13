# pixels_clone2

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```


docker build -t pixels_clone/pixels_clone .
docker run -it -p 8080:8080 --rm --name pixels_clone  pixels_clone/pixels_clone
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
docker run -v /pixels_clone/node_modules -p 5000:80 pixels_clone/pixels_clone

You can check  Live Demo here http://isakura313.zonopo.ru/