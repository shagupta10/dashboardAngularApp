'use strict';

describe('Service: organizations.list', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var organizations.list;
  beforeEach(inject(function (_organizations.list_) {
    organizations.list = _organizations.list_;
  }));

  it('should do something', function () {
    expect(!!organizations.list).toBe(true);
  });

});
