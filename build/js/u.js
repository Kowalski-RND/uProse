angular.module('uprose', ['ngSanitize']);

/* **********************************************
     Begin controllers.js
********************************************** */

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

/* **********************************************
     Begin uprose.js
********************************************** */

//@codekit-prepend "app.js", "controllers.js";
console.log('powered by μProse.\nhttps://github.com/BrandonKowalski/uProse');