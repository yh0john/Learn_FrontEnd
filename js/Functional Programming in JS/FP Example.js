/**
 * Created by John on 2017-05-06.
 */
/*커링 - 특정 함수에서 정의된 인자의 일부를 넣어 고정 시키고 나머지를 인자로 받는 새로운 함수를 만드는 것

//예제 7.7 커링 연습하기

//커링 대상 function
function calculate(a,b,c){
    return a*b+c;
}

//커링 function 작성
function curry(func){
    var args = Array.prototype.slice.call(arguments,1);

    return function() {
        return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
    }
}

//커링 예제 테스트 코드
var new_func1 = curry(calculate,1);
console.log(new_func1(2,3));    //출력값 5
var new_func2 = curry(calculate,1,3)
console.log(new_func2(3));      //출력값 6

//커링 함수는 자바스크립트에서는 기본적으로 제공하지 않는다.
//사용자가 Function.prototype에 아래와 같이 정의할 수 있다.
 */
Function.prototype.curry = function (){
    var fn = this;
    var args = Array.prototype.slice.call(arguments);

    return function(){
        return fn.apply(this,args.concat(Array.prototype.slice.call(arguments)));
    }
}
