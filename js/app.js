var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap'
]);

app.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
/**
 *@description:app的config阶段,配置url,datas
 */
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'NavData',
    function ($stateProvider, $urlRouterProvider, $locationProvider, NavData) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $.each(NavData, function (i, value) {
            console.log(value);
            $.each(value.items, function (j, val) {
                var state = val.state;
                $stateProvider.state(state, {
                    url: '/' + state,
                    views: {
                        'content': {
                            templateUrl: 'html/' + value.state + '/' + state + '.html',
                            controller: 'ctrl.' + state
                        }
                    }
                })
            })
        });
    }
])