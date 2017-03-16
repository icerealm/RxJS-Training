import Rx from 'rxjs/Rx';
import $ from 'jquery';
import rx from 'rx-dom';

var TOPIC_TAG_START = "<br><br><p style='color:blue;font-weight:bold;'>";
var TOPIC_TAG_END = "</p>";
var TOPIC_EXPLAN_CODE_MESSAGE = TOPIC_TAG_START+"Code is: "+TOPIC_TAG_END;
var TOPIC_DISPLAY_RESULT_MESSAGE = TOPIC_TAG_START+"Result is: "+TOPIC_TAG_END;

var CONTENT_EXPLAN_CODE_START = "<code><pre>";
var CONTENT_EXPLAN_CODE_END = "</code></pre>"

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
    $('#clrBtn5').click(function(){
        $('#viewEx5').empty();
    });
    $('#clrBtn6').click(function(){
        $('#viewEx6').empty();
    });
    $('#clrBtn7').click(function(){
        $('#viewEx7').empty();
    });
    $('#clrBtn8').click(function(){
        $('#viewEx8').empty();
    });
    $('#clrBtn9').click(function(){
        $('#viewEx9').empty();
    });
    $('#clrBtn10').click(function(){
        $('#viewEx10').empty();
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
    

    //Ex5.
    $('#exeBtn5').click(function(){
        $('#viewEx5').append(TOPIC_DISPLAY_RESULT_MESSAGE);
        example5();
    });
    

    //Ex6.
    $('#exeBtn6').click(function(){
        $('#viewEx6').append(TOPIC_DISPLAY_RESULT_MESSAGE);
        example6();
    });
    

    //Ex7.
    $('#exeBtn7').click(function(){
        $('#viewEx7').append(TOPIC_DISPLAY_RESULT_MESSAGE);
        example7();
    });

    //Ex8.
    $('#exeBtn8').click(function(){
        $('#viewEx8').append(TOPIC_DISPLAY_RESULT_MESSAGE);
        example8();
    });

    //Ex9.
    $('#exeBtn9').click(function(){
        $('#viewEx9').append(TOPIC_DISPLAY_RESULT_MESSAGE);
        example9();
    });

    //Ex10.
    $('#exeBtn10').click(function(){
        $('#viewEx10').append(TOPIC_DISPLAY_RESULT_MESSAGE);
        example10();
    });


    //------------------------- OnClick explan code --------------------------

    //Ex1. 
    $('#expBtn1').click(function(){
        $('#viewEx1').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAN_CODE_START+
                eval("example1")+
            CONTENT_EXPLAN_CODE_END); 
    });


    //Ex2. 
    $('#expBtn2').click(function(){
        $('#viewEx2').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAN_CODE_START+
                eval("example2")+
            CONTENT_EXPLAN_CODE_END); 
    });


    //Ex3. 
    $('#expBtn3').click(function(){
        $('#viewEx3').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAN_CODE_START+
                eval("example3")+
            CONTENT_EXPLAN_CODE_END); 
    });


    //Ex4. 
    $('#expBtn4').click(function(){
        $('#viewEx4').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAN_CODE_START+
                eval("example4")+
            CONTENT_EXPLAN_CODE_END); 
    });


    //Ex5. 
    $('#expBtn5').click(function(){
        $('#viewEx5').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAN_CODE_START+
                eval("example5")+
            CONTENT_EXPLAN_CODE_END); 
    });
    

    //Ex6. 
    $('#expBtn6').click(function(){
        $('#viewEx6').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAN_CODE_START+
                eval("example6")+
            CONTENT_EXPLAN_CODE_END); 
    });
    

    //Ex7. 
    $('#expBtn7').click(function(){
        $('#viewEx7').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAN_CODE_START+
                eval("example7")+
            CONTENT_EXPLAN_CODE_END); 
    });
    

    //Ex8. 
    $('#expBtn8').click(function(){
        $('#viewEx8').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAN_CODE_START+
                eval("example8")+
            CONTENT_EXPLAN_CODE_END); 
    });
    

    //Ex9. 
    $('#expBtn9').click(function(){
        $('#viewEx9').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAN_CODE_START+
                eval("example9")+
            CONTENT_EXPLAN_CODE_END); 
    });
    

    //Ex10. 
    $('#expBtn10').click(function(){
        $('#viewEx10').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAN_CODE_START+
                eval("example10")+
            CONTENT_EXPLAN_CODE_END); 
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
                 .subscribe( val => {$('#viewEx5').append( "<p>"+val+"</p>");});
    }


    // Ex6. flatMap
    function example6(){
        let source$ = Rx.Observable.range(1, 3).map(x => Rx.Observable.range(x, 4));
        source$.flatMap(x => {
                let str = x.constructor.name + "[start="+ x.start + ",count=" + x._count +"]"
                console.log(str);
                return x;
            }).subscribe(d => $('#viewEx6').append( "<p>"+d+"</p>"));
    }

    // Ex7. cancel sequence
    function example7(){
        let counter$ = Rx.Observable.interval(1000); 
        var subscription1 = counter$.take(10).subscribe(x => {$('#viewEx7').append( "<p>subscription1"+x+"</p>")});
        var subscription2 = counter$.take(10).subscribe(x => {$('#viewEx7').append( "<p>subscription2"+x+"</p>")});
        setTimeout(() => {
            $('#viewEx7').append( "stop subscription2!!!")
            subscription2.unsubscribe();
        }, 3000);
    }
}