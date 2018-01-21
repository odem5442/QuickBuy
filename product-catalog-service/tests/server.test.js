var {app} = require('../server');

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('APIs of Products Catalog', () => {
    it.skip('FIX ME: should create new product', (done) => {
      var product_details = {
        name: "chai cup",
        price: "4.00",
        description: "adding from unit test"
      };
      chai
        .request('app')
  	    .post('/products')
  	    .send(product_details)
  	    .end((err, res) => {
  	    	res.should.have.status(200);
  	    	done();
  	    });
    });

});

