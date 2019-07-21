//Function dengan meggunakan parameter dalam memberi value
const square = function(x) {
    return x * x ;
};
document.write(square(10));
document.write('<br>');

//Function, yang mana function juga dapat dipanggil
const makeNoise = function() {
    document.write("Pling <br>");
};
makeNoise();

function min(x,y) {
    if (x<y) { // proses pengecekan
        return x; // apabila x < kecil maka di tampilkan
    } else { // jika tdk maka akan dikembalikan yang do bawah
        return y;
    }
}
document.write(min(0,2));
document.write('<br>');
