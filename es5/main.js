window.onload= function() {
    var $input =  $('#dataIn');
    var input$ = Rx.DOM.fromEvent($input, 'keypress');
  

    input$.subscribe(x => {
            console.log(x.keyCode);
        });


    var get$ = Rx.Observable.create((obs) => {
        var req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
        req.onload = function() {
            if (req.status == 200) {
                obs.next(req.response);
                obs.completed();
            } 
            else {
                obs.onerror(new Error(req.statusText));
            }
        };
        req.onerror = function(){
            obs.onerror(new Error("Unknown Error"));
        };
        req.send();
    });
    get$.map(x => JSON.parse(x))
        .subscribe( data => {console.log(data.userId)},
                    err => {console.log(err)});
}


