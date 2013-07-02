"use strict";

var app = angular.module("starlight");

app.controller("MainCtrl", function($scope, GitHub) {
  $scope.following = [];
  $scope.stars = [];

  $scope.getFollowing = function() {
    var l = Ladda.create(document.querySelector("#get-following"));
    l.start();

    GitHub.following($scope.user).then(function(results) {
      $scope.following = results;
      l.stop();
    })
  }

  $scope.getStars = function(login) {
    GitHub.stars(login).then(function(results) {
      $scope.stars = results;
    })
  }

  $scope.hasAny = function(modelName) {
    return $scope[modelName].length > 0;
  }
});
