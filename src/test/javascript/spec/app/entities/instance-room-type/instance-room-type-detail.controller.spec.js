'use strict';

describe('Controller Tests', function() {

    describe('InstanceRoomType Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockInstanceRoomType, MockPicture, MockInstanceFacility, MockInstanceTur, MockBooking;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockInstanceRoomType = jasmine.createSpy('MockInstanceRoomType');
            MockPicture = jasmine.createSpy('MockPicture');
            MockInstanceFacility = jasmine.createSpy('MockInstanceFacility');
            MockInstanceTur = jasmine.createSpy('MockInstanceTur');
            MockBooking = jasmine.createSpy('MockBooking');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'InstanceRoomType': MockInstanceRoomType,
                'Picture': MockPicture,
                'InstanceFacility': MockInstanceFacility,
                'InstanceTur': MockInstanceTur,
                'Booking': MockBooking
            };
            createController = function() {
                $injector.get('$controller')("InstanceRoomTypeDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'mozhotelsbookingApp:instanceRoomTypeUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
