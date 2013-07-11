angular.module('uprose', ['ngSanitize']);

/* **********************************************
     Begin controllers.js
********************************************** */

function ConfCtrl($scope, $http) {
  $http.get('stor/conf.json').success(function(data) {
    $scope.uprose = data;
  });
};

function EntryCtrl($scope, $http) {
  $http.get('stor/entries.json').success(function(data) {
    $scope.entries = data;
    $scope.activeEdit = data[0];
    console.log(JSON.stringify(data[1]));
  });
};



/* **********************************************
     Begin uprose.js
********************************************** */

//@codekit-prepend "app.js", "controllers.js";
console.log('powered by μProse.\nhttps://github.com/BrandonKowalski/uProse');