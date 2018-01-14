var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Product} = require('./models/product');

var app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hellooooo");
});

app.get('/products', (req, res) => { 
  Product.find().then((docs) => {
    res.send(docs);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/products', (req, res) => {
  var product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });

  product.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
})

app.listen(3000, () => { 
  console.log("Yep! Server started on port 3000");
});
