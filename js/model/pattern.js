app.factory('Pattern', ['Step', function (Step) {

    /**
     * Constructor, with class name
     */
    function Pattern() {
        // Public properties, assigned to the instance ('this')
        this.steps = initSteps(32);
    }

    /**
     * Public method, assigned to prototype
     */
    Pattern.prototype.getSubParttern = function (part) {

        subPattern = [];

        switch(part) {
            case 'A':
                subPattern = this.steps.slice(0,15);
                break;
            case 'B':
                subPattern = this.steps.slice(16,31);
                break;
            default:
                subPattern = this.steps.slice(0,15);
        }

        return subPattern;
    };


    /**
     * Initializes Steps
     *
     * @param count Number of Steps
     * @returns {Array} Steps
     */
    function initSteps(count) {
        var steps = [];

        for (i = 0; i < count; i++) {
            steps.push(new Step(i));
        }

        return steps;
    }

    /**
     * Return the constructor function
     */
    return Pattern;
}]);