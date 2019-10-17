FROM node:12.4
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["npm", "run", "start"]