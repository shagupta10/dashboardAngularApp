'use strict';

describe('Service: organizations.edit', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var organizations.edit;
  beforeEach(inject(function (_organizations.edit_) {
    organizations.edit = _organizations.edit_;
  }));

  it('should do something', function () {
    expect(!!organizations.edit).toBe(true);
  });

});
