let range = {
    from: 1,
    to:5
};

// 1. Pemanggilan untuk for..of, mula" memanggil ini
range[Symbol.iterator] = function() {
    //.. object iterator mengembalikan itu
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++};
            } else {
                return { done: true };
            }
        }
    };
};

for (let num of range) {
    alert(num);
}