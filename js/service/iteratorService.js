app.factory('IteratorSrv', ['$interval', 'ngAudio',
    function($interval, ngAudio) {

        /**
         * Iterator for a Collection of indexed Objects
         *
         * First and Last Index are flexible, but the index
         * have to be continues
         *
         * @param objColl An indexed object collection
         * @returns {{next: Function}}
         */
        var makeIterator = function makeIterator(objColl){
            var firstIndex = Object.keys(objColl)[0];
            var lastIndex = Object.keys(objColl).reverse()[0];

            var nextIndex = firstIndex;

            return {
                next: function(){
                    if (nextIndex > lastIndex) {
                        nextIndex = firstIndex;
                    }
                    return objColl[nextIndex++];
                }
            }
        };

        return {makeIterator : makeIterator};
    }]);