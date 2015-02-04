'use strict';

describe('Controller: ProjectsListCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var ProjectsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsListCtrl = $controller('ProjectsListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
