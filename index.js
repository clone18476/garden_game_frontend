const endPoint = "http://localhost:3000/api/v1/plants"

document.addEventListener('DOMContentLoaded', () => {
    createStartGameButton();
    populateSeedBank();

    document.querySelector('button#start-game-button').addEventListener('click', () => startGame())
})

function createStartGameButton() {
    let startGameButton = document.createElement("button")
    startGameButton.innerText = "Start Game"
    startGameButton.id = "start-game-button"
    document.querySelector('.game-data').appendChild(startGameButton)
}

function startGame() {
    let cells = document.querySelectorAll('td')

    cells.forEach((cell) => {
        cell.innerHTML = ""
    })

    alert('Get ready to garden! Click any grid to plant a flower.')

    document.querySelector('#start-game-button').remove()
}

function populateSeedBank() {
    let seedBank = document.querySelector('div.main-child.seed-bank')

    fetch(endPoint)
    .then(response => response.json())
    .then(plants => {
        plants.data.forEach(plant => {
            let plantDiv = document.createElement('div')
            plantDiv.classList.add('flower')
            let img = document.createElement('img')
            img.src = plant.attributes.img_url

            let par1 = document.createElement('p')
            par1.innerText = `Name: ${plant.attributes.name}`
            let par2 = document.createElement('p')
            par2.innerText = `Time to Grow: ${plant.attributes.time_to_grow} minutes`

            plantDiv.appendChild(img)
            plantDiv.appendChild(par1)
            plantDiv.appendChild(par2)

            seedBank.appendChild(plantDiv)
        })
    })
}

// part of plant_flower => collect all the cells in the grid programatically (so you can add new levels) and add click event listeners => document.querySelectorAll('td')

// NOTE: event.detail is how you access the click count
