var app = angular.module('singlePage', ["ngRoute"]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        template : "<main></main>"
    })
    .when("/myskills", {
        template : '<my-skills><my-skills>'
    })
    .when("/projects", {
        template : '<projects></projects>'
    })
    .when("/contact", {
        template : '<contact></contact>'
    });

}]);