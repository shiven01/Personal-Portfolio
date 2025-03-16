# Use Nginx as the base image
FROM nginx:alpine

# Copy website files to Nginx's default serving directory
COPY index.html /usr/share/nginx/html/
COPY education.html /usr/share/nginx/html/
COPY experience.html /usr/share/nginx/html/
COPY projects.html /usr/share/nginx/html/
COPY theBoys.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/
COPY js/ /usr/share/nginx/html/js/

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
