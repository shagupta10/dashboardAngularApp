'use strict';

describe('Controller: OrganizationseditCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var OrganizationseditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationseditCtrl = $controller('OrganizationseditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
