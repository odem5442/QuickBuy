# QuickBuy

Simple eCommerce application implementing difference components of the app in a microservice architecture. 

## Products Service
Product Catalog service is implemented in Node.js (Express.js) and MongoDB. 

`GET /products` - Returns list of all products

`GET /products/:id` - Return a particular product

`POST /products` - Create a new product, by accepting a payload

`DELETE /products/:id` - Delete a particular product


## Order Service 

`POST /orders` - Create a new order record
