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