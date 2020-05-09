/**
 * Crate a cached version of pure function
 * @param fn
 * @returns {function(): *}
 */

 function cached (fn) {
    const cache = Object.create(null);
     return (function cachedFn() {
         const args = [].slice.call(arguments);
         const index = JSON.stringify(args);
         const hit = cache[index];

         return hit || (cache[index] = fn.apply(this, args));
    })
 }

const cachedFibonacci = cached(fibonacci);

function fibonacci (n) {
    if (n === 0 || n === 1) return n;
    return cachedFibonacci(n - 1) + cachedFibonacci(n - 2);
}

 console.log(fibonacci(15));
