(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('list', {
            parent: 'app',
            url: '/list',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/list/list.html',
                    controller: 'ListController',
                    controllerAs: 'vm'
                }
            },
            // resolve: {
            //     mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
            //         $translatePartialLoader.addPart('list');
            //         return $translate.refresh();
            //     }]
            // }
        });
    }
})();
