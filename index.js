const endPoint = "http://localhost:3000/api/v1/plants"

document.addEventListener('DOMContentLoaded', () => {
    createStartGameButton();

    document.querySelector('button#start-game-button').addEventListener('click', () => alert('You clicked Start Game'))
})

function createStartGameButton() {
    let startGameButton = document.createElement("button")
    startGameButton.innerText = "Start Game"
    startGameButton.id = "start-game-button"
    document.querySelector('.main-child.garden').appendChild(startGameButton)
}

// function getPlants() {
//     fetch(endPoint) // returns a promise
//     .then(response => response.json()) // parse promise into json
//     .then(plants => { // do something with the json
//         console.log(plants);
//         plants.data.forEach(plant => {
//             // const plantMarkup = 
//             // <div> 
//             //     <h3>${plant.attributes.name}</h3>
//             // </div> ;

//             // document.querySelector('#plants-container').innerHTML += plantMarkup

//             document.querySelector('#plants-container').innerHTML += plant.attributes.name
//         })
//     })
// }

// NOTE: event.detail is how you access the click count
