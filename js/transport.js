app.controller('TransCtrl', ['$scope', function($scope) {

    $scope.onStart = function() {
        this.seqStart();
    };

    $scope.onStop = function() {
        this.seqStop();
    };

    $scope.onNext = function() {
        this.seqNext();
    }

}]);