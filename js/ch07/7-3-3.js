/*
* 17/10/31
*
* memoization pattern
*
* Closure,Javascript Object,Memoization pattern
*
* */

var fact = function () {
    var cache = {'0':1};

    var func = function (n) {
        var result = 0;

        if(typeof(cache[n])==='number'){
            return cache[n];
        }else{
            console.log(cache);
            result = cache[n] = n*fact(n-1);
        }

        return result;
    }

    return func;
}();

console.log(fact(5));