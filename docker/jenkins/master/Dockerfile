FROM jenkins/jenkins:latest

RUN /usr/local/bin/install-plugins.sh git matrix-auth workflow-aggregator docker-workflow credentials-binding docker-plugin

# Skip initial setup
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

COPY init.groovy /usr/share/jenkins/ref/init.groovy.d/

VOLUME /var/jenkins_home
