'use strict';

angular.module('myApp.legastenizer', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/legastenizer', {
            templateUrl: 'legastenizer/legastenizer.html',
            controller: 'legastenizerCtrl'
        });
    }])

    .controller('legastenizerCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {


        //$scope.result = " ";
        $scope.convertText = function () {

            if ($scope.noticeText != undefined) {
                var leggoREST = $http.get('http://api.dennis-js-schwarz.de/legastenizer/create?input=' + $scope.noticeText + '&allowStoreInDB=true');
                leggoREST.then(function (result) {
                    $scope.result = result.data.output;
                });

            }

        };

        $scope.cengizTalk = "hollo i ham cengiz ok \n me langage theacher";
        $scope.cengizUrl = "images/cengiz.jpg";

        $scope.toggleCengiz = function () {

            if ($scope.noticeText === $scope.result) {

                $scope.cengizUrl = 'images/cengizpoint.jpg';
                $scope.cengizTalk = "your is goode";
                $timeout(function () {
                    $scope.cengizUrl = 'images/cengiz.jpg';
                    $scope.cengizTalk = "trier againg";
                }, 3000);

            } else {
                $scope.cengizUrl = 'images/cengiznew.jpg';
                $scope.cengizTalk = "nono, is no correcte!!";
                $timeout(function () {
                    $scope.cengizUrl = 'images/cengiz.jpg';
                    $scope.cengizTalk = "trier againg";
                }, 3000);
            }
        };

        var historyREST = $http.get('http://api.dennis-js-schwarz.de/legastenizer/history?limit=5');
        $scope.history =
        historyREST.then(function (result) {
           $scope.history = result.data.results;
        });

        $scope.cengizDream = function (){
            $scope.cengizUrl = "images/cengizverybad.jpg";

            $timeout(function () {
                $scope.cengizUrl = 'images/cengiznew.jpg';
                $scope.cengizTalk = "no click me!";
            }, 1000);
        }


    }]);
