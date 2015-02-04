'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectsViewCtrl
 * @description
 * # ProjectsViewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectsViewCtrl',['$scope','$stateParams',function ($scope,$stateParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.id = $stateParams.id;

 var project=[];


    $scope.projects.forEach(function(item1,index){
      if(item1.id==$scope.id){
        project.push(item1);
      }
    })
$scope.project=project;
  }]);
