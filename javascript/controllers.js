function ConfListCtrl($scope, $http) {
  $http.get('stor/conf.json').success(function(data) {
    $scope.uprose = data;
  });
};

function EntryListCtrl($scope, $http) {
  $http.get('stor/entries.json').success(function(data) {
    $scope.entries = data;
  });
};