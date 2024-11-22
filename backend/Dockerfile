FROM maven:3.9.9-eclipse-temurin-23-alpine
WORKDIR /app
COPY ./backend .
RUN mvn clean package
EXPOSE 8080

ENTRYPOINT ["java","-jar","/app/target/helloWorld-0.0.1-SNAPSHOT.jar"]