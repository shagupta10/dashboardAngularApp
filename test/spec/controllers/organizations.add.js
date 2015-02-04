'use strict';

describe('Controller: OrganizationsAddCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var OrganizationsAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationsAddCtrl = $controller('OrganizationsAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
