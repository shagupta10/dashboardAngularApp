'use strict';

describe('Service: projects.edit', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var projects.edit;
  beforeEach(inject(function (_projects.edit_) {
    projects.edit = _projects.edit_;
  }));

  it('should do something', function () {
    expect(!!projects.edit).toBe(true);
  });

});
