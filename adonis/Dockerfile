FROM node:13.10-alpine

COPY . /app/adonis/

WORKDIR /app/adonis
RUN npm i -g @adonisjs/cli && npm install
RUN ls -la
RUN pwd
RUN mv .env.docker .env
CMD ["adonis","key:generate"]
CMD ["adonis","serve","-g"]
