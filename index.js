const endPoint = "http://localhost:3000/api/v1/plants"

document.addEventListener('DOMContentLoaded', () => {
    // getPlants()
})

function getPlants() {
    fetch(endPoint) // returns a promise
    .then(response => response.json()) // parse promise into json
    .then(plants => { // do something with the json
        console.log(plants);
        plants.data.forEach(plant => {
            // const plantMarkup = 
            // <div> 
            //     <h3>${plant.attributes.name}</h3>
            // </div> ;

            // document.querySelector('#plants-container').innerHTML += plantMarkup

            document.querySelector('#plants-container').innerHTML += plant.attributes.name
        })
    })
}

// data-id=${plant.id}

// click in a grid => show what seeds you have (type - how many) in a menu => click on a flower in the menu => plant the seed => show sapling image => after time_to_grow seconds, show plant image

// Need to think through how this game is going to work before I code any further.