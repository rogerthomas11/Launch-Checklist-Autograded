// Write your JavaScript code here!


//require("./scriptHelper");

window.addEventListener("load", function() {
    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse = planetsReturned;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     // console.log(listedPlanets);
    //     }).then(function () {
    //         // console.log(listedPlanets);
    //         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    //         planet = pickPlanet(listedPlanets);

    //         let name = planet.name;
    //         let diameter = planet.diameter;
    //         let star = planet.star;
    //         let distance = planet.distance;
    //         let moons = planet.moons;
    //         let imageUrl = planet.image;

    //         addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    //     });
    
    let button = document.getElementById("formSubmit");
    button.addEventListener("click", function(event) {
        list = document.getElementById("faultyItems");
        pilot = document.querySelector("input[name=pilotName]").value;
        copilot = document.querySelector("input[name=copilotName]").value;
        fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        cargoLevel = document.querySelector("input[name=cargoMass]").value;

        event.preventDefault();
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });
 });

