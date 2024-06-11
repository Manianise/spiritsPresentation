FROM nginx:stable-alpine

RUN addgroup -g nonroot && \
adduser -S nonroot -G nonroot

USER nonroot

COPY dist/ /usr/share/nginx/html

EXPOSE 5137