var app = angular.module("myapp", []);
app.controller("controller", function ($scope) {
  $scope.message = "Hello from FirstController";
});

app.directive("footer", function() {
    return {
        templateUrl : 'pages/footer.html'
    };
});