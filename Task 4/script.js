/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

window.onload = () => {
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => createCard(data))
}

let createCard = (data) => {
    let output = document.querySelector('#output')
    data.forEach(car => {
        let div = document.createElement('div')
        div.classList.add('carCard')
        let h2 = document.createElement('h2')
        h2.textContent = car.brand
        div.append(h2)
        let ul = document.createElement('ul')
        car.models.forEach(model => {
            let li = document.createElement('li')
            li.textContent = model
            ul.append(li)
        })
        div.append(ul)
        output.append(div)
    });

}