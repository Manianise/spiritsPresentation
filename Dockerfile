FROM nginx:stable-alpine

RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot

USER nonroot

ENTRYPOINT ["id"]

COPY ./dist /usr/share/nginx/html

EXPOSE 5137