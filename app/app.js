'use strict';

angular.module('fulgurator', [
    'ngRoute',
    'smart-table',
    'fulgurator.linksModule'
]).

    config(['$routeProvider', function ($routeProvider) {

    }]).

    controller('LinksCtrl', ['$scope', '$filter', '$http', function (scope, filter, http) {

        var loadLinkFile = function() {
            /*http.get('links.json')*/

            /*    .then(function(res){*/

                        /*scope.rowCollection = res.data;*/
                    scope.rowCollection = [{
                        "groupname": "Tools",
                        "grouplinks": [
                            {
                                "name": "Lifecycle Management",
                                "tag": "quality center lifecycle management applikation application",
                                "link": "  https://pzone2.mobi.ch/qcbin/start_a.jsp"
                            }
                        ]
                    }];



                /*});*/
        }

        loadLinkFile();


        scope.predicates = ['name', 'tag', 'link'];
        scope.selectedPredicate = scope.predicates[0];


    }]);



