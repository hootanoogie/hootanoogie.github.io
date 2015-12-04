var app = angular.module('store', []);

app.controller('StoreController', function() {
  this.product = [{
    name: 'Downton Abbey BOGOF',
    image: 'wine1.jpg'
  }, {
    name: 'Chateau Rouge',
    image: 'wine2.jpg'
  }, {
    name: 'Green Hills',
    image: 'wine3.jpg'
  }, ];
});
