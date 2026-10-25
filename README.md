# CS 465 Full Stack Development – Travlr Getaways

## Overview
The Travlr Getaways app is a full stack web app built with MEAN Stack (MongoDB, Express, Angular, and Node.js). The app consists of a website where customers can access their travel data, and another SPA where trip details can be managed.


## Architecture
During this project, I have dealt with two frontend techniques. The client-side website is developed using Express, HTML, JavaScript, and Handlebars templates, rendering the web pages via the server. On the other hand, the admin application is created by Angular to develop a single-page application that has reusable components. The Angular application has an advantage over the Express website because there is no need to reload the entire page to update it.

MongoDB was chosen for the backend due to its nature as a NoSQL database where information is stored in flexible document format. This was convenient for storing travel information as well as users’ information, while working together with Node.js and Express through Mongoose.

## Functionality
JSON stands for JavaScript Object Notation; it is a lightweight data exchange format whereas JavaScript is a programming language that is used to build application functionality. JSON provides an ability to transfer data between frontend and backend as it allows the Angular application to access and retrieve data through the Express API. Through this, it becomes possible to get, add, and edit trips' data stored in the database, MongoDB.

As a result of development, I have made refactoring by separating routes, controllers, and models as well as making reusable Angular components from the repeated interfaces. For instance, trip card component makes it possible to present the data about the trip consistently in the admin app.

## Testing
Tests of the application were carried out by sending the requests using Postman to the API in order to ensure that the correct data is returned or changed. GET requests get data from the API, POST requests create a record while PUT requests change the existing record. Various endpoints connect the frontend to various functions performed in the backend and database operations.

The implementation of authentication made it necessary to carry out additional testing. The application uses JWT authentication for both admins and securing some of the API endpoints. Among the tests conducted were ensuring that the provided credentials are correct, that the received token is correct and that some requests must be authenticated. Some challenges I faced include lack of dependencies, wrong routes and issues with database connections.

## Reflection
In addition to understanding the components of a full stack application, this course has taught me how all of the parts work together in order to make an application function properly. While I have some experience with programming and web development before this project, completing Travlr was able to give me some first-hand experience of connecting frontend, backend API, and database to create an application.

I also gained experience with Angular, Express, APIs, and particually  authentication, and debugging across multiple parts of a project. I've had the most previous experence with MongoDB but fealt I learned move with using Postman in conjunction with it. The knowledge that I obtained during the course will be useful for me in future since I am planning to pursue a career in software development.
