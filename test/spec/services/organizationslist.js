'use strict';

describe('Service: organizationslist', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var organizationslist;
  beforeEach(inject(function (_organizationslist_) {
    organizationslist = _organizationslist_;
  }));

  it('should do something', function () {
    expect(!!organizationslist).toBe(true);
  });

});
