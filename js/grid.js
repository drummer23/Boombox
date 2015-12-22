app.controller('GridCtrl', ['$scope', '$interval', 'ngAudio', 'SeqSrv',
    function($scope, $interval, ngAudio, SeqSrv) {

    //init data
    $scope.step = {
        1: {active: false, sound: false, color: 'red'},
        2: {active: false, sound: false, color: 'red'},
        3: {active: false, sound: false, color: 'red'},
        4: {active: false, sound: false, color: 'red'},
        5: {active: false, sound: false, color: 'orange'},
        6: {active: false, sound: false, color: 'orange'},
        7: {active: false, sound: false, color: 'orange'},
        8: {active: false, sound: false, color: 'orange'},
        9: {active: false, sound: false, color: 'yellow'},
        10:{active: false, sound: false, color: 'yellow'},
        11:{active: false, sound: false, color: 'yellow'},
        12:{active: false, sound: false, color: 'yellow'},
        13:{active: false, sound: false, color: 'white'},
        14:{active: false, sound: false, color: 'white'},
        15:{active: false, sound: false, color: 'white'},
        16:{active: false, sound: false, color: 'white'}
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

}]);











