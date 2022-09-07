/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

const a = 8;
const b = 4;

function Calculator(a, b) {
  this.sum = a + b;
  this.sutraction = a - b;
  this.multiplication = a * b;
  this.divsion = a / b;
}

const calc = new Calculator(a, b);

console.log(calc);
