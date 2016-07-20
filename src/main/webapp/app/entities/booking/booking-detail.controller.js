(function() {
    'use strict';

    angular
        .module('mozhotelsbookingApp')
        .controller('BookingDetailController', BookingDetailController);

    BookingDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Booking', 'InstanceRoomType', 'InstanceFacility', 'Tourist', 'GuestTourist', 'InstanceTur', 'BookingPayment'];

    function BookingDetailController($scope, $rootScope, $stateParams, entity, Booking, InstanceRoomType, InstanceFacility, Tourist, GuestTourist, InstanceTur, BookingPayment) {
        var vm = this;

        vm.booking = entity;

        var unsubscribe = $rootScope.$on('mozhotelsbookingApp:bookingUpdate', function(event, result) {
            vm.booking = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
