'use strict';

angular.module('fulgurator', [
    'ngRoute',
    'smart-table'
]).

    config(['$routeProvider', function ($routeProvider) {

    }]).

    controller('LinksCtrl', ['$scope', '$filter', '$http', function (scope, filter, http) {

        var loadLinkFile = function() {
            http.get('links.json')
                .then(function(res){

                        scope.rowCollection = res.data;

                });
        }

        loadLinkFile();


        scope.predicates = ['name', 'tag', 'link'];
        scope.selectedPredicate = scope.predicates[0];


    }]);



