// Salgados - 12u por pessoa +3h - 30u
// Doces - 14u por pessoa +3h - 28u
// Bolo - 1 fatia por pessoa
// Bebidas - 1000ml por pessoa +3h - 2200ml
// Crianças /2

let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputTimeParty = document.getElementById("timeParty");

let inputResult = document.getElementById("result");

function calcule() {
    console.log("Calculating...");

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let timeParty = inputTimeParty.value;

    let amountSnacks = snacksPerPerson(timeParty) * adults + (snacksPerPerson(timeParty) / 2 * kids);

    let amountSweets = sweetsPerPerson(timeParty) * adults + (sweetsPerPerson(timeParty) / 2 * kids);
    
    let pieceOfCake = piecePerPerson(timeParty) * adults + (piecePerPerson(timeParty) * kids);

    let cupOfDrink = drinkPerPerson(timeParty) * adults + (drinkPerPerson(timeParty) * kids);

    result.innerHTML = `<p>${amountSnacks} unidades de salgado</p>`
    result.innerHTML += `<p>${amountSweets} unidades de doce</p>`
    result.innerHTML += `<p>${pieceOfCake} pedaços de bolo</p>`
    result.innerHTML += `<p>${Math.ceil(cupOfDrink / 200)} copos de 200ml</p>`

}

function snacksPerPerson(timeParty){
    if (timeParty >= 3){
        return 30;
    } else {
        return 12;
    }
}

function sweetsPerPerson(timeParty){
    if (timeParty >= 3){
        return 28;
    } else {
        return 14;
    }
}

function piecePerPerson(timeParty){
    if (timeParty >= 3){
        return 2;
    } else {
        return 1;
    }
}

function drinkPerPerson(timeParty){
    if (timeParty >= 3){
        return 2200;
    } else {
        return 1000;
    }
}
