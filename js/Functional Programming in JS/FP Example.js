/*커링 - 특정 함수에서 정의된 인자의 일부를 넣어 고정 시키고 나머지를 인자로 받는 새로운 함수를 만드는 것*/

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
console.log(new_func1(2,3));
