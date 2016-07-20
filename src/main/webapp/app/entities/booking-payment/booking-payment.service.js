(function() {
    'use strict';
    angular
        .module('mozhotelsbookingApp')
        .factory('BookingPayment', BookingPayment);

    BookingPayment.$inject = ['$resource', 'DateUtils'];

    function BookingPayment ($resource, DateUtils) {
        var resourceUrl =  'api/booking-payments/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.createDate = DateUtils.convertDateTimeFromServer(data.createDate);
                        data.editDate = DateUtils.convertDateTimeFromServer(data.editDate);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
