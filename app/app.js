'use strict';

// Declare app level module which depends on views, and components
angular.module('linksprivate', [
    'ngRoute',
    'smart-table'
]).

    config(['$routeProvider', function ($routeProvider) {
        //$routeProvider.otherwise({redirectTo: '/view1'});
    }]).

    controller('LinksCtrl', ['$scope', '$filter', '$http', function (scope, filter, http) {
   /*     scope.rowCollection = [
            {name: 'RedNet', tag: 'rednet mobiliar', link: 'https://rednet.mobi.mobicorp.ch/ssp_ds/'},
            {name: 'RedNet1', tag: 'rednet1 mobiliar', link: 'https://rednet.mobi.mobicorp.ch/ssp_ds/'},
            {name: 'RedNet2', tag: 'rednet2 mobiliar', link: 'https://rednet.mobi.mobicorp.ch/ssp_ds/'},
            {name: 'RedNet3', tag: 'rednet3 mobiliar', link: 'https://rednet.mobi.mobicorp.ch/ssp_ds/'}
        ];
*/
        var loadLinkFile = function() {
            http.get('links.json')
                .then(function(res){

                        scope.rowCollection = res.data;
console.log(scope.rowCollection);
                });
        }

        loadLinkFile();


        /*scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];*/
        scope.predicates = ['name', 'tag', 'link'];
        scope.selectedPredicate = scope.predicates[0];


    }]);



