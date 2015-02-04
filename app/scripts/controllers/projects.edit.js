'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectsEditCtrl
 * @description
 * # ProjectsEditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectsEditCtrl',['$scope','$stateParams', function ($scope,$stateParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.id=$stateParams.id;
    $scope.project=[];
    $scope.projects.forEach(function(item1,index){
      if(item1.id==$scope.id){
        $scope.project.push(item1);
      }

    })
  }]);
