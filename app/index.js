module.exports = angular.module('app', [

    require('angular-ui-router'),

    require('./js/common/common').name,
    require('./js/services/router').name,
    require('./js/directives/base/base').name
]);

