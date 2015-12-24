app.factory('SeqSrv', ['$interval', 'ngAudio', 'IteratorSrv',
    function($interval, ngAudio, IteratorSrv) {




        var test = function () {
            var it = IteratorSrv.makeIterator({2:'yo', 3:'man', 4:'test'});
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());

        };



        return {test: test};
    }]);