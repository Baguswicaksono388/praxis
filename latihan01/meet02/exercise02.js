function sumSalaries(salaries) {
    let sum = 0; //ini memberikan default sum itu yg pertama 0
    for (let salary of Object.values(salaries)) { //ini melakukan looping pada Object salaries
        sum += salary; // ini bisa dituliskan  sum = sum + salary;
    }
    return sum;
}

let salaries = {
    "John" : 100,
    "Bejo" : 200
};
alert(sumSalaries(salaries));


function count(user){
    return Object.keys(user).length;
}
let user = {
    name : 'John',
    age : 30,
    alamat : 'Jogja'
};
alert(count(user));