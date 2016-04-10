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
                //var textArr = $scope.noticeText.split(" ");

                $scope.result = legastenize($scope.noticeText);
            }
        }
    }]);

function legastenize(noticeText) {

    var textArray = noticeText.split(" ");
    console.log(textArray);
    var leggoArray = [];
    for (var i = 0; i < textArray.length; i++) {
        leggoArray [i] = Math.random();
    }

    var leggoDegree = 0.5;


    for (var j = 0; i < textArray.length; i++) {
        console.log(textArray[i]);
        textArray[i] = ing (textArray[i]);
        textArray[i] = dots (textArray[i]);
        textArray[i] = typo (textArray[i]);
    }


    return textArray;
}

function dots(word) {

    if (word.contains(".")) {
        word.replace(".", ":");
    }
    return word;
}


function ing(word) {
    if (word.endsWith("ing.")) {
        word.replace("ing.", "");
    }
    else if (word.endsWith("ing")) {
        word.replace("ing", "");
    }
    return word;
}

function typo(word) {

    return word;
}