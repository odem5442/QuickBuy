FROM node:8.9.4

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
RUN cd /app && npm install

COPY . /app

EXPOSE 3000
CMD ["npm", "start"]