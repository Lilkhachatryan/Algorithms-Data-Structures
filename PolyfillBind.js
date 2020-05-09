/**
 * Hard binding is such a common pattern, it's provided with a built in utility in ES5, Function.prototype.bind
 * @returns {*}
 * @param fn
 * @param ctx
 */
function polyfillBind (fn, ctx) {
    function boundFn (a) {
        const l = arguments.length;
        return l
            ? l > 1
                ? fn.apply(ctx, arguments)
                : fn.call(ctx, a)
            : fn.call(ctx)
    }
    return boundFn
}

function doSomething(something) {
    console.log(this.a, something);
    return this.a + something;
}

let obj = {
    a: 5
};


let doSomethingWithObjContext = polyfillBind(doSomething, obj);

let result = doSomethingWithObjContext(4);
console.log(result);
