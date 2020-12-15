# Reservation System

The Project developed with the objective of simulating a small reservation system.
It contains a [backend](https://github.com/olimarsantos/reservation-system/tree/main/backend) developed in [Java](https://java.com) using the [Spring Boot](https://spring.io/projects/spring-boot) framework and [frontend](https://github.com/olimarsantos/reservation-system/tree/main/frontend) application developed in [Angular](https://angular.io/) and, this project uses the [commits pattern](https://www.conventionalcommits.org/en/v1.0.0/).

## Technologies

| # | For what |
|:-:|:-|
| [Java 8](https://www.java.com/pt_BR/download/faq/java8.xml) | Programming language that the application was built |
| [Node.js](https://www.java.com/pt_BR/download/faq/java8.xml) | Node.js is open-source, cross-platform, and a JavaScript runtime that executes JavaScript code at the backend and frontend level. |
| [TypeScript](https://www.typescriptlang.org/) | TypeScript is a superset of JavaScript developed by Microsoft that adds typing and some other features to the language |
| [Docker](https://www.docker.com) | Container tool that the application is packaged and executed |
| [Lombok](https://projectlombok.org) | Utility tool for generating code in Java with a focus on reducing the boilerplate |
| [Spring Boot](https://spring.io/projects/spring-boot) | Base framework on which the application was built and designed |
| [Spring Fox](http://springfox.github.io/springfox/) | Tool for generating api Rest documentation with Swagger, which works integrated with Spring Boot |
| [PostgreSQL Database ](https://www.postgresql.org/) | PostgreSQL is a powerful, open source object-relational database system |
| [Swagger](https://swagger.io) | Technology used for API Rest documentation  |
| [JUnit 5](https://junit.org/junit5/) | Used to perform backend API testing tests |
| [Jacoco](https://www.eclemma.org/jacoco/) | Tool used for monitoring code coverage of tests |
| [Angular](https://angular.io/) | Angular is an open source and front-end web application platform based on TypeScript |
| [PrimeNG](https://www.primefaces.org/primeng/) |PrimeNG is a collection of rich UI components for Angular. All widgets are open source and free to use under MIT License

## Backend Execution

#### Prerequisites
- [Java 8](https://www.java.com/pt_BR/download/faq/java8.xml) 
- [Maven >= 3.x](https://maven.apache.org/ref/3.6.3/)
- [Docker](https://www.docker.com/)

#### Database Creation
For all options it is necessary to create the database.
```shell
docker pull postgres:11
docker run --name dev-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres:11
# CREATE database reservationdb
docker exec dev-postgres psql -U postgres -c"CREATE DATABASE reservationdb" postgres
```
### Local IDE execution

The application can be run and changed by an IDE.

### Local Build

The application can be run locally via the command line.


#### Execution

```shell
NOTE: At the root of the backend folder, run the following commands

# Build Maven
mvn clean install

# Execution 
NOTE: By default the system is configured to go up on port 3001
java -jar target/reservation-backend-latest.jar
```

#### Swagger

The API documentation can be accessed by Swagger, at the link `http://localhost:3001/swagger-ui.html`.

## Frontend Execution

#### Prerequisites
- [NodeJS](https://nodejs.org/en/) 

### Local IDE execution

The application can be run and changed by an IDE.

### Local Build

The application can be run locally via the command line.

```shell
NOTE: At the root of the frontend folder, run the following commands

# Execution 
NOTE: By default the system is configured to go up on port 4200
npm install
npm start
```
