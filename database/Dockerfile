FROM mysql/mysql-server:5.7
# not latest (8+)
# to avoid error: Authentication plugin 'caching_sha2_password' cannot be loaded

ENV MYSQL_ROOT_PASSWORD=N355Full5t4ck
COPY schema.sql /docker-entrypoint-initdb.d/
EXPOSE 3306
