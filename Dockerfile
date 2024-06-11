FROM nginx:stable-alpine

# Set environment variables for user and group
ENV USERNAME=nonroot
ENV GROUPNAME=nonrootgroup

# Install necessary packages
RUN apk update && apk add --no-cache \
    shadow \
    bash

# Create the group
RUN addgroup -S "$GROUPNAME"

# Create the user and add to the group
RUN adduser -S -G "$GROUPNAME" "$USERNAME"

USER $USERNAME

COPY dist/ /usr/share/nginx/html

EXPOSE 5137