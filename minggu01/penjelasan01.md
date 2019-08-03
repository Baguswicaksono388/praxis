# Penjelasan

Node.js adalah sebuah javascript yang berjalan di server said, dan untuk javascript itu sendiri hanya bisa berjalan di web browser saja. Sehingga, dgn adanya node.js, javascript bisa berjalan di level OS. Jadi, bisa kita simpulkan, node.js adlh tools untuk menjalankan javascript di level OS. <br>

for (var i=1; i<=7; i++) { <br> 
    var z=''; <br>
    for(var a=1;a<=i; a++) <br>
    { z+='*'; } <br>
    console.log(z) <br>
} <br>

<b>Penjelasan</b><br>
Jadi, untuk perulangan di atas : <br>
1. Kita, menyimpan variable nilai (*) pada variabel z <br>
2. Ketika, akan menjalankan loop for yang pertama, variable z di isi kosong. <br>
3. Kemudian, ketika menjalankankan loop for yang kedua, yang mana ada kondisi loopnya berjalan jika nilai a <= i. Jika, kondisi tersebut tidak terpenuhi makan akan lanjut ke perintah 'console.log(z)'. Yang mana nilai z sudah disimpan dengan nilai '*' <br>
4. Perlu diperhatikan console.log itu sifatnya, ketika akan menuliskan pada console.log(), ini akan langsung enter. <br>

<b>Hasilnya</b><br>
*<br>
** <br>
*** <br>
**** <br>
***** <br>
****** <br>
******* <br>
