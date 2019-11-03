# Xebia_Front_end_test Henri Potier Book Store

## Prerequisites
This project is developped using Node v12.13.0

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application. Type the following command

```bash
npm start
```

The Application will Runs automatically on **http://localhost:8080/**

To run tests. Type the following command

```bash
npm test
```
## Application design

This applications contains two pages represented by two connected components.

#### Components

1. **BookStore** Component : This Component displays a list of books. the customer can add one or many books to his cart. He also can make a free search to filter the list of books.

2. **Cart** Component : This Component Displays the cart's details of the customer(books, price,quantity, subtotal and total). At this steps, the customer can delete one or many books.

#### HTTP client

**fetch** is used to make HTTP Calls.

#### Unit Test

**Jest** library is used to write unit tests.

