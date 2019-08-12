//控制器
var guoguanIndex = angular.module('guoguanIndex', []);

guoguanIndex.controller('guoguanIndexCtrl', function ($scope) {
    $scope.title = "";
    $scope.action = "index";
    $scope.item = [
        {
            "name":"请选择你的性别",
            "choose": [{
                "text":"A. 真汉子",
                "score":2
            },
                {
                    "text":"B. 豪爽女",
                    "score":1
                }
            ]
        }
    ];
});

