/**
 * Why not Array?
 * Push(item) - O(1) runtime
 * Pop(item) - O(1) runtime
 * Peek - O(1) runtime
 * StackEmpty - O(n) runtime, when n is the size of stack
 * @returns {{pop: pop, print: (function(): []), stackEmpty: stackEmpty, size: (function(): number), isEmpty: (function(): boolean), push: push, peek: peek}}
 * @constructor
 */

function Stack() {
    let stack = {};
    let stackSize = 0;

    return {
        push: function (item) {
            stack[stackSize] = item;
            stackSize++;
        },

        pop: function () {
            if (this.isEmpty()) return undefined;

            stackSize--;

            const item = stack[stackSize];
            delete stack[stackSize];
            return item;
        },

        peek: function () {
            if (this.isEmpty()) return undefined;

            return stack[stackSize - 1]
        },

        stackEmpty: function () {
            while (!this.isEmpty()) {
                this.pop()
            }
        },

        isEmpty: function () {
            return stackSize === 0;
        },

        size: function () {
            return stackSize;
        },

        print: function () {
            let result = [];

            for (let key in stack) {
                result.unshift(stack[key]);
            }

            return result;
        }
    }
}

let demoStack = new Stack();
