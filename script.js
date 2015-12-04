var app = angular.module('store', []);

app.controller('StoreController', function() {

	var store = this;

	store.products = [{
    name: 'Downton Abbey BOGOF',
    image: 'wine1.jpg',
    price: 15.59,
    quantity: 0
  }, {
    name: 'Chateau Rouge',
    image: 'wine2.jpg',
    price: 10.99,
    quantity: 0
  }, {
    name: 'Green Hills',
    image: 'wine3.jpg',
    price: 5.49,
    quantity: 0
  }, ];

  this.getTotal = function() {
    total = 0;
    for(i = 0; i < store.products.length; i++) {
      total = total + store.products[i].price * store.products[i].quantity;
    }
    return total;
  }

});
