/* 클로저 대표 예제를 통해 실행 컨텍스트 개념과 함수에 대해 이해한다.
* 문맥은 이해가 되는데 실제 손으로 움직이는 코드는 잘 안된다.
*
* */

/* 1번 예제*/
//global state인 arr 배열을 만든다.
var arr = [];


//arr 배열에는 i 의 값을 리턴하는 익명 함수를 저장한다.
for(var i=0;i<5;i++){
    arr[i] = function(){
        return i;
    };
}

//arr에 저장되어 있는 익명함수를 호출한다.
for(var index in arr){
    console.log(arr[index]());
}

/* 1,2,3,4,5가 출력 되는 것이 아닌 5,5,5,5,5가 출력된다.
* 즉 익명함수를 실행 할 떄는 이미 위의 for 문이 완료 된 상태이므로 전역 변수 i 는 5가 된다.*/

/* 2번 예제
*  1,2,3,을 1초 간격으로 출력 하는 것이 목적인 예제이다.
* */

function countSeconds(howMany){
    for(var i = 0;i<=howMany;i++){
        setTimeout(function(){console.log(i)},i*1000);
    }
};

countSeconds(3);

/* 위의 예제는 파라미터 값으로 들어온 function이 실행 될 때 이미 countSeconds의 실행이 끝난 상태이므로
* i의 값은 맨 마지막 값인 3만 출력된다.*/

/*왜 실행이 끝난 상태인가? =>실행 되는 시점이 언제인지 판단하여야함.*/