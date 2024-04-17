FROM node:20
RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8001

CMD ["node","app.js"]

# FROM node:16-alpine

# WORKDIR /app
# COPY package*.json app.js ./
# RUN npm install
# EXPOSE 8004

# CMD ["node", "index.js"]
