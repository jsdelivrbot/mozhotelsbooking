(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('ProvinceDetailController', ProvinceDetailController);

    ProvinceDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'Province', 'LocalTur', 'Picture', 'Region'];

    function ProvinceDetailController($scope, $rootScope, $stateParams, DataUtils, entity, Province, LocalTur, Picture, Region) {
        var vm = this;

        vm.province = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('mozhotelsbookingApp:provinceUpdate', function(event, result) {
            vm.province = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
