FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf  # Must point to your updated config
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]