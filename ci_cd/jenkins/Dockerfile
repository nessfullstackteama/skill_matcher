FROM jenkins/jenkins:latest

ENV NODE_VERSION 10.3.0

# Switch to root user
#USER root

#RUN apk add --no-cache \
#        libstdc++ \
#    && apk add --no-cache --virtual .build-deps \
#        binutils-gold \
#        g++ \
#        gcc \
#        libgcc \
#        linux-headers \
#        make \
#        python \
#    && cd /tmp \
#    && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION.tar.xz" \
#    && tar -xf "node-v$NODE_VERSION.tar.xz" \
#    && cd "node-v$NODE_VERSION" \
#    && ./configure \
#    && make -j$(getconf _NPROCESSORS_ONLN) \
#    && make install \
#    && apk del .build-deps \
#    && cd .. \
#    && rm -Rf "node-v$NODE_VERSION" \
#    && rm "node-v$NODE_VERSION.tar.xz"

#ENV YARN_VERSION 1.7.0

#RUN curl -fSL -o /usr/local/bin/yarn "https://github.com/yarnpkg/yarn/releases/download/v$YARN_VERSION/yarn-$YARN_VERSION.js" \
#    && chmod +x /usr/local/bin/yarn

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
