'use strict';

angular.module('app').controller('ctrl.controls-progress', ['$scope',function ($scope) {
    var vm = $scope.vm = {};
    vm.value = 50;
    vm.style = 'progress-bar-info';
    vm.showLabel = true;
}]);