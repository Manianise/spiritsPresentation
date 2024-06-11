FROM nginx:stable-alpine

RUN less /etc/passwd

COPY dist/ /usr/share/nginx/html

EXPOSE 5137