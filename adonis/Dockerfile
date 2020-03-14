FROM node:13.10-alpine

# ENV HOME=/app
# RUN mkdir /app

# COPY package.json $HOME

WORKDIR /usr/src/app
RUN npm i -g @adonisjs/cli && npm install

CMD ["adonis", "serve"]