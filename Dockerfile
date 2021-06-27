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
ENV DB_ENGINE=mysql
ENV DB_ENGINE_VERSION=8
ENV PRODUCTION_HOST_API=
ENV SPRING_DATASOURCE.URL=jdbc:postgresql://localhost:5432/microsmart
ENV SPRING.DATASOURCE.USERNAME=postgres
ENV SPRING.DATASOURCE.PASSWORD=microsmartapp
ENV SPRING.JPA.HIBERNATE.DDL-AUTO=none
ENV SPRING.JPA.SHOW-SQL=true
ENV SPRING.JPA.HIBERNATE.SHOW-SQL=true
ENV SPRING.JPA.PROPERTIES.HIBERNATE.DIALECT=org.hibernate.dialect.PostgreSQLDialect
ENV SPRING.DATASOURCE.INITIALIZATION-MODE=always
ENV SPRING.DATASOURCE.CONTINUE-ON-ERROR=true
ENV REPORTING.LOCATION=/home/microsmartapp/vicidialui/src/assets/
ENV SPRING.SERVLET.MULTIPART.MAX-FILE-SIZE=30720mb
ENV SPRING.SERVLET.MULTIPART.MAX-REQUEST-SIZE=30720mb
RUN git clone https://github.com/loveyraturi/BpoSystem.git
ENV JWT_SECRET = nTzg7**T$zzn$6Qu
ENV SESSION_SECRET = cQ%zxb7\"-xqQRxH 
WORKDIR /BpoSystem
RUN npm install
ENTRYPOINT ["npm","run","start"]

