app.directive('step', function() {
    return {
        controller: 'StepCtrl',
        restrict: 'E',
        scope: {
            step: '=nr'
        },
        templateUrl: 'components/step/step.html'
    };
});

app.controller('StepCtrl', function($scope) {

    $scope.stepToggle = function(step) {
        step.sound = !step.sound;
    };

});
