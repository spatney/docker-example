# docker-compose example

A simple example of how to spin up nginx + node + redis in docker. It also shows how you can use docker-compose to create a network so the containers can communicate amongst themselves. 

## Running this in docker

Enlist and run the following docker commands :-

```linux
docker-compose build && docker-compose up -d
```

This will build and run the containers in the background