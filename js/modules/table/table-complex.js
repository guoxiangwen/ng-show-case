"use strict";

angular.module('app')
	.controller('ctrl.table-complex', ['$scope','service.table', function ($scope,tableService) {
		var vm = $scope.vm = {};
		vm.list = function(){
			if(window.localStorage.length!=0){
				var data=window.localStorage;
				var result={"content":[]};
				result.content=JSON.parse(data.content);
				vm.items=result.content;
			}else{
				tableService.list().then(function(data){
					vm.items = data.data.content;
				},function(err){
					console.log("err" + err);
				});
			}
		};
		vm.list();
		vm.totalItems = 64;
		vm.currentPage = 1;
		vm.IdMax;//id的最大值；
		vm.getIdMax=function(){
			var IdArray=[];
			for(var i=0;i<vm.items.length;i++){
				IdArray.push(parseInt(vm.items[i].id));
			}
			vm.IdMax=Math.max.apply(null,IdArray);
		}
		vm.pageChanged = function() {
			console.log('Page changed to: ' + $scope.currentPage);
		};
		vm.checkAll = function(checked) {
			angular.forEach(vm.items, function(item) {
				item.$checked = checked;
			});
		};

		vm.updateItem=function(itemId){
			var elements=$("tr#"+itemId).find("td input[readonly='readonly']");
			angular.element(elements).removeAttr("readonly").css({"background":"#fff"});
			//当点击input[readonly]元素所在行之外的元素时，input变为不可编辑，并将编辑后的结果更新到json文件中；
			angular.element(document).bind("click",function(e){
				if($(e.target).closest("#"+itemId).length==0){
					angular.element(elements).attr("readonly","readonly").css({"background":"transparent"});
					vm.update();
				}
			});
		}
		vm.update=function(){
			window.localStorage.setItem("content",JSON.stringify(vm.items));
		}
		vm.addItem=function(){
			vm.getIdMax();
			$scope.addItem={
				id:vm.IdMax+1,
				name:'',
				office:'',
				income:0
			}
		}
		vm.addSubmit=function(){
			var content;
			if(window.localStorage.length!=0){
				content=JSON.parse(window.localStorage.getItem("content"));
				content.push($scope.addItem);
				vm.items=content;
			}else{
				tableService.list().then(function(data){
					content = data.data.content;
					content.push($scope.addItem);
					vm.items=content;
				},function(err){
					console.log("err" + err);
				});
			}
			angular.element("#myModal").modal("hide");
			vm.update();
			vm.list();
		}
		vm.deleteItem=function(itemId){
			var deleteIndex;
			for(var i=0;i<vm.items.length;i++){
				if(vm.items[i].id==itemId){
					deleteIndex=i;
					break;
				}
			}
			vm.items.splice(deleteIndex,1);
			vm.update();
			vm.list();
		}
    }])
    .service('service.table', ['$http', function ($http) {
        return {
            list: function () {
                return $http.get('/data/table.json');
            }
        }
    }])
