app.controller('MainCtrl', ['$scope', '$interval', 'ngAudio', 'Pattern', function($scope, $interval, ngAudio,Pattern) {

    /////////////////////////////////////////////////
    // Initialize
    var pattern = new Pattern();

    //init steps
    $scope.step = pattern.getPart('A');


    //init sounds
    $scope.sound = ngAudio.load("audio/BD.WAV");


    //init sequencer
    var curStep = 0;
    var lastStep = null;
    var stop;


    /////////////////////////////////////////////////
    // Events


    $scope.$on('$destroy', function() {
        // Make sure that the interval is destroyed too
        $scope.seqStop();
    });



    /////////////////////////////////////////////////
    //Sequencer Logic



    /**
     * Starts the Sequencer - aka start the interval
     */
    $scope.seqStart = function seqStart() {

        // Don't start a sequence if are already running
        if ( angular.isDefined(stop) ) return;

        stop = $interval(function(){ $scope.seqNext(); }, 125);

    };


    /**
     * Stop the Sequencer - aka stops the interval
     */
    $scope.seqStop = function seqStop() {
        if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
        }
    };


    /**
     * Processes next Step - aka interval
     */
    $scope.seqNext = function seqNext() {
        if (lastStep != null) {
            $scope.step[lastStep].active = false;
        }

        $scope.step[curStep].active  = true;

        if($scope.step[curStep].sound) {
            $scope.sound.play();
        }

        lastStep = curStep;

        curStep ++;
        if(curStep > 15) {
            curStep = 0;
        }
    };

}]);
