(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('InstanceActivityTypeDetailController', InstanceActivityTypeDetailController);

    InstanceActivityTypeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'InstanceActivityType', 'InstanceActivity'];

    function InstanceActivityTypeDetailController($scope, $rootScope, $stateParams, entity, InstanceActivityType, InstanceActivity) {
        var vm = this;

        vm.instanceActivityType = entity;

        var unsubscribe = $rootScope.$on('mozhotelsbookingApp:instanceActivityTypeUpdate', function(event, result) {
            vm.instanceActivityType = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
