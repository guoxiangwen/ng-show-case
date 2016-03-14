"use strict";

angular.module('app')
	.controller('ctrl.form-basicCheck', ['$scope','$state', function ($scope,$state) {
		// console.log($state.current.url);
		var vm = $scope.vm = {
			show_error:false,
			show_type:"1" //默认输入框样式错误提示 value = 1
		};
		//修改error show type
		vm.show_type_change = function(){
			alert(vm.show_type);
		}
	}])