import Rx from 'rxjs/Rx';
import $ from 'jquery';
import rx from 'rx-dom';

var TOPIC_TAG_START = "<br><br><p style='color:blue;font-weight:bold;'>";
var TOPIC_TAG_END = "</p>";
var TOPIC_EXPLAN_CODE_MESSAGE = TOPIC_TAG_START+"Code is: "+TOPIC_TAG_END;
var TOPIC_DISPLAY_RESULT_MESSAGE = TOPIC_TAG_START+"Result is: "+TOPIC_TAG_END;

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



    //----------------------- OnClick execute Code--------------------------

    //Ex1.
    $('#exeBtn1').click(function(){
        $('#viewEx1').append(TOPIC_DISPLAY_RESULT_MESSAGE);
        example1();
    });
    

    //Ex2.
    example2();


    //Ex3.
    $('#exeBtn3').click(function(){
        $('#viewEx3').append(TOPIC_DISPLAY_RESULT_MESSAGE);
        example3();
    });


    //Ex4.
    $('#exeBtn4').click(function(){
        $('#viewEx4').append(TOPIC_DISPLAY_RESULT_MESSAGE);
        example4();
    });
    


    //------------------------- OnClick explan code --------------------------

    //Ex1. 
    $('#expBtn1').click(function(){
        $('#viewEx1').append(TOPIC_EXPLAN_CODE_MESSAGE+eval("example1")); 
    });


    //Ex2. 
    $('#expBtn2').click(function(){
        $('#viewEx2').append(TOPIC_EXPLAN_CODE_MESSAGE+eval("example2")); 
    });


    //Ex3. 
    $('#expBtn3').click(function(){
        $('#viewEx3').append(TOPIC_EXPLAN_CODE_MESSAGE+eval("example3")); 
    });


    //Ex4. 
    $('#expBtn4').click(function(){
        $('#viewEx4').append(TOPIC_EXPLAN_CODE_MESSAGE+eval("example4")); 
    });



    //----------------------- Function Code ----------------------------

    //Ex1. Code which, use to create Observable items
    function example1(){
        let stream$ = Rx.Observable.of(1,2,3,5,6);
        console.log(stream$);
        stream$.subscribe(d => {
            $('#viewEx1').append(d + "&nbsp;")
        });
    }


    //Ex2. Code which, observe the input box when user fill in data.
    function example2(){
        let textInput = $('#dataIn');
        let view2 = $('#viewEx2');
        let stream2$ = Rx.Observable.fromEvent(textInput, "keypress");
        stream2$.map(event => event.keyCode).subscribe( d => {
            view2.append("<p>" + d + "</p>");

        });
    }


    //Ex3.
    function example3(){
        let stream3$ = rx.DOM.get('https://jsonplaceholder.typicode.com/posts/1');
        stream3$.map(data => JSON.parse(data.response))
                .subscribe(model => { $('#viewEx3').append("<p>" + JSON.stringify(model) + "</p>") },
                            err => { $('#viewEx3').append(err)},
                            ()  => { $('#viewEx3').append("completed!!")});
    }


    //Ex4. Code which, use to map
    function example4(){
        Rx.Observable.range(1,5)
                    .map(x => {
                        $('#viewEx4').append( "<p>src:" + x +"</p>");
                        return 2*x;
                    })
                    .subscribe(x => {$('#viewEx4').append("<p>final:" + x +"</p>")});
    }


    //Ex5. Code which, use to filter
    function example5(){
        Rx.Observable.range(1,10)
                 .filter(x => x%2 === 0)
                 .subscribe( val => {console.log(val)});
    }

}