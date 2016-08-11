(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$scope'];

    function DetailController ($scope) {
        var vm = this;

        vm.dates = {
       startDate: moment(),
       endDate: moment().add(1, "days")
      };

      vm.minDate =  moment();

      vm.tabData   = [
        {
          heading: 'Summary',
          route:   'detail.summary'
        }
      ];

    }
})();
