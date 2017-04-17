/**
 * Created by John on 2017-04-12.
 */
//1.클래스,메서드,생성자
/*
function Person(arg){
    this.name = arg;

    this.getName = function(){
        return this.name;
    }
    this.setName = function(value){
        this.name = value;
    }
}

var me = new Person("zzoon");
console.log(me.getName());

me.setName("iamhjoo");
console.log(me.getName());

//위의 형태는 기존 객체지향 프로그래밍 언어에서 한 클래스의 인스턴스를 생성하는 코드와 매우 유사하다.
//하지만 중복되는 코드가 많아 불필요하게 메모리를 잡아 먹는다. 다음과 같이 개선한다

function Person(arg){
    this.name = arg;
}
Person.prototype.getName = function (){
    return this.name;
}
Person.prototype.setName = function(value){
    this.name =value;
}
var me = new Person("me"); var you  = new Person("you");
console.log(me.getName()); console.log(you .getName());

//이와 같이 자바스크립트에서는 클래스 안의 메서드를 정의할 때는 프로토타입 객체에 정의한 후,
//new로 생성한 객체에서 접근 할 수 있게 하는 것이 좋다. 더글라스 크락포트는 다음과 같은 함수를 제시하면서
//메서드를 정의하는 방법을 소개한다.

Function.prototype.method = function(name,func){
    if(!this.prototype[name])
        this.prototype[name] = func;
}


//이 함수를 활용하면 최종 개선 코드는 아래와 같다.

Function.prototype.method = function(name,func){
    this.prototype[name] = func;
}
function Person(arg){
    this.name = arg;
}
Person.method('setName',function(value){
   this.name = value;
});
Person.method('getName',function(){
    return this.name;
});


//2.상속
//(1)클래스 기반의 전통적인 상속 방식을 흉내내는 것
//(2)객체의 프로토타입으로 상속을 구현

function create_object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

*/

var person = {
    name:"zzoon",
    getName:function(){
        return this.name;
    },
    setName:function(arg){
        this.name= arg;
    }
};

function create_object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

function extend(obj,prop){
    if(!prop){prop=obj;obj=this;}
    for(var i in prop)obj[i]=prop[i];
    return obj;
}
//+ extend 함수 추가
var student  = create_object(person);
student.setName("me");
console.log(student.getName());