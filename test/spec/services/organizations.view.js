'use strict';

describe('Service: organizations.view', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var organizations.view;
  beforeEach(inject(function (_organizations.view_) {
    organizations.view = _organizations.view_;
  }));

  it('should do something', function () {
    expect(!!organizations.view).toBe(true);
  });

});
