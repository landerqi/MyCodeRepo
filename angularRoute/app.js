/**
 * Created by Administrator on 14-10-14.
 */
var app = angular.module('NewsPub', ['ngRoute']);

function routeConfig($routeProvider){
    $routeProvider.
        when('/', {
            controller: 'ListController',
            templateUrl: 'tpl/list.html'
        }).
        when('/detail/:id', {
            controller: 'DetailController',
            templateUrl: 'tpl/detail.html'
        }).
        when('/edit/:id', {
            controller: 'EditController',
            templateUrl: 'tpl/edit.html'
        }).
        when('/list', {
            controller: 'ListController',
            templateUrl: 'tpl/list.html'
        }).
        when('/add', {
            controller: 'AddController',
            templateUrl: 'tpl/add.html'
        }).
        otherwise({
            redirectTo: '/'
        });
};

app.config(routeConfig);

var newsList = [{
    id : 1,
    title : 'title 1111',
    content : 'content 1111111',
    date : new Date()
},{
    id : 2,
    title : 'title 2222',
    content : 'content 2222222',
    date : new Date()
},{
    id : 3,
    title : 'title 3333',
    content : 'content 3333333',
    date : new Date()
},{
    id : 4,
    title : 'title 4444',
    content : 'content 4444444',
    date : new Date()
},{
    id : 5,
    title : 'title 5555',
    content : 'content 5555555',
    date : new Date()
},{
    id : 6,
    title : 'title 6666',
    content : 'content 6666666',
    date : new Date()
},{
    id : 7,
    title : 'title 7777',
    content : 'content 7777777',
    date : new Date()
}];

app.controller('ListController',function($scope){
    $scope.newsList = newsList;
});

app.controller('DetailController',function($scope, $routeParams){
    $scope.news = newsList[$routeParams.id-1];
});

app.controller('AddController',function($scope,$location){
    $scope.title = '';
    $scope.content = '';
    $scope.add = function(){
        newsList.push({
            id : newsList.length+1,
            title : $scope.title,
            content : $scope.content,
            date : new Date()
        });

        $location.path('list');
    }
});

app.controller('EditController',function($scope, $routeParams, $location){
    $scope.news = newsList[$routeParams.id-1];
    $scope.update = function(){
        newsList[$routeParams.id-1] = $scope.news;

        $location.path('list');
    }
})