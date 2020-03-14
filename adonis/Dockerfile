FROM node:13.10-alpine

ENV HOME=/app
RUN mkdir /app

COPY /adonis/package.json $HOME

WORKDIR $HOME
RUN npm i -g @adonisjs/cli && npm install

CMD ["adonis", "serve"]