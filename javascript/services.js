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