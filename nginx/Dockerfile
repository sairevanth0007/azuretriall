# nginx/Dockerfile (This builds the image for ACI)
FROM nginx:latest
RUN rm -f /etc/nginx/nginx.conf # Use -f to avoid error if not exists (though it should)
COPY nginx.conf /etc/nginx/nginx.conf # This now copies the ACI-specific config
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]