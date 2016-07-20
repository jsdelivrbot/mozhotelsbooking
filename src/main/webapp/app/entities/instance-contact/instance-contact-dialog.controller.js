(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('InstanceContactDialogController', InstanceContactDialogController);

    InstanceContactDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'InstanceContact', 'InstanceTur'];

    function InstanceContactDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, InstanceContact, InstanceTur) {
        var vm = this;

        vm.instanceContact = entity;
        vm.clear = clear;
        vm.save = save;
        vm.instanceturs = InstanceTur.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.instanceContact.id !== null) {
                InstanceContact.update(vm.instanceContact, onSaveSuccess, onSaveError);
            } else {
                InstanceContact.save(vm.instanceContact, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('mozhotelsbookingApp:instanceContactUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
