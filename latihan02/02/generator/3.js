let range = {
    from: 1,
    to: 5,
  
    // Dalam pemanggilan metode di bawah ini, hanya sekali saja di awal
    [Symbol.iterator]() {
      // itu akan mengambalikan objeck iterator :
      // Selanjutnya, (for..of) hanya berfubgsi dengan object iterator, yang mana akan meminta nilai selanjutnya
      return {
        current: this.from,
        last: this.to,
  
        // next() dipanggil pada setiap iterasi/iterator pada perulangan for..of
        next() {
          // itu seharusnya mengembalikan nilai sebagai objek
          if (this.current < this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
alert([...range]); // ini akan menuliskan 1 sampai 5

//for (let num of range) {
//  alert(num);
//}