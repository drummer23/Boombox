app.controller('SeqCtrl', function($scope, $interval, ngAudio) {

    //init data
    $scope.step = {1:{active: false}, 2:{active: false}, 3:{active: false}, 4:{active: false}};

    //init sounds
    $scope.sound = ngAudio.load("audio/test.mp3");


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
            $scope.step[lastStep].active = false;
        }

        $scope.step[curStep].active  = true;
        $scope.sound.play();


        lastStep = curStep;

        console.log(curStep);
        console.log(lastStep);

        curStep ++;
        if(curStep > 4) {
            curStep = 1;
        }
    };

});











