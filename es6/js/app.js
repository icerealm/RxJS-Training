import Rx from 'rxjs/Rx';

let stream$ = Rx.Observable.of(1,2,3,5,6);
stream$.subscribe(x => {
    console.log(x);
});