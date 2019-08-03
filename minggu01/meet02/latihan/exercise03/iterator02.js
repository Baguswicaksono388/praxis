// Untuk iterator ini logikanya seperti iterator01.js
let range = {
    start: 1,
    finish: 5,

    [Symbol.iterator]() {
        // Current ???
        this.current = this.start;
        return this;
    },

    next() {
        if (this.current <= this.finish) {
            return { done: false, value: this.current++}
        } else {
            return { done: true};
        }
    }
};

for (let num of range) {
    alert(num);
}