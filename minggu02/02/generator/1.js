function* generateSequence()
{
    yield 1; 
    yield 2;
    return 3;
}

let generator = generateSequence();

let one = generator.next(); //ini akan menjalankan yield 1
let two = generator.next(); //ini akan menjalankan yield 2
let tiga = generator.next();

// ini akan menampilkan
alert(JSON.stringify(one)); 
alert(JSON.stringify(two));
alert(JSON.stringify(tiga));