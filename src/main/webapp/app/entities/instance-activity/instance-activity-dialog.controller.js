(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('InstanceActivityDialogController', InstanceActivityDialogController);

    InstanceActivityDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'InstanceActivity', 'Picture', 'InstanceActivityType', 'InstanceTur'];

    function InstanceActivityDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, InstanceActivity, Picture, InstanceActivityType, InstanceTur) {
        var vm = this;

        vm.instanceActivity = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.pictures = Picture.query();
        vm.instanceactivitytypes = InstanceActivityType.query();
        vm.instanceturs = InstanceTur.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.instanceActivity.id !== null) {
                InstanceActivity.update(vm.instanceActivity, onSaveSuccess, onSaveError);
            } else {
                InstanceActivity.save(vm.instanceActivity, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('mozhotelsbookingApp:instanceActivityUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setPhotoPrincipal = function ($file, instanceActivity) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        instanceActivity.photoPrincipal = base64Data;
                        instanceActivity.photoPrincipalContentType = $file.type;
                    });
                });
            }
        };

    }
})();
