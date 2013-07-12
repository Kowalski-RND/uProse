function ConfCtrl($scope, $http) {
  var rand = new Date().getTime();
  $http.get('stor/conf.json?' + rand).success(function(data) {
    $scope.uprose = data;
  });
};

function EntryCtrl($scope, $http) {
  var rand = new Date().getTime();
  $http.get('stor/entries.json?' + rand).success(function(data) {
    $scope.entries = data;
  	$scope.showView = function(entry, index) {
  		$scope.focusEntry = entry;
      $scope.focusIndex = index;
  	};
    $scope.saveView = function(entry, index) {
      $scope.entries[index] = entry;
    }
  });
};