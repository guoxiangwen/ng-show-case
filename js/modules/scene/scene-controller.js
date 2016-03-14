"use strict";

angular.module('app')
    .controller('ctrl.scene-controller', ['$scope', function ($scope) {
        var vm = $scope.vm = {};
        vm.booksCategory = [
            'java', 'javascript'
        ];
        vm.selection = 'javascript';
        vm.bookList = {
            "java": [
                {
                    id: "01",
                    name: 'Java基础教程',
                    price: 49,
                    author: '张孝祥'
                },
                {
                    id: "02",
                    name: 'Java编程思想',
                    price: 79,
                    author: '埃克尔'
                }
            ],
            "javascript": [
                {
                    id: "03",
                    name: 'javascript语言精粹',
                    price: 89,
                    author: '周爱明'
                },
                {
                    id: "04",
                    name: 'javascript权威指南',
                    price: 99,
                    author: '老外'
                }
            ]
        };
        vm.books = vm.bookList[vm.selection];
        vm.changeBook = function () {
            vm.books = vm.bookList[vm.selection];
        }
    }])
    .controller('ctrl.scene-controller-parent', ['$scope', function ($scope) {
        $scope.$on("Ctr1NameChange", function (event, msg) {
            console.log("parent", msg);
            $scope.name_par = msg
            $scope.$broadcast("Ctr1NameChangeFromParrent", msg);
        })
    }])
    .controller('ctrl.scene-controller-childOne', ['$scope', function ($scope) {
        $scope.change = function (name) {
            console.log("子级1name", name);
            $scope.$emit("Ctr1NameChange", name);
        }
    }])
    .controller('ctrl.scene-controller-childTwo', ['$scope', function ($scope) {
        $scope.$on('Ctr1NameChangeFromParrent', function (event, msg) {
            console.log("childCtrl2", msg);
            $scope.name_ch2 = msg;
        });
    }])
