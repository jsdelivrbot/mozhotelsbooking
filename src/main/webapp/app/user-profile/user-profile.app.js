(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('user-profile', {
            parent: 'app-frontOffice',
            url: '/user-profile',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/user-profile/user-profile.html',
                    controller: 'UserProfileController',
                    controllerAs: 'vm'
                }
            },
            // resolve: {
            //     mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
            //         $translatePartialLoader.addPart('user-profile');
            //         return $translate.refresh();
            //     }]
            // }
        });
    }
})();
