'use strict';

describe('Controller: ProjectsEditCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var ProjectsEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsEditCtrl = $controller('ProjectsEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
