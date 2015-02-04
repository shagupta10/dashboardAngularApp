'use strict';

describe('Controller: ProjectsViewCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var ProjectsViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsViewCtrl = $controller('ProjectsViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
