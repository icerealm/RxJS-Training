import Rx from 'rxjs/Rx';
import $ from 'jquery';
import rx from 'rx-dom';

window.onload = function() {
    //Ex1. use of to create Observable items
    let stream$ = Rx.Observable.of(1,2,3,5,6);
    stream$.subscribe(x => {
        console.log(x);
    });

    //Ex2. observe the input box when user fill in data.
    let textInput = $('#dataIn');
    let stream2$ = Rx.Observable.fromEvent(textInput, "keypress");
    stream2$.map(event => event.keyCode).subscribe( d => {console.log(d)});

    //Ex3. observe http stream using rx-dom
    let stream3$ = rx.DOM.get('https://jsonplaceholder.typicode.com/posts/1');
    stream3$.map(data => JSON.parse(data.response))
            .subscribe(model => { console.log(model.title)},
                         err => { console.log(err)},
                         ()  => { console.log("completed!!")});

    //Ex4. map
    Rx.Observable.range(1,5)
                 .map(x => 2*x)
                 .subscribe(x => {console.log("map.val:" + x)});
    
    //Ex6. filter
    Rx.Observable.range(1,10)
                 .filter(x => x%2 === 0)
                 .subscribe( val => {console.log(val)});

}