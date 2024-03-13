// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    console.log(missionTarget.attributes["id"])
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";
    } else if (!isNaN(Number(testInput))) {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let h2 = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("Please enter all fields before submitting")
    } else if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && validateInput(fuelLevel) === "Is a Number" && validateInput(cargoLevel) === "Is a Number") {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000 && cargoLevel > 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            h2.innerHTML = "Shuttle Not Ready for Launch";
            h2.style.color = 'red';
        } else if (fuelLevel < 10000) {
           list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            h2.innerHTML = "Shuttle Not Ready for Launch";
            h2.style.color = 'red';
        } else if (cargoLevel > 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            h2.innerHTML = "Shuttle Not Ready for Launch";
            h2.style.color = 'red';
        } else if (fuelLevel>= 10000 && cargoLevel <= 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            h2.innerHTML = "Shuttle is Ready for Launch";
            h2.style.color = 'green';
        }
    } else {
        alert("Please enter valid fields before submitting")
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         return response.json()
        });
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planetIndex = {};
    // Get random number and get planet at that index
    planetIndex = Math.floor(Math.random() * planets.length);
    return planets[planetIndex];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;