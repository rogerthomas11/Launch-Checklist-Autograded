// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        // alert("all fields are required")
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";
    }
    if (!isNaN(testInput)) {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let h2 = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) !== "Empty") {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    };

    if (validateInput(copilot) !== "Empty") {
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    };

    if (validateInput(fuelLevel) === "Is a Number" && fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = 'red';
    };

    if (validateInput(cargoLevel) === "Is a Number" && cargoLevel > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = 'red';
    };

    if (validateInput(fuelLevel) === "Is a Number" && fuelLevel < 10000 && validateInput(cargoLevel) === "Is a Number" && cargoLevel > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = 'red';
    };

    if (validateInput(pilot) !== "Empty" 
        && validateInput(copilot) !== "Empty" 
        && validateInput(fuelLevel) === "Is a Number" 
        && fuelLevel> 10000 
        && validateInput(cargoLevel) === "Is a Number" 
        && cargoLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        h2.innerHTML = "Shuttle is Ready for Launch";
        h2.style.color = 'green';
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planet = {};
    // Get random number and get planet at that index
    return planet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;