const endPoint = "http://localhost:3000/api/v1/plants"

document.addEventListener('DOMContentLoaded', () => {
    createStartGameButton();

    document.querySelector('button#start-game-button').addEventListener('click', () => startGame())
})

function createStartGameButton() {
    let startGameButton = document.createElement("button")
    startGameButton.innerText = "Start Game"
    startGameButton.id = "start-game-button"
    document.querySelector('.main-child.garden').appendChild(startGameButton)
}

function startGame() {
    let cells = document.querySelectorAll('td')

    cells.forEach((cell) => {
        cell.innerHTML = ""
    })

    alert('Get ready to garden! Click any grid to plant a flower.')
}

// part of plant_flower => collect all the cells in the grid programatically (so you can add new levels) and add click event listeners => document.querySelectorAll('td')

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
