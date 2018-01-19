# QuickBuy

Simple eCommerce application implementing difference components of the app in a microservice architecture. 

## Products Service
Technologies used: Node.js, MongoDB and Docker. Used express.js framework with mongoose layer to interact with nosql db

`GET /products` - Returns list of all products

`GET /products/:id` - Return a particular product

`POST /products` - Create a new product, by accepting a payload

`DELETE /products/:id` - Delete a particular product


## Order Service 

`POST /orders` - Create a new order record
