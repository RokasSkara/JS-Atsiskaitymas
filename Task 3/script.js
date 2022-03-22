/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector('#btn').addEventListener('click', (e) => {
    output = document.querySelector('#output')
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => createCard(data))
    e.target.classList.add('none') // hiding button
})

let createCard = (data) => {
    let output = document.querySelector('#output')
    output.innerHTML = '' // clearout output tab
    //-------creating user cards------//
    data.forEach(user => {
        let div = document.createElement('div')
        div.classList.add('userCard')
        let h2 = document.createElement('h2')
        h2.textContent = user.login
        let img = document.createElement('img')
        img.setAttribute('src', `${user.avatar_url}`)
        img.setAttribute('alt', `Avatar img`)
        div.append(h2, img)
        output.append(div)
    });

}