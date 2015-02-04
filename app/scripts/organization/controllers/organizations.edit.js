'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsEditCtrl
 * @description
 * # OrganizationsEditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsEditCtrl',['$scope','$stateParams','organizations','$state', function ($scope,$stateParams,organizations,$state) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.orgId=$stateParams.orgId;
    var org=[];


    $scope.organization.forEach(function(item1,index){
      if(item1.id==$scope.orgId){
        org=item1;
      }
    })
    $scope.item=org;
    $scope.options =organizations.projectsList;
    $scope.selectedOption = $scope.options[1];



    $scope.add = function(){

      var newOrg=organizations.findOrgById($scope.item.id);

      newOrg.name=$scope.item.name;
      newOrg.owner=$scope.item.owner;
      newOrg.numOfPeople=$scope.item.numOfPeople;
      newOrg.billableHeadCount=$scope.item.billableHeadCount;
      newOrg.benchCount=$scope.item.benchCount;
      var newProjectList=[];
      newProjectList.push($scope.selectedOption.id);
      newOrg.projects=newProjectList;


      organizations.save(newOrg);
     // console.log(organizations.organizationList);

      $state.transitionTo('organizations.view',{"orgId":newOrg.id})



    }
  }]);
