var mongoose = require('mongoose');

var Product = mongoose.model('Product', {
  name: {
    type: String,
	required: true,
    minlength: 1,
    trim: true
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true
  },
  is_active: {
    type: Boolean,
    default: true
  }
});

module.exports = {Product};
