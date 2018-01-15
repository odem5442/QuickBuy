var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Product} = require('./models/product');
var {ObjectID} = require('mongodb');

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

app.get('/products/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Product.find({_id: id}).then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send();
  })
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
});

app.delete('/products/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) { 
    return res.status(404).send();
  }

  var product = Product.deleteOne({_id: id}).then((doc) => {
    return res.send(doc);
  }, (e) => { 
    return res.status(400).send(e);
  })
});

app.listen(3000, () => { 
  console.log("Yep! Server started on port 3000");
});

module.exports = {app};
