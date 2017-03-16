import Rx from 'rxjs/Rx';
import $ from 'jquery';
import rx from 'rx-dom';

window.onload = function() {

    $('#clrBtn1').click(function(){
        $('#viewEx1').empty();
    });
    $('#clrBtn2').click(function(){
        $('#viewEx2').empty();
    });
    $('#clrBtn3').click(function(){
        $('#viewEx3').empty();
    });
    $('#clrBtn4').click(function(){
        $('#viewEx4').empty();
    });

    //Ex1. use of to create Observable items
  
    $('#exeBtn1').click(function(){
            let stream$ = Rx.Observable.of(1,2,3,5,6);
            console.log(stream$);
            stream$.subscribe(d => {
                $('#viewEx1').append(d + "&nbsp;");
            });
    });


    //Ex2. observe the input box when user fill in data.
    let textInput = $('#dataIn');
    let view2 = $('#viewEx2');
    let stream2$ = Rx.Observable.fromEvent(textInput, "keypress");
    stream2$.map(event => event.keyCode).subscribe( d => {
        view2.append("<p>" + d + "</p>");

    });

    //Ex3. observe http stream using rx-dom
    $('#exeBtn3').click(function(){
        let stream3$ = rx.DOM.get('https://jsonplaceholder.typicode.com/posts/1');
        stream3$.map(data => JSON.parse(data.response))
                .subscribe(model => { $('#viewEx3').append("<p>" + JSON.stringify(model) + "</p>") },
                            err => { $('#viewEx3').append(err)},
                            ()  => { $('#viewEx3').append("completed!!")});
    });


    //Ex4. map
    $('#exeBtn4').click(function(){
        Rx.Observable.range(1,5)
                    .map(x => {
                        $('#viewEx4').append( "<p>src:" + x +"</p>");
                        return 2*x;
                    })
                    .subscribe(x => {$('#viewEx4').append("<p>final:" + x +"</p>")});
    });
    
    // Ex5. filter
    Rx.Observable.range(1,10)
                 .filter(x => x%2 === 0)
                 .subscribe( val => {console.log(val)});
    
    // Ex6. 
    let source$ = Rx.Observable.range(1, 3).map(x => Rx.Observable.range(x, 4));
    source$.flatMap(x => {
            let str = x.constructor.name + "[start="+ x.start + ",count=" + x._count +"]"
            console.log(str);
            return x;
        }).subscribe(d => console.log(d));
}