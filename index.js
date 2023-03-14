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
