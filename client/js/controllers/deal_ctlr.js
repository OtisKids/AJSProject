app.controller('dealCtlr', ['$scope', '$resource', function ($scope, $resource) {
  var Deal = $resource('/api/deals');

  Deal.query(function (results) {
    $scope.deals = results;
  });

  $scope.deals = []

  $scope.createDeal = function () {
    var Deal = new Deal();
    Deal.name = $scope.dealName;
    Deal.$save(function (result) {
      $scope.deals.push(result);
      $scope.dealName = '';
    });
  }
}]);