# an introduction docker presentation

## run localy

* install node.js
* run `node src/server.js`

## run in a docker container

* install docker
* run `docker pull yianisn/docker-presentation:1.0.0`
* run `docker run --detach --name docker-presentation --publish 3000:3000 yianisn/docker-presentation:1.0.0`
* point your browser to http://localhost:3000

## create the docker image

* install docker
* run `docker build . --tag yianisn/docker-presentation:1.0.0`
