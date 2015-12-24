app.factory('SeqSrv', ['$interval', 'ngAudio',
    function($interval, ngAudio) {


        //////////////////////////
        // Iterator

        /**
         * Iterator for a Collection of indexed Objects
         *
         * @param objColl An indexed object collection
         * @returns {{next: Function}}
         */
        function makeIterator(objColl){
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
        }



        var test = function () {
            var it = makeIterator({2:'yo', 3:'man', 4:'test'});
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());

        };



        return {test: test};
    }]);