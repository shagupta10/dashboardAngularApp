'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.projects = projects;

/*
    $scope.projects = [
      {
        id:"1",
        name: "PDX",
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        data: [300, 500, 100],
        red_days: 1,
        no_people:6
      },
      {
        id:"2",
        name:  "CMS",
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        data: [300, 500, 100],
        red_days: 2,
        no_people:3
      }

  ];*/





  });
