console.log("Script loaded");

const destinations = [
    {
        name: "Big Bend National Park",
        attractions: ["Lost Mine Trail", "Santa Elena Canyon", "South Rim Trail"],
        bestTimeToVisit: "October to April",
        travelTips: "Carry plenty of water and be prepared for changing weather.",
        averageCost: "$"
    },
    {
        name: "Guadalupe Mountains National Park",
        attractions: ["Guadalupe Peak", "Devil's Hall Trail", "McKittrick Canyon"],
        bestTimeToVisit: "September to May",
        travelTips: "Start hikes early in the day to avoid afternoon thunderstorms.",
        averageCost: "$"
    },
    {
        name: "Enchanted Rock State Natural Area",
        attractions: ["Summit Trail", "Loop Trail", "Echo Canyon Trail"],
        bestTimeToVisit: "October to April",
        travelTips: "Weekdays are less crowded; bring a flashlight for cave exploration.",
        averageCost: "$"
    },
    {
        name: "Palo Duro Canyon State Park",
        attractions: ["Lighthouse Trail", "Givens, Spicer & Lowry Trail", "Capitol Peak"],
        bestTimeToVisit: "March to May",
        travelTips: "Wear sturdy shoes and bring sunscreen; the trails can be rocky and exposed.",
        averageCost: "$"
    },
    {
        name: "Pedernales Falls State Park",
        attractions: ["Wolf Mountain Trail", "Twin Falls Nature Trail", "Pedernales Falls"],
        bestTimeToVisit: "October to April",
        travelTips: "Check river conditions before visiting; trails can be slippery when wet.",
        averageCost: "$"
    }
];

function displayDestinations() {
    console.log("Displaying destinations");
    const container = document.getElementById('destinations-container');
    container.innerHTML = '';

    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';

        card.innerHTML = `
            <h2>${destination.name}</h2>
            <p class="attractions"><strong>Main Attractions:</strong> ${destination.attractions.join(', ')}</p>
            <p class="best-time"><strong>Best Time to Visit:</strong> ${destination.bestTimeToVisit}</p>
            <p class="travel-tips"><strong>Travel Tips:</strong> ${destination.travelTips}</p>
            <p class="cost"><strong>Average Cost:</strong> ${destination.averageCost}</p>
        `;

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    displayDestinations();
});
