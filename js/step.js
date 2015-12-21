app.directive('step', function() {
    return {
        restrict: 'E',
        scope: {
            step: '=nr'
        },
        templateUrl: 'templates/step.html'
    };
});
