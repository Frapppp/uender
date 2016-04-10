'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {

        $scope.convertText = function () {

            if ($scope.noticeText != undefined) {
                $scope.result = legastenize($scope.noticeText);
            }
        }
    }]);

function legastenize(noticeText) {

    var textArray = noticeText.split(" ");

    var leggoArray = [];
    for (var i = 0; i < textArray.length; i++) {
        leggoArray [i] = Math.random();
    }

    var leggoDegree = 0.5;


    for (var j = 0; j < textArray.length; j++) {
        textArray[j] = ing (textArray[j]);
        textArray[j] = dots (textArray[j]);
        textArray[j] = typo (textArray[j]);
    }


    return textArray;
}

function dots(word) {

    word = word.replace(".", ":");

    return word;
}


function ing(word) {
    if (word.endsWith("ing")) {
        word = word.replace("ing", "");
    }


    return word;

}

function typo(word) {

    return word;
}