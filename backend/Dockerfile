FROM openjdk:8-jre
RUN mkdir app
ARG JAR_FILE
ADD /target/${JAR_FILE} /app/reservation-backend-latest.jar
WORKDIR /app
ENTRYPOINT java -jar reservation-backend-latest.jar
