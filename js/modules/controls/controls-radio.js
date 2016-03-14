'use strict';

angular.module('app').controller('ctrl.controls-radio',['$scope', function ($scope) {
    var vm = $scope.vm = {};
    vm.values = [
        {code: 'a', age: 30},
        {code: 'b', age: 50},
        {code: 'c', age: 44}
    ];
    vm.selection = vm.values[1];
}]);