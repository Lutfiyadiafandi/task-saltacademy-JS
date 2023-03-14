// Lutfiyadi Afandi


// Genap
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Ganjil
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}

// Fibbonaci
let a = 0;
let b = 1;
let c;

while (a <= 100) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
}

function checkPrima(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
// console.log(checkPrima(17))

function checkPalindrome(str) {
    // Ubah jadi lowercase dulu, biar gak erorr
    str = str.toLowerCase();
    return str === str.split("").reverse().join("")
  }
// console.log(checkPalindrome("kasur ini rusak"))
