FROM mhart/alpine-node:8

RUN apk add --no-cache make gcc g++ python

ARG BUILD_ENV

ENV NODE_ENV ${BUILD_ENV}
ENV HOME /app

COPY package.json ${HOME}/
COPY package.json tmp/
COPY src/ ${HOME}/src

WORKDIR /tmp

RUN npm install --production
RUN mkdir -p /${HOME} && cp -a /tmp/node_modules /${HOME}/

WORKDIR ${HOME}

CMD npm start
