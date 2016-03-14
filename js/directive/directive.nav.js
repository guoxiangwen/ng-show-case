"use strict";

angular.module('app')
    .directive('appNav', ['NavData',function (NavData) {
        return {
            restrict: 'ECMA',
            scope: {},
            templateUrl: 'html/common/nav.html',
            link: function (scope, iElement, iAttrs) {
                var vm = scope.vm = {};
                vm.data = NavData;
            }
        };
    }])