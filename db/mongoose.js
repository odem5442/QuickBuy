var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ecomm_db', {useMongoClient: true})

module.exports = {mongoose};
