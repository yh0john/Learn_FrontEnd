/**
 * Created by John on 2017-03-25.
 */

var createFormObject ={
    createFormElement:function(name,method,target,action){
        var form  = document.createElement('form');
        form.name = name;
        form.method = method;
        form.target = target;
        form.action = action;
    },
    addHiddenValue:function(formName,value) {
        var hiddenInput = document.createElement("input");
        hiddenInput.type = 'hidden';
        hiddenInput.value = value;
        formName.appendChild(hiddenInput);
    }
};
