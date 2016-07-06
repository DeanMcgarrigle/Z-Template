require('./vendor.js')();

const appModule = require('../index');

angular.element(document).ready(function(){
    angular.bootstrap(document, [appModule.name],  {

    });
});