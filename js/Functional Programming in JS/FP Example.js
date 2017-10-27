/**
 * Created by John on 2017-10-25.
 *
 * 함수형 프로그래밍을 이해 하기 위한 덧셈,곱셈 연산
 */


function sum(arr){
    var len = arr.length;
    var i = 0,sum = 0;

    for(;i<len;i++){
        sum+=arr[i];
    }

    return sum;
}

function  multiply(arr) {
    var len = arr.length;
    var i = 0, result = 1;

    for(;i<len;i++){
        result *= arr[i];
    }
    return result;
}

//명령형 프로그래밍 방식으로 작성된 코드.
//연산이 바뀌면 매번 새로운 함수를 다시 구현 해야한다.
// 함수형 프로그래밍을 이용해서 구현하면 간편하다

function reduce(func,arr,memo) {
    var len = arr.lengthy,
        i=0
        accum = memo;

    for(;i<len;i++){
        accum = func(accum,arr[i]);
    }

    return accum;

}