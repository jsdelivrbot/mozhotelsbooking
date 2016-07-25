(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$scope'];

    function DetailController ($scope) {
        var vm = this;

        vm.dates = {
       startDate: moment().subtract(1, "days"),
       endDate: moment()
      };

      vm.minDate =  moment().subtract(1, "days");

      vm.tabData   = [
        {
          heading: 'Summary',
          route:   'detail.summary'
        }
      ];

    }
})();
