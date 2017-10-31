/*
* 17/10/31
*
* 명령형 프로그래밍 방식으로 Factorial 구현
* 재귀 호출로 factorial 구현
* */

function factorial(num){
    var val = 1;
    for(var i =2;i<=num;i++){
        val*=i;
    }

    return val;
}

console.log(factorial(5));

function  recursionFactorial(num) {
    if(num == 0) return 1;
    else return recursionFactorial(num-1)*num;

}

console.log(recursionFactorial(5));