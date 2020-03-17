FROM node:13.10-alpine

CMD ["mkdir", "/app/adonis"]

COPY . /app/adonis/

WORKDIR /app/adonis
RUN npm i -g @adonisjs/cli && npm install
RUN ls -la
RUN pwd
CMD ["adonis", "serve"]
