From node:14
WORKDIR /Users/tharuna/todoapp/TodoDesk
COPY package*.json ./
Run npm install
COPY . .
WORKDIR /Users/tharuna/todoapp/TodoDesk
EXPOSE 3000
CMD ["node", "app.js"]