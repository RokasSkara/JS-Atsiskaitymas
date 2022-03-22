/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    sum = (a, b) => (a + b)
    subtraction = (a, b) => (a - b)
    multiplication = (a, b) => (a * b)
    division = (a, b) => (a / b)
}

let test = new Calculator()
console.log('Sum ', test.sum(2, 3))
console.log('Subtraction ', test.subtraction(2, 3))
console.log('Multiplication ', test.multiplication(2, 3))
console.log('Division ', test.division(2, 3))
