(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('InstanceActivityTypeDialogController', InstanceActivityTypeDialogController);

    InstanceActivityTypeDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'InstanceActivityType', 'InstanceActivity'];

    function InstanceActivityTypeDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, InstanceActivityType, InstanceActivity) {
        var vm = this;

        vm.instanceActivityType = entity;
        vm.clear = clear;
        vm.save = save;
        vm.instanceactivities = InstanceActivity.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.instanceActivityType.id !== null) {
                InstanceActivityType.update(vm.instanceActivityType, onSaveSuccess, onSaveError);
            } else {
                InstanceActivityType.save(vm.instanceActivityType, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('mozhotelsbookingApp:instanceActivityTypeUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
