'use strict';

angular.module('fulgurator', [
    'ngRoute',
    'smart-table'
]).

    config(['$routeProvider', function ($routeProvider) {
        //$routeProvider.otherwise({redirectTo: '/view1'});
    }]).

    controller('LinksCtrl', ['$scope', '$filter', '$http', function (scope, filter, http) {

        var loadLinkFile = function() {
            http.get('links.json')
                .then(function(res){

                        scope.rowCollection = res.data;
console.log(scope.rowCollection);
                });
        }

        loadLinkFile();


        scope.predicates = ['name', 'tag', 'link'];
        scope.selectedPredicate = scope.predicates[0];


    }]);



