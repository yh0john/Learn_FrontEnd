function excute(param1,param2){
    var a=1,b=2;
    function func(){
        return a+b;

    }

    return param1+param2+func();
}

console.log(excute(3,4));
/*
* 자바스크립트에서 함수가 실행되면 자바스크립트 엔진은 해당 컨텍스트에 필요한 여러가지 정보를 담는 객체를 생성한다
* 이를 활성 객체라고 한다.
*
* */