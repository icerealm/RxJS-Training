var Rx = require('rxjs/Rx');
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');


let event$ = Rx.Observable.create( obs => {
        obs.next('Simon');
        obs.next('Tina');
        obs.complete();
        obs.error("error naja!!")
});
event$.subscribe(data =>{ console.log(data) },
                 err => { console.log(err) },
                 () => { console.log("completed!!!") });

let stream0$ = Rx.Observable.of("1", "2", "3");

stream0$.subscribe(
  (val) => { console.log("onNext", val) },
  (err) => { console.log("onError", err) },
  ()    => { console.log("onCompleted") }
);