class BaseCtrl {
    constructor() {

    }
}

module.exports = angular.module('app.base', []).directive('base', function () {
    return {
        controller: BaseCtrl,
        controllerAs: 'base',
        template: require('../../../html/directives/base.html')
    };
});

