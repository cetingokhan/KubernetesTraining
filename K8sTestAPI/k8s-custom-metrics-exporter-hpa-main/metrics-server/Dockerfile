FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY server.js .
COPY server.cert .
COPY server.key .

EXPOSE 6443
CMD [ "node", "server.js" ]