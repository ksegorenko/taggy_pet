FROM node:alpine

COPY ./ ./
RUN npm install

RUN npm run build

EXPOSE 5173

ENTRYPOINT ["npm", "run", "start"]