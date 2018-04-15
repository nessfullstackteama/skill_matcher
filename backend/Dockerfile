# use a node base image
FROM node:alpine

# set maintainer
LABEL maintainer "stefan.panko@ness.com"

WORKDIR /app
COPY . .
RUN npm install

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1

# tell docker what port to expose
EXPOSE 8000

CMD ["node", "server.js"]