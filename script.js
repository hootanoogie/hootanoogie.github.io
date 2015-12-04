var app = angular.module('store', []);

app.controller('StoreController', ['$http', function($http) {

  var store = this;
  store.products = [];

  $http.get('products.json').success(
    function(data) {
      store.products = data;
    }
  );

  this.getTotal = function() {
    total = 0;
    for (i = 0; i < store.products.length; i++) {
      total = total + store.products[i].price * store.products[i].quantity;
    }
    return total;
  }

}]);
