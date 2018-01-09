/*
* 17/11/02
*
* -실행 컨텍스트와 클로저
*
* 생각이 안나서 다시 복습
*
* 18/01/09
*
* - 실행 컨텍스트 + 클로저 실습
* DOM library 제작을 위한 클로저 연습하기
*
* */

console.log('This is  global context');

var myObject = function(){
    var value = 0;

    return{
        increment : function(inc){
            value += typeof inc ==='number' ? inc : 1;
        },
        getValue:function(){
            return value;
        }
    };
}();


var hello = function(){
    var str = 'myworld';

    return innerFunc = function(){
        alert(str);
    };
}

//클로저 for 반복문 이해하기
//새로운 실행 컨텍스트를 생성해 i 값을 바로 참조 할 수 있게 한다.
function countSeconds(howMany){
    for(var i=1;i<=howMany;i++){
        (function(curI){
            setTimeout(function(){
                console.log(curI);
            },i*1000);
        })(i);

    }
};


countSeconds(3);