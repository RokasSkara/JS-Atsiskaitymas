/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive = () => (this.budget > 100000000)
}

let spoderman = new Movie('Spoderman', 'Director', 99999999)
console.log(spoderman.wasExpensive())
let TheAmazingspoderman = new Movie('TheAmazingspoderman', 'Director', 199999999)
console.log(TheAmazingspoderman.wasExpensive())