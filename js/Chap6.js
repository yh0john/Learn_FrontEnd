function create_Object(o){
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
        this.name = arg;
    }

};

var student = create_Object(person);
student.setName("me");
console.log(student.getName());