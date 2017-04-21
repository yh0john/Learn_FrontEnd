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



//클래스 기반의 상속 구현
function Person(arg){
    this.name = arg;
}

Person.prototype.setName = function(value){
    this.name = value;
};
Person.prototype.getName = function (){
    return this.name;
};

function Student(arg){}

var you = new Person("iamhjoo");
Student.prototype = you;

var me = new Student("zzoon");
me.setName("zzoon");// (A)
console.log(me.getName());

//위의 코드는 문제가 있다. 먼저 me 인스턴스를 생성할 때 부모 클래스인 Person 클래스를 호출하지 않는다.
//(A)코드로 me 인스턴스를 생성할 때 인자로 zzoon을 넘겼으나 이를 반영하는 코드는 어디에도 없다.
//즉 생성된 me 객체는 빈 객체이다.이렇게 부모의 생성자가 호출 되지 않으면 인스턴스의 초기화가 제대로
//이루어 지지 않아 문제가 발생 할 수 있다.이를 해결하려면 Student 함수에 다음 코드를 추가하여 부모클래스의 생성자를
//호출해야한다.
/*추가 함수
* function Student(arg){
*   Person.apply(this,arguments);
*   //apply 찾아 볼 것
* }
 */
//Apply 함수 설명 - this를 특정 객체에 명시적으로 바인딩 할 때 사용.
//위의 코드는 Person 객체의 this에 Student 객체를 바인딩 함.

//부모클래스와 자식클래스가 너무 강하게 묶여있다. 서로 독립적인 인스턴스로 만들어보자.
//두 클래스의 프로토타입 사이에 중개자를 만들어 해결해보자.
function Person(arg){
    this.name = arg;
}

Function.prototype.method = function(name,func){
    this.prototype[name] = func;
}
Person.method("setName",function(value){
   this.name = name;
});
Person.method("getName",function(){
    return this.name;
});
function Student(arg){}

function F(){}  //중개자 함수

F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;

var me = new Student();
me.setName("zzoon");
console.log(me.getName());

//상속관계를 즉시 실행함수와 클로져로 최적화 시켜보았다.

var inherit = function(parent,child){
    var F = function(){};
    return function(parent,child){
      F.prototype = parent.prototype;
      child.prototype = new F();
      child.prototype.constructor = child;
      child.super = parent.prototype;
    };
}

//캡슐화 - 모듈 패턴의 활용