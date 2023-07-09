# Distributed Systems Project for Year 3 Semester 1

## Group Memebers

* IT21064418 - Kariyawasam S B
* IT21050794 - Dasanayake L R S
* IT21052392 - O D Thawalampola
* IT21084522 - Dissanayake A L

## Technologies Used

+ Frontend - Vite.js
+ Backend - Express.js, Node.js
+ Database - MongoDB
+ Containerization - Docker
+ Message Broker - RabbitMQ
+ End Point Testing - Postman

## About the LankaHerbals

Lanka Herbals is an Online e-commerce platform that we created where individual sellers can sell their herbal products for customers via a online platform. We used the Microservices software architecture for this project.There are 8 backend microservices,
+ Authentication Service - This service provides authentication for buyers, sellers, and admin. It will also provide an API for user registration and login.
+ Cart Service - This service provides an API for buyers to add and remove items from the shopping cart.
+ delivery Service - This service provides an API for buyers to select delivery oprions, and for a third-party delivery service to process the request.
+ Item Management Service - This service provides an API for sellers to add and update items.It will also provide an API for admin to delete items.
+ Order Management Service - This service provide an API for buyers to place orders and for admin to confirm orders. It will also provide an Api for tracking the status of orders.
+ Payment Service - This service provides an API for buyers to make payments using credit cards or payment intergration services.
+ Ratings and Reviews Service - This service will provide an API for buyers to select delivery options, and for a third party delivery service to process the request.
+ User Profile Service - This service provides an API for users to update their profiles, including their personal information, address, phone number, etc.

Addditionaly We developed a Gateway service to separate the external public APIs from internal microservice APIs, allowing for microservices to be added and boundaries changed.

### Build

Instructions to build all the apps and packages will be on:
[Build Instructions for Backend Microservices](/backend/readme.md)


![lanka_herbals](https://github.com/IT21064418/Y3.S1.WE.SE.01.01_CSSE_21/assets/87406509/f3be4642-4d7c-4792-8920-49e47510adb6)

