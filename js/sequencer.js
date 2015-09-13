app.controller('SeqCtrl', function($scope, $http) {

    //init data
    $scope.steps = {1:{name: "1", led: "X"}, 2:{name: "2", led: ""}, 3:{name: "3", led: ""}, 4:{name: "4", led: ""}};


    //$scope.clock();

    $scope.clock = function () {
        setInterval($scope.nextStep, 500);
    };

    var curStep = 1;
    var lastStep = null;

    $scope.nextStep = function () {
        if (lastStep != null) {
            $scope.steps[lastStep].led = "";
        }

        $scope.steps[curStep].led = "x";
        lastStep = curStep;

        console.log(curStep);
        console.log(lastStep);

        curStep ++;
        if(curStep > 4) {
            curStep = 1;
        }
    };

});











