/**
 * Partial application takes advantage of closure scope in order to fix parameters
 * @param fn
 * @param fixedArgs
 * @returns {function(...[*]=): *}
 */

const partialApply = (fn, ...fixedArgs) => {
    return function (...remainingArgs) {
        return fn.apply(this, [...fixedArgs, ...remainingArgs]) // fixedArgs.concat(remainingArgs)
    }
};

const add = (a, b) => a + b;

const add10 = partialApply(add, 10);

const actual = add10(5);
// 15;
