// Information for different travel packages
const packages = {
    couples: {
        title: "Couples Package",
        description: "A romantic journey through Italy, perfect for couples looking to explore beautiful cities and romantic spots.",
        image: "images/couples-package.jpg",  // Space for image
        cities: [
            { name: "Venice", info: "Known for its canals, beautiful architecture, and romantic gondola rides.", image: "images/venice-couple.jpg" },
            { name: "Florence", info: "Famous for its Renaissance art, architecture, and romantic atmosphere.", image: "images/florence-couple.jpg" },
            { name: "Rome", info: "The Eternal City, known for its historic landmarks and romantic ambiance.", image: "images/rome-couple.jpg" }
        ]
    },
    food: {
        title: "Food Package",
        description: "A food lover's dream come true, exploring Italy's best culinary destinations.",
        image: "images/food-package.webp",  // Space for image
        cities: [
            { name: "Bologna", info: "Famous for its rich culinary tradition, especially pasta dishes like Tagliatelle al Ragù.", image: "images/bologna.jpg" },
            { name: "Naples", info: "The birthplace of pizza, enjoy authentic Neapolitan pizza and local delicacies.", image: "images/naples.jpeg" },
            { name: "Parma", info: "Known for Parmigiano Reggiano cheese and Prosciutto di Parma.", image: "images/parma.jpg" }
        ]
    },
    tourist: {
        title: "Regular Tourist Package",
        description: "A classic tour of Italy’s must-see landmarks and cultural treasures.",
        image: "images/tourist-package.webp",  // Space for image
        cities: [
            { name: "Rome", info: "Explore ancient landmarks like the Colosseum, the Roman Forum, and Vatican City.", image: "images/rome.jpeg" },
            { name: "Florence", info: "Discover the birthplace of the Renaissance and explore world-class museums and galleries.", image: "images/florence.jpeg" },
            { name: "Venice", info: "Tour the canals, visit St. Mark's Basilica, and take a gondola ride through this unique city.", image: "images/venice.jpeg" }
        ]
    }
};

// Function to update the page based on selected package
function updatePackageDetails() {
    const packageSelect = document.getElementById('packageSelect');
    const selectedPackage = packageSelect.value;
    const packageDetails = document.getElementById('packageDetails');
    const package = packages[selectedPackage];

    packageDetails.innerHTML = `
        <h2>${package.title}</h2>
        <img src="${package.image}" alt="${package.title}" class="package-image"> <!-- Image section -->
        <p>${package.description}</p>
        <h3>Recommended Cities:</h3>
        <div class="city-cards">
            ${package.cities.map(city => `
                <div class="city-card">
                    <img src="${city.image}" alt="${city.name}" class="city-image">
                    <h4>${city.name}</h4>
                    <p>${city.info}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Toggle the visibility of more info about a city
function toggleCityInfo(cityName) {
    const cityInfo = document.getElementById(`info-${cityName}`);
    cityInfo.style.display = cityInfo.style.display === 'none' ? 'block' : 'none';
}

// Toggle the visibility of extra information about the package
function toggleMoreInfo() {
    const extraInfo = document.getElementById('extra-info');
    extraInfo.style.display = extraInfo.style.display === 'none' ? 'block' : 'none';
}

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    updatePackageDetails(); // Set default package on page load

    const packageSelect = document.getElementById('packageSelect');
    packageSelect.addEventListener('change', updatePackageDetails); // Update package details on select change
});
