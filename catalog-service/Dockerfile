FROM node:8.9.4

RUN mkdir /catalog
WORKDIR /catalog

COPY package.json /catalog/
RUN cd /catalog && npm install

COPY . /catalog

EXPOSE 3000
CMD ["npm", "start"]
