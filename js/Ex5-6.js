var value ="value1";

function printValue(){
    return value;
}

function printFunc(func){
    var value = "value2";
    console.log(printValue());
}

printFunc(printValue());