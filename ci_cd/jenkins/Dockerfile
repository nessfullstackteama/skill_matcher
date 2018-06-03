FROM jenkins/jenkins:latest

# Switch to root user
USER root
RUN apt-get update && apt-get install -y apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN curl -sL https://deb.nodesource.com/setup_10.x \
    && apt-get install -y nodejs build-essential \
    && apt-get install -y --no-install-recommends yarn

#RUN /usr/local/bin/install-plugins.sh git matrix-auth workflow-aggregator docker-workflow credentials-binding docker-plugin

COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN /usr/local/bin/install-plugins.sh < /usr/share/jenkins/ref/plugins.txt

# Skip initial setup
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

COPY init.groovy /usr/share/jenkins/ref/init.groovy.d/

VOLUME /var/jenkins_home

RUN getent group docker || groupadd docker && gpasswd -a jenkins docker
RUN usermod -aG docker jenkins
