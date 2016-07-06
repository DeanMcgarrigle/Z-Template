module.exports = function (common) {

    var vm = this;
   
    activate();

    function activate() {
        common.activateController([], 'home').then(() => {
            // log('success', 'Home', 'Page loaded..');
        });
    }
}
;
