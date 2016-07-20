(function() {
    'use strict';
    angular
        .module('mozhotelsbookingApp')
        .factory('InstanceTur', InstanceTur);

    InstanceTur.$inject = ['$resource'];

    function InstanceTur ($resource) {
        var resourceUrl =  'api/instance-turs/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
