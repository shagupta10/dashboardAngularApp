'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsCtrl
 * @description
 * # OrganizationsCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsCtrl',['$scope','organizations', function ($scope,organizations) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$scope.organization=organizations.organizationList;
    $scope.projects = organizations.projectsList;

    $scope.findProjectById=function(ids){
      var project='';
      ids.forEach(function(id,index) {
        $scope.projects.forEach(function (item1, index) {
          if (item1.id == id) {
            project +=  item1.name;
          }
        })
          if(ids.length!=index+1)
          project += ',';
      })
      return  project;
    };

    $scope.findProjectArrayById=function(ids){
      var project=[];
      ids.forEach(function(id,index) {
        $scope.projects.forEach(function (item1, index) {
          if (item1.id == id) {
            project.push(item1.name);
          }
        })

      })

      return  project;
    };
  }]);
