module.exports = function (common, $scope, $timeout) {

    var vm = this;

    activate();

    function activate() {
        common.activateController([], 'home').then(() => {
            // log('success', 'Home', 'Page loaded..');
            $timeout(function(){
                vm.topDirections = ['left', 'up'];
                vm.bottomDirections = ['down', 'right'];

                vm.isOpen = false;

                vm.availableModes = ['md-fling', 'md-scale'];
                vm.selectedMode = 'md-fling';

                vm.availableDirections = ['up', 'down', 'left', 'right'];
                vm.selectedDirection = 'up';
            }, 0);
            
        });
    }

    // $scope.isOpen = false;
    // console.log($scope.isOpen)
}
;
