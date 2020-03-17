FROM node:13.10-alpine

CMD ["mkdir", "/app/adonis"]

COPY adonis/* /app/adonis/

WORKDIR /app/adonis
RUN npm i -g @adonisjs/cli && npm install
CMD ["ls"]
CMD ["pwd"]
CMD ["adonis", "serve"]
