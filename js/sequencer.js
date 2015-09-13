app.controller('SeqCtrl', function($scope, $interval, ngAudio) {

    //init data
    $scope.step = {
        1:{active: false, sound: false},
        2:{active: false, sound: false},
        3:{active: false, sound: false},
        4:{active: false, sound: false},
        5:{active: false, sound: false},
        6:{active: false, sound: false},
        7:{active: false, sound: false},
        8:{active: false, sound: false},
        9:{active: false, sound: false},
        10:{active: false, sound: false},
        11:{active: false, sound: false},
        12:{active: false, sound: false},
        13:{active: false, sound: false},
        14:{active: false, sound: false},
        15:{active: false, sound: false},
        16:{active: false, sound: false}
    };

    //init sounds
    $scope.sound = ngAudio.load("audio/BD.WAV");


    var curStep = 1;
    var lastStep = null;
    var stop;

    $scope.seqStart = function () {

        // Don't start a sequence if are already running
        if ( angular.isDefined(stop) ) return;

        stop = $interval(function(){ $scope.stepNext(); }, 125);

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

        if($scope.step[curStep].sound) {
            $scope.sound.play();
        }

        lastStep = curStep;

        curStep ++;
        if(curStep > 16) {
            curStep = 1;
        }
    };

    $scope.stepToggle = function(i) {
        $scope.step[i].sound = !$scope.step[i].sound;
    };

});











