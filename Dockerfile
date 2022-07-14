FROM node:16.13-alpine3.13

ENV NODE_ENV=development

ARG TZ='America/Sao_Paulo'

ENV TZ ${TZ}

RUN apk upgrade --update \
    && apk add --no-cache bash \
    && apk add -U tzdata \
    && cp /usr/share/zoneinfo/${TZ} /etc/localtime \
    && apk del tzdata \
    && rm -rf \
    /var/cache/apk/*

RUN npm i -g @nestjs/cli@8.1.4

USER node

WORKDIR /home/node/app

COPY . .