# Jenkins master Docker image
#### Plugins installed at build:
* git 
* matrix-auth 
* workflow-aggregator 
* docker-workflow 
* blueocean 
* credentials-binding 
* docker-plugin
#### Default user/password
The default user/password is cofigurable by `JENKINS_USER` and `JENKINS_PASS` environment variables.
#### Jobs
The `jobs` folder is mapped to `/var/jenkins_home/jobs` image folder, thus the `jobs/<jobname>/config.xml` file is in the source control and the job is available automatically after build.
#### Command to build and run
```
docker-compose up -d
```
#### Deploying Portainer for docker management
```
docker run -d -p 9000:9000 --restart always -v /var/run/docker.sock:/var/run/docker.sock -v /opt/portainer:/data portainer/portainer
```