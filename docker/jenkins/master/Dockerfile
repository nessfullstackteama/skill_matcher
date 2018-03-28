FROM jenkins/jenkins:latest

RUN /usr/local/bin/install-plugins.sh git matrix-auth workflow-aggregator docker-workflow blueocean credentials-binding docker-plugin

#ENV JENKINS_USER admin
#ENV JENKINS_PASS admin

# Skip initial setup
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

COPY executors.groovy /usr/share/jenkins/ref/init.groovy.d/
COPY default-user.groovy /usr/share/jenkins/ref/init.groovy.d/
#COPY jenkins_home /var/jenkins_home
VOLUME /var/jenkins_home
