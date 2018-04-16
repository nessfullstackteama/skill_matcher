FROM jenkins/jenkins:latest

RUN /usr/local/bin/install-plugins.sh git matrix-auth workflow-aggregator docker-workflow credentials-binding docker-plugin

#COPY plugins.txt /usr/share/jenkins/plugins.txt
#RUN /usr/local/bin/install-plugins.sh /usr/share/jenkins/plugins.txt

# Skip initial setup
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

COPY init.groovy /usr/share/jenkins/ref/init.groovy.d/

VOLUME /var/jenkins_home

USER root
RUN getent group docker || groupadd docker && gpasswd -a jenkins docker
RUN usermod -aG docker jenkins
