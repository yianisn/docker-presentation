FROM node:6.8-slim

COPY . /opt/dockerPresentation
WORKDIR /opt/dockerPresentation

EXPOSE 3000

ENTRYPOINT ["node", "src/server.js"]