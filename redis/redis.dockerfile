FROM 		redis:latest

MAINTAINER 	Sachin Patney

COPY        redis.conf /etc/redis.conf

EXPOSE      6379

ENTRYPOINT  ["redis-server", "/etc/redis.conf"]