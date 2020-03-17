FROM node:13.10-alpine

#RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY adonis/package.json $HOME/

RUN chown -R app:app $HOME/*

WORKDIR $HOME
RUN npm i -g @adonisjs/cli && npm install
