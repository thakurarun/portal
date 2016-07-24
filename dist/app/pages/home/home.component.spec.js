/* tslint:disable:no-unused-variable */
"use strict";
var gitService_1 = require('../../services/gitService');
var testing_1 = require('@angular/core/testing');
var home_component_1 = require('./home.component');
testing_1.describe('Component: Home', function () {
    testing_1.it('should create an instance', testing_1.inject([gitService_1.GitService], function (testService) {
        var component = new home_component_1.HomeComponent(testService);
        testing_1.expect(component).toBeTruthy();
    }));
});
//# sourceMappingURL=home.component.spec.js.map