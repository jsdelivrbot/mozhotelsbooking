(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('InstanceFacilityDialogController', InstanceFacilityDialogController);

    InstanceFacilityDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'InstanceFacility', 'InstanceFacilityType', 'InstanceRoomType', 'InstanceTur', 'Booking'];

    function InstanceFacilityDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, InstanceFacility, InstanceFacilityType, InstanceRoomType, InstanceTur, Booking) {
        var vm = this;

        vm.instanceFacility = entity;
        vm.clear = clear;
        vm.save = save;
        vm.instancefacilitytypes = InstanceFacilityType.query();
        vm.instanceroomtypes = InstanceRoomType.query();
        vm.instanceturs = InstanceTur.query();
        vm.bookings = Booking.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.instanceFacility.id !== null) {
                InstanceFacility.update(vm.instanceFacility, onSaveSuccess, onSaveError);
            } else {
                InstanceFacility.save(vm.instanceFacility, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('mozhotelsbookingApp:instanceFacilityUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
