'use strict';

describe('Service: projects.view', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var projects.view;
  beforeEach(inject(function (_projects.view_) {
    projects.view = _projects.view_;
  }));

  it('should do something', function () {
    expect(!!projects.view).toBe(true);
  });

});
