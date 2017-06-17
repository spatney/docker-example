FROM nginx:latest

MAINTAINER Sachin Patney

COPY app /var/www/public
COPY ./nginx.development.conf /etc/nginx/nginx.conf

VOLUME ["/var/www/public"]

EXPOSE 80

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]