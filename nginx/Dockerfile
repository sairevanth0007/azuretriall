# nginx/Dockerfile
FROM nginx:latest

# Remove default Nginx config
RUN rm /etc/nginx/nginx.conf

# Copy your custom config
COPY nginx.conf /etc/nginx/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]