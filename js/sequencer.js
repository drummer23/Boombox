app.controller('SeqCtrl', function($scope, $interval) {

    //init data
    $scope.step = {1:{name: "1", led: "X"}, 2:{name: "2", led: ""}, 3:{name: "3", led: ""}, 4:{name: "4", led: ""}};


    var curStep = 1;
    var lastStep = null;
    var stop;

    $scope.seqStart = function () {

        // Don't start a sequence if are already running
        if ( angular.isDefined(stop) ) return;

        stop = $interval(function(){ $scope.stepNext(); }, 500);

    };

    $scope.seqStop = function() {
        if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
        }
    };

    $scope.$on('$destroy', function() {
        // Make sure that the interval is destroyed too
        $scope.seqStop();
    });


    $scope.stepNext = function() {
        if (lastStep != null) {
            $scope.step[lastStep].name = "";
        }

        $scope.step[curStep].name  = "x";
        lastStep = curStep;

        console.log(curStep);
        console.log(lastStep);

        curStep ++;
        if(curStep > 4) {
            curStep = 1;
        }
    };

});











