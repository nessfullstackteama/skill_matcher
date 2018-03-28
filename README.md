# Docker
cd to the folder containing the `docker-compose.yml` file. In Windows environment, the folder must contain the `.env` file with variable `COMPOSE_CONVERT_WINDOWS_PATHS=1`.
#### Command to run all containers
```
docker-compose up -d
```
#### Command to run a single container (Jenkins)
```
docker-compose up -d jenkins
```