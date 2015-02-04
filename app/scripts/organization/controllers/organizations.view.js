'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsViewCtrl
 * @description
 * # OrganizationsViewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsViewCtrl',['$scope','$stateParams','organizations','$state' ,function ($scope,$stateParams,organizations,$state) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.orgId=$stateParams.orgId;
    var org=[];


    $scope.organization.forEach(function(item1,index){
      if(item1.id==$scope.orgId){
        org.push(item1);
      }
    })
    console.log(org);
    $scope.org=org;
    $scope.delete=function(delItem){

      organizations.delete(delItem);
      $state.transitionTo('organizations.list');

    }
  }]);
