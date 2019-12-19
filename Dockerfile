# ############################################################
# #Dockerfile to build custom Ubuntu image
# # Use this as base image
# # Tag renovitetechnologies/reno-secure-ui-features-backend-sandbox:v1
# ############################################################

FROM ubuntu
RUN apt-get update 
RUN apt-get -y install git bash curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | -E bash -
RUN apt-get -y install nodejs

RUN nodejs --version
RUN npm -v
ENV DB_ENGINE=mysql
ENV DB_ENGINE_VERSION=8
ENV PRODUCTION_HOST_API=
ENV JWT_SECRET = nTzg7**T$zzn$6Qu
ENV SESSION_SECRET = cQ%zxb7\"-xqQRxH 
RUN git clone https://github.com/loveyraturi/vicidialui.git
WORKDIR /vicidialui
RUN npm install
ENTRYPOINT ["npm","run","start"]

