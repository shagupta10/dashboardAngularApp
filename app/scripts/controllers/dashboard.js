'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the dashboardApp
 */
var app = angular.module('dashboardApp');

  app.controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   /* lineChart.labels = ["January", "February", "March", "April", "May", "June", "July"];
    lineChart.series = ['Series A', 'Series B'];
    lineChart.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];*/
    var lineChart={"labels": ["January", "February", "March", "April", "May", "June", "July"],
      "series":['Series A', 'Series B'],
      "data": [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ]
    }

    $scope.lineChart=lineChart;
    var doughnutChart={
      "labels": ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    "data" : [300, 500, 100]
    }
$scope.doughnutChart=doughnutChart;
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    }
  });
/*
app.controller("LineCtrl", function ($scope) {



});
app.controller("DoughnutCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
});*/




