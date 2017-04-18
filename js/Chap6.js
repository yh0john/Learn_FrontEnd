//자식은 자신의 메서드를 재정의 혹은 추가로 기능을 더 확장 시킬 수 있어야한다.
//자바스크립트에서는 범용적으로 extend()라는 이름의 함수로 객체에 자신이 원하는 객체 혹은 함수를 추가시킨다.

/*
jQuery extend 함수
jQuery.extend = jQuery.fn.extend = function(obj,prop){
    if(!prop){prop=obj;obj=this;}
    for(var i in prop)obj[i]=prop[i];
    return obj;
}
 */