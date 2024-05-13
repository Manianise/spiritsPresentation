# Use an official Apache HTTP Server image as the base image
FROM httpd:latest


COPY ./dist /usr/local/apache2/htdocs/

# Expose port 80 (the default port used by Apache)
EXPOSE 80
