import Rx from 'rxjs/Rx';
import $ from 'jquery';

//Ex1. use of to create Observable items
let stream$ = Rx.Observable.of(1,2,3,5,6);
stream$.subscribe(x => {
    console.log(x);
});

//Ex2. http
var textInput = $('#dataIn');
console.log(textInput)