(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('ProvinceController', ProvinceController);

    ProvinceController.$inject = ['$scope', '$state', 'DataUtils', 'Province', 'ProvinceSearch'];

    function ProvinceController ($scope, $state, DataUtils, Province, ProvinceSearch) {
        var vm = this;
        
        vm.provinces = [];
        vm.openFile = DataUtils.openFile;
        vm.byteSize = DataUtils.byteSize;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Province.query(function(result) {
                vm.provinces = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProvinceSearch.query({query: vm.searchQuery}, function(result) {
                vm.provinces = result;
            });
        }    }
})();
