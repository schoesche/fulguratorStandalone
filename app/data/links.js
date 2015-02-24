'use strict';


angular.module('fulgurator.linksModule', [])

    .service('linksService', function () {
        this.users = ['John', 'James', 'Jake'];


        this.allLinks = function () {

            var rowCollection = [{
                "groupname": "Tools",
                "grouplinks": [
                    {
                        "name": "Google",
                        "tag": "suchen search machine",
                        "link": "  http://www.google.ch"
                    },
                    {
                        "name": "Google",
                        "tag": "suchen search machine",
                        "link": "  http://www.google.ch"
                    }
                ]
            },
                {
                    "groupname": "Tools2",
                    "grouplinks": [
                        {
                            "name": "Google",
                            "tag": "suchen search machine",
                            "link": "  http://www.google.ch"
                        },
                        {
                            "name": "Google",
                            "tag": "suchen search machine",
                            "link": "  http://www.google.ch"
                        }
                    ]
                }];

            return rowCollection;
        };

    });
