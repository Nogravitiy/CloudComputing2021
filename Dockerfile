FROM node:12-alpine 
WORKDIR /app
COPY . .
RUN yarn install --production
EXPOSE 3000
CMD ["node", "server.js"]