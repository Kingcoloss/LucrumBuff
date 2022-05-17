FROM node:14.19.1-alpine

# create destination directory
RUN mkdir -p /usr/src/lucrumbuff_front_app
WORKDIR /usr/src/lucrumbuff_front_app

# update and install depedencies
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note, .dockerignore
COPY . /usr/src/lucrumbuff_front_app/
RUN npm install yarn
RUN yarn install

# Build
RUN yarn run build

#expose 3000
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["yarn", "start"]