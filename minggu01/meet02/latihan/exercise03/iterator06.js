let arrayLike = {
    0: "Hello",
    1: "World",
    lenght: 2
};

let arr = Array.from(arrayLike);
alert(arr.pop());