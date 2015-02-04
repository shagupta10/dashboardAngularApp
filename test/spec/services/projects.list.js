'use strict';

describe('Service: projects.list', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var projects.list;
  beforeEach(inject(function (_projects.list_) {
    projects.list = _projects.list_;
  }));

  it('should do something', function () {
    expect(!!projects.list).toBe(true);
  });

});
