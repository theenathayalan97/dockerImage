FROM node:20
WORKDIR /app
COPY package*.json app.js ./
RUN npm install
EXPOSE 8004
CMD ["node","app.js"]