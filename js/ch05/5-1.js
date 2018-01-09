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
console.log(myObject());