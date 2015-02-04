'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsAddCtrl
 * @description
 * # OrganizationsAddCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsAddCtrl',['$scope','organizations','$state', function ($scope,organizations,$state) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.options =organizations.projectsList;
    $scope.selectedOption = $scope.options[1];


    $scope.example1data = [ {id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"}];


    $scope.add = function(){

    //  var newOrg=organizations.findOrgById(1);

      var newOrg={};
      $scope.newOrg=newOrg;


      newOrg.name=$scope.form.orgName.$modelValue;
      newOrg.owner=$scope.form.orgOwner.$modelValue;
      newOrg.numOfPeople=$scope.form.orgPeople.$modelValue;
      newOrg.billableHeadCount=$scope.form.orgBillableHeadCount.$modelValue;
      newOrg.benchCount=$scope.form.orgBenchCount.$modelValue;
      var newProjectList=[];
      newProjectList.push($scope.selectedOption.id);
      newOrg.projects=newProjectList;

      organizations.save(newOrg);
      $state.transitionTo('organizations.list');
     // console.log(organizations.organizationList);

    }
  }]);
