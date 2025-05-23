# client/Dockerfile
FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN echo "Contents of build directory:" && ls -R /usr/src/app/build # <-- ADD THIS DIAGNOSTIC LINE
EXPOSE 3000
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]