angular.module('uprose', ['ngSanitize']);

/* **********************************************
     Begin controllers.js
********************************************** */

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

/* **********************************************
     Begin services.js
********************************************** */

angular.module('uprose', []).directive('markdown', function() {
  var md = new Markdown.Converter();
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      var htmlText = md.makeHtml(element.text());
            element.html(htmlText);
      }
  }
});

/* **********************************************
     Begin uprose.js
********************************************** */

//@codekit-prepend "app.js", "controllers.js", "services.js";
console.log('powered by μProse.\nhttps://github.com/BrandonKowalski/uProse');