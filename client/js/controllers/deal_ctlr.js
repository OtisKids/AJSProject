app.controller('dealCtlr', ['$scope', '$resource', function ($scope, $resource) {
  var Deal = $resource('/api/deal');

  Deal.query(function (results) {
    $scope.deals = results;
  });

  $scope.deals = []

  $scope.createDeal = function () {
    var deal = new Deal();
    deal.name = $scope.dealName;
    deal.$save(function (result) {
      $scope.deals.push(result);
      $scope.dealName = '';
    });
  }
}]);