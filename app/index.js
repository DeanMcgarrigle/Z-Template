module.exports = angular.module('app', [

    require('angular-ui-router'),
    require('angular-material'),
    require('angular-animate'),
    require('angular-aria'),
    require('./js/common/common').name,
    require('./js/services/router').name,
    require('./js/directives/base/base').name
])
;

