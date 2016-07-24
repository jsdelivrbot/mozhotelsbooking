(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('ListController', ListController);

    ListController.$inject = ['$scope'];

    function ListController ($scope) {
        var vm = this;

        $scope.$on('$viewContentLoaded', function() {
            //call it here
            //reloadPage();
             console.log("LOAD LIST CONTROLLER");
             //$state.reload();
        })

        vm.dates = {
       startDate: moment().subtract(1, "days"),
       endDate: moment()
      };

      vm.minDate =  moment().subtract(1, "days");

    }
})();
