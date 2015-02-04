'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.organizations.edit
 * @description
 * # organizations.edit
 * Service in the dashboardApp.
 */
angular.module('organization')
  .service('organizations.edit', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
   var service=[];
    service.newOrg=[];

    return service;

  });
