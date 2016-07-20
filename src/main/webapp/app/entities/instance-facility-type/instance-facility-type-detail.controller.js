(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('InstanceFacilityTypeDetailController', InstanceFacilityTypeDetailController);

    InstanceFacilityTypeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'InstanceFacilityType', 'InstanceFacility'];

    function InstanceFacilityTypeDetailController($scope, $rootScope, $stateParams, entity, InstanceFacilityType, InstanceFacility) {
        var vm = this;

        vm.instanceFacilityType = entity;

        var unsubscribe = $rootScope.$on('mozhotelsbookingApp:instanceFacilityTypeUpdate', function(event, result) {
            vm.instanceFacilityType = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
