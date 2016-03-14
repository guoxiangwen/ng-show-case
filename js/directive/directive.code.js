"use strict";

angular.module('app')
    .directive('appCode', [function () {
        return {
            restrict: 'ECMA',
            scope: {},
            templateUrl: 'html/common/code.html',
            link: function (scope, iElement, iAttrs) {
                // var vm = scope.vm = {};
            },
            controller: function ($scope, $http, $state, $rootScope) {
                var vm = $scope.vm = {};
                $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    var state = toState.name;
                    var parentState = state.substring(0, state.indexOf('-'));
                    $http.get('/js/modules/' + parentState + '/' + state + '.js').success(function (data) {
                        vm.js = data;
                    })
                    $http.get('/html/' + parentState + '/' + state + '.html').success(function (data) {
                        vm.html = data;
                    })
                })
            }
        };
    }])