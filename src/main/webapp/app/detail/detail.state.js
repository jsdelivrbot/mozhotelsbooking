(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('detail', {
            parent: 'app-frontOffice',
            url: '/detail',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/detail/detail.html',
                    controller: 'DetailController',
                    controllerAs: 'vm'
                }
            },
            // resolve: {
            //     mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
            //         $translatePartialLoader.addPart('detail');
            //         return $translate.refresh();
            //     }]
            // }
        });
    }
})();
