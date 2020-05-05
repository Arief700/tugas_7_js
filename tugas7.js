let tinggiBadan = [160, 165, 168, 170, 171, 172, 175, 178, 181, 185]

console.log("menggunakan Looping FOR");
for (let i = 0; i < tinggiBadan.length; i++) {
  console.log(tinggiBadan[i] + " cm");
}

console.log("");

console.log("menggunakan For of");
for (let j of tinggiBadan) {
  console.log(j + " cm");
}
