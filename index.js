var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.products = [{
      name: "Milk",
      quantity: 1,
      price: 2.00
    },
    {
      name: "Bread",
      quantity: 2,
      price: 4.00
    },
    {
      name: "Cheese",
      quantity: 3,
      price: 6.00
    }
  ];

  $scope.quantity = 1;

  $scope.getTotal = function() {
    var total = 0;
    for (var i = 0; i < $scope.products.length; i++) {
      total += $scope.products[i].quantity * $scope.products[i].price;
    }
    return total;
  }

  $scope.addItem = function() {
    $scope.errortext = "";
    if (!$scope.addMe) {
      return;
    }
    if (true /*need a new way to check for duplicates */ ) {
      $scope.products.push({
        name: $scope.addMe,
        quantity: $scope.quantity || 0,
        price: $scope.price || 0
      });
    } else {
      $scope.errortext = "The item is already in your shopping list.";
    }
  }
  $scope.removeItem = function(x) {
    $scope.errortext = "";
    $scope.products.splice(x, 1);
  }
});
