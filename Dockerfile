FROM nginx:stable-alpine

RUN adduser -S nonroot -G sudo

USER nonroot

COPY ./dist /usr/share/nginx/html

EXPOSE 5137