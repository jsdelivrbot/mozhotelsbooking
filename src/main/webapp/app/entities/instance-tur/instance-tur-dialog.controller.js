(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('InstanceTurDialogController', InstanceTurDialogController);

    InstanceTurDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'InstanceTur', 'Picture', 'InstanceContact', 'InstanceFacility', 'InstanceActivity', 'InstanceRoomType', 'InstanceInfo', 'InstanceReview', 'Booking', 'LocalTur', 'InstanceTurType'];

    function InstanceTurDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, InstanceTur, Picture, InstanceContact, InstanceFacility, InstanceActivity, InstanceRoomType, InstanceInfo, InstanceReview, Booking, LocalTur, InstanceTurType) {
        var vm = this;

        vm.instanceTur = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.pictures = Picture.query();
        vm.instancecontacts = InstanceContact.query();
        vm.instancefacilities = InstanceFacility.query();
        vm.instanceactivities = InstanceActivity.query();
        vm.instanceroomtypes = InstanceRoomType.query();
        vm.instanceinfos = InstanceInfo.query();
        vm.instancereviews = InstanceReview.query();
        vm.bookings = Booking.query();
        vm.localturs = LocalTur.query();
        vm.instanceturtypes = InstanceTurType.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.instanceTur.id !== null) {
                InstanceTur.update(vm.instanceTur, onSaveSuccess, onSaveError);
            } else {
                InstanceTur.save(vm.instanceTur, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('mozhotelsbookingApp:instanceTurUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setPhotoPrincipal = function ($file, instanceTur) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        instanceTur.photoPrincipal = base64Data;
                        instanceTur.photoPrincipalContentType = $file.type;
                    });
                });
            }
        };

    }
})();
