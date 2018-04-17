FROM mysql/mysql-server:latest

ENV MYSQL_ROOT_PASSWORD=N355Full5t4ck
#ENV MYSQL_DATABASE=skill_matcher
ENV MYSQL_USER=skillmatcher
ENV MYSQL_PASSWORD=skillmatcher

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306
