app.controller('TransCtrl', ['$scope', 'SeqSrv', function($scope, SeqSrv) {

    $scope.onStart = function() {
        this.seqStart();
    };

    $scope.onStop = function() {
        this.seqStop();
    };

    $scope.onNext = function() {
        SeqSrv.test();
    }

}]);