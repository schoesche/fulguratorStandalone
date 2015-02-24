'use strict';

angular.module('fulgurator', [
    'ngRoute',
    'smart-table',
    'fulgurator.linksModule'
]).

    config(['$routeProvider', function ($routeProvider) {

    }]).

    controller('LinksCtrl', ['$scope', '$filter', '$http', 'linksModule', function (scope, filter, http, linksModule) {

        var loadLinkFile = function() {
            /*
            http.get('links.json')
                .then(function(res){
                        scope.rowCollection = res.data;
            });
            */


            scope.rowCollection =  linksModule.allLinks();



        }

        loadLinkFile();


        scope.predicates = ['name', 'tag', 'link'];
        scope.selectedPredicate = scope.predicates[0];


    }]);



