/**
 *
 * Created by Administrator on 14-10-8.
 */

var myApp = angular.module('myAPP',['ngMessages','ngRoute']);

myApp.controller('firstController',function($scope){
    $scope.name = 'lander jioj joijoij';
    $scope.code = '123123';

    $scope.generateNumber = function(){
        return Math.floor((Math.random()*10) + 1);
    }

})

myApp.filter( 'capitalize', function(){
        return function(input){
            if(input){
                return input[0].toUpperCase() + input.slice(1);
            }
        }
    }
)

myApp.directive('myDirective', function() {
    return {
        restrict: 'A',//EACM
        replace: true,
        scope: {
            myUrl: '@', //绑定策略
            myLinkText: '@' //绑定策略
        },
        template: '<a href="{{myUrl}}"> {{myLinkText}}</a>'
    };
});

myApp.directive('link', function() {
    return {
        restrict: 'EA',
        transclude: true,
        controller:
            function($scope, $element, $transclude, $log) {
                $transclude(function(clone) {
                    var a = angular.element('<a>');
                    a.attr('href', clone.text());
                    a.text(clone.text());
                    $log.info("Created new a tag in link directive");
                    $element.append(a);
                });
            }
    };
});
