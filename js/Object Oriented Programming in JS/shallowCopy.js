/*jQuery extend 함수 구현 및 분석

//얕은 복사
 jQuery.extend = jQuery.prototype.extend = function(obj,prop){

 //jQuery.fn 은 jQuery.prototype.즉 jQuery 함수객체와 이 객체의 인스턴스 모두 extend 함수가 있다는 뜻이다.
 //인자가 하나만 들어오는 경우에는 현재 객체에 인자로 들어오는 객체의 프로퍼티를 복사한다
 if(!prop){prop = obj;obj=this;}
 for(var i in prop)obj[i] = prop[i];
 return obj;
 }
 */


