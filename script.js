// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        }).then(function () {
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
            
            let planet = pickPlanet(listedPlanets);

            let name = planet.name;
            let diameter = planet.diameter;
            let star = planet.star;
            let distance = planet.distance;
            let moons = planet.moons;
            let imageUrl = planet.image;
            
            addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
        });
    
    let button = document.getElementById("formSubmit");
    button.addEventListener("click", function(event) {
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;

        event.preventDefault();
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });
 });

