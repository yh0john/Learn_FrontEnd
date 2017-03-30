var globalscope = 'global';

function fscope(){
    var lv ='test';
    alert(globalscope);
}
fscope();
alert(lv);