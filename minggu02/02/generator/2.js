function* generateSequence()
{
    yield 1; 
    yield 2;
    return 3; //ini untuk nilai akhirnya, yang mana tidak akan ditampilkan pada looping yang sudah kita buat. Karena memiliki nilai true. Jika pada value nya diganti dengan yield, maka 3 akan ditampilkan
}

let generator = generateSequence();

for (let value of generator) {
    alert(value);
}