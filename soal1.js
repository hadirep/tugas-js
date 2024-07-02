const prompt = require('prompt-sync')({sigint: true});
const input = prompt('Input angka: ');

// Parse input ke dalam integer
const x = parseInt(input);

// Mengecek jika x kurang dari 0
if (x < 0) {
  console.log('Error: Tidak bisa input bilangan negatif');
}
// Mengecek jika x ganjil
else if (x % 2 !== 0) {
  console.log('Error: Tidak bisa input bilangan ganjil');
}
else {
  // Menghitung akar pangkat 2 dari x
  const sqrtX = Math.sqrt(x);
  console.log(`Akar pangkat 2 dari ${x} adalah: ${sqrtX}`);
}