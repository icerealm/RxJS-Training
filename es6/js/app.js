import Rx from 'rxjs/Rx';
import $ from 'jquery';
import rx from 'rx-dom';

const TOPIC_TAG_START = "<br><br><p style='color:blue;font-weight:bold;'>";
const TOPIC_TAG_END = "</p>";
const TOPIC_EXPLAN_CODE_MESSAGE = TOPIC_TAG_START+"Code is: "+TOPIC_TAG_END;
const TOPIC_DISPLAY_RESULT_MESSAGE = TOPIC_TAG_START+"Result is: "+TOPIC_TAG_END;

const CONTENT_EXPLAIN_CODE_START = "<code><pre>";
const CONTENT_EXPLAIN_CODE_END = "</code></pre>"

window.onload = function() {
    var htmlPrint = function(id, msg){
        $(id).append("<p>" + msg + "</p>");
    }

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
    $('#clrBtn11').click(function(){
        $('#viewEx11').empty();
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

    //Ex11.
    $('#exeBtn11').click(function(){
        $('#viewEx11').append(TOPIC_DISPLAY_RESULT_MESSAGE);
        example11();
    });


    //------------------------- OnClick explain code --------------------------

    //Ex1. 
    $('#expBtn1').click(function(){
        $('#viewEx1').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAIN_CODE_START+
                eval("example1")+
            CONTENT_EXPLAIN_CODE_END); 
    });


    //Ex2. 
    $('#expBtn2').click(function(){
        $('#viewEx2').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAIN_CODE_START+
                eval("example2")+
            CONTENT_EXPLAIN_CODE_END); 
    });


    //Ex3. 
    $('#expBtn3').click(function(){
        $('#viewEx3').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAIN_CODE_START+
                eval("example3")+
            CONTENT_EXPLAIN_CODE_END); 
    });


    //Ex4. 
    $('#expBtn4').click(function(){
        $('#viewEx4').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAIN_CODE_START+
                eval("example4")+
            CONTENT_EXPLAIN_CODE_END); 
    });


    //Ex5. 
    $('#expBtn5').click(function(){
        $('#viewEx5').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAIN_CODE_START+
                eval("example5")+
            CONTENT_EXPLAIN_CODE_END); 
    });
    

    //Ex6. 
    $('#expBtn6').click(function(){
        $('#viewEx6').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAIN_CODE_START+
                eval("example6")+
            CONTENT_EXPLAIN_CODE_END); 
    });
    

    //Ex7. 
    $('#expBtn7').click(function(){
        $('#viewEx7').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAIN_CODE_START+
                eval("example7")+
            CONTENT_EXPLAIN_CODE_END); 
    });
    

    //Ex8. 
    $('#expBtn8').click(function(){
        $('#viewEx8').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAIN_CODE_START+
                eval("example8")+
            CONTENT_EXPLAIN_CODE_END); 
    });
    

    //Ex9. 
    $('#expBtn9').click(function(){
        $('#viewEx9').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAIN_CODE_START+
                eval("example9")+
            CONTENT_EXPLAIN_CODE_END); 
    });
    

    //Ex10. 
    $('#expBtn10').click(function(){
        $('#viewEx10').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAIN_CODE_START+
                eval("example10")+
            CONTENT_EXPLAIN_CODE_END); 
    });

    //Ex11. 
    $('#expBtn11').click(function(){
        $('#viewEx11').append(TOPIC_EXPLAN_CODE_MESSAGE+
            CONTENT_EXPLAIN_CODE_START+
                eval("example11")+
            CONTENT_EXPLAIN_CODE_END); 
    });


    //----------------------- Function Code ----------------------------

    function example1(){
        //Ex1. Use of to create Observable items
        let source$ = Rx.Observable.of(1,2,3,5,6);
        console.log(source$);
        source$.subscribe(d => {
            htmlPrint('#viewEx1', d +"&nbsp;");
        });
    }


    function example2(){
            //Ex2. Observe the input box when user fill in data.
        let textInput = $('#dataIn');
        let view2 = $('#viewEx2');
        let source$ = Rx.Observable.fromEvent(textInput, "keypress");
        source$.map(event => event.keyCode).subscribe( d => {
            htmlPrint('#viewEx2', d);
        });
    }


    function example3(){
        //Ex3. Use rx.DOM to create http.get as source  
        let source$ = rx.DOM.get('https://jsonplaceholder.typicode.com/posts/1');
        source$.map(data => JSON.parse(data.response))
                .subscribe(model => { htmlPrint('#viewEx3', JSON.stringify(model)) },
                             err => { htmlPrint('#viewEx3', err)},
                             ()  => { htmlPrint('#viewEx3', "completed!!")});
    }

    
    function example4(){
        //Ex4. Use map to transform source to desired data
        Rx.Observable.range(1,5)
                    .map(x => {
                        htmlPrint('#viewEx4',"src:" + x );
                        return 2*x;
                    })
                    .subscribe(x => {htmlPrint('#viewEx4', "final:" + x)});
    }


    function example5(){
        //Ex5. use filter to filter out source. 
        Rx.Observable.range(1,10)
                 .filter(x => {
                    let rs = x%2 === 0;
                    let msg = "rs:" + rs + ",val=" + x;
                    htmlPrint('#viewEx5', msg);
                    return rs;
                 })
                 .subscribe( val => {htmlPrint('#viewEx5',"final:"+val);});
    }


    
    function example6(){
        // Ex6. flatMap
        let source$ = Rx.Observable.range(1, 3).map(x => Rx.Observable.range(x, 4));
        source$.flatMap(x => {
                let str = x.constructor.name + "[start="+ x.start + ",count=" + x._count +"]"
                htmlPrint('#viewEx6', str);
                return x;
            }).subscribe(d => htmlPrint('#viewEx6', d));
    }

    
    function example7(){
        // Ex7. cancel sequence
        let counter$ = Rx.Observable.interval(1000); 
        var subscription1 = counter$.take(8).subscribe(x => {htmlPrint('#viewEx7', "subscription1:"+x)});
        var subscription2 = counter$.take(8).subscribe(x => {htmlPrint('#viewEx7', "subscription2:"+x)});
        setTimeout(() => {
            htmlPrint('#viewEx7',"stop subscription2!!!")
            subscription2.unsubscribe();
        }, 3000);
    }
    
    function example8(){
        // Ex8. retry sending request
        rx.DOM.get("https://jsonplaceholder.typicode.com/posts/2")
                .retry(3)
                .subscribe(x => htmlPrint('#viewEx8', JSON.stringify(x.response)));
    }


    function example9(){
        //Ex9. merge
        let source1$ = Rx.Observable.of("src1: " + 1, "src1: " + 2, "src1: " + 3);
        let source2$ = Rx.Observable.of("src2: " + 4, "src2: " + 5, "src2: " + 6);

        let source$ = Rx.Observable.merge(source1$, source2$);
        source$.subscribe(x => htmlPrint("#viewEx9", x));
    }

    function example10(){
        //Ex10. subject is both Observable and Observer.
        let datasource$ = Rx.Observable.interval(200)
                                    .map(x => "datasource:" + x)
                                    .take(10);
        let subject = new Rx.Subject();
        datasource$.subscribe(subject);

        subject.subscribe(
            data  => {htmlPrint("#viewEx10", "observer:" + data)},
            error => {htmlPrint("#viewEx10", error)},
            ()    => {htmlPrint("#viewEx10", "observer completed")}
        );

        subject.next("subject msg#1");
        setTimeout(() => {
            subject.next("subject msg#2");
        }, 800)
        

        setTimeout(() => {
            subject.complete();
        }, 1200);
    }

    function example11(){
        //Ex11. AsyncSubject emits the last value if there is complete notification.
        let data = 0;
        htmlPrint("#viewEx11", "initial data:" + data);
        let datasource$ = Rx.Observable.create( obs =>{
            obs.next(++data);
            setTimeout(() => obs.next(++data), 1000);
            setTimeout(() => obs.next(++data), 2000);
            setTimeout(() => obs.complete(), 2500);
        })
        let subject = new Rx.AsyncSubject();

        datasource$.subscribe(subject);

        subject.subscribe(x => htmlPrint("#viewEx11", "onNext, data:" + x),
                        err => htmlPrint("#viewEx11", err),
                        ()  => {
                                htmlPrint("#viewEx11", 'completed, data:'+ data);
                               });
        htmlPrint("#viewEx11", "before code ending, data:" + data);
    }

    function example12(){
        let subject = new Rx.BehaviorSubject("Loading page...");

        subject.subscribe( x => console.log(x || "empty"),
                        err => console.log(err));
        Rx.Observable.create(obs => {
            setTimeout(() => obs.next("{data:'myscript'}"), 2000);
            setTimeout(() => obs.next("{data:'myscript2'}"), 3000);
            setTimeout(() => obs.next(null), 3000);
        }).subscribe(subject);
    }


}