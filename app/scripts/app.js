'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'chart.js',
    'organization'

  ])
.config(function($stateProvider) {
    $stateProvider
      .state("dashboard", {
        templateUrl: "views/dashboard.html",
        controller: "DashboardCtrl",
        url: "/dashboard"
      })
     .state("organizations", {
        templateUrl: "../views/organization/organizations.html",
        controller: "OrganizationsCtrl",
        url: "/organizations"
      })
      .state("organizations.add", {
        templateUrl: "../views/organization/organizations.add.html",
        controller: "OrganizationsAddCtrl",
        url: "/add"
      })
      .state("organizations.list", {
        templateUrl: "../views/organization/organizations.list.html",
        controller: "OrganizationsListCtrl",
        url: "/list"
      })
      .state("organizations.view", {
        templateUrl: "../views/organization/organizations.view.html",
        controller: "OrganizationsViewCtrl",
        url: "/view/:orgId"
      })
      .state("organizations.edit", {
        templateUrl: "../views/organization/organizations.edit.html",
        controller: "OrganizationsEditCtrl",
        url: "/edit/:orgId"
      })
      .state("projects", {
        templateUrl: "views/projects.html",
        controller: "ProjectsCtrl",
        url: "/projects"
      })
      .state("projects.list", {
        templateUrl: "views/projects.list.html",
        controller: "ProjectsListCtrl",
        url: "/list"
      })
      .state("projects.edit", {
        templateUrl: "views/projects.edit.html",
        controller: "ProjectsEditCtrl",
        url: "/edit/:id"
      })
      .state("projects.view", {
        templateUrl: "views/projects.view.html",
        controller: "ProjectsViewCtrl",
        url: "/view/:id"
      })
      .state("employees", {
        templateUrl: "views/employees.html",
        controller: "EmployeesCtrl",
        url: "/employees"
      });





  })
  .run(function($state){
    $state.go('dashboard');
  });


