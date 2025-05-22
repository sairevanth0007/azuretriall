FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
RUN npm install -g serve # This is good
CMD ["serve", "-s", "build", "-l", "3000"] # This is the critical part