'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.runQuery = function(cypher) {
      // props = props | {};
      $http.post('/db/data/transaction/commit', {
          "statements" : [ {
            "statement" : cypher
          } ]
        }).success(function(data) {
        $scope.neo4j = data;
      });
    }

    $scope.neo4j = {};

  });
