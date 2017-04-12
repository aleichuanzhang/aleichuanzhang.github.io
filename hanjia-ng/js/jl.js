define(function(require, exports, module) {
    var app = angular.module('myApp', []);
    app.controller('personCtrl',function($http,$scope){
        $http({  
            method:'get',  
            url:'/html/data/data.json',
        }).success(function(data){
            $scope.data = data;
        })
        console.log($scope)
        $scope.isA = true;
        $scope.isB = true;
        $scope.isC = false;
        $scope.name = "公司名称";
        $scope.toggle = function() {
            $scope.isA = false;
            $scope.isC = true;
            alert(111)
        };
    })
    
    module.exports = {
        init:function(cfg){
            var wrap = document.getElementById(cfg.id);
            angular.bootstrap(wrap,['myApp']);
        }
    }

});