(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('InstanceTurDetailController', InstanceTurDetailController);

    InstanceTurDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'InstanceTur', 'Picture', 'InstanceContact', 'InstanceFacility', 'InstanceActivity', 'InstanceRoomType', 'InstanceInfo', 'InstanceReview', 'Booking', 'LocalTur', 'InstanceTurType'];

    function InstanceTurDetailController($scope, $rootScope, $stateParams, DataUtils, entity, InstanceTur, Picture, InstanceContact, InstanceFacility, InstanceActivity, InstanceRoomType, InstanceInfo, InstanceReview, Booking, LocalTur, InstanceTurType) {
        var vm = this;

        vm.instanceTur = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('mozhotelsbookingApp:instanceTurUpdate', function(event, result) {
            vm.instanceTur = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
