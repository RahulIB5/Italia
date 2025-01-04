const form = document.getElementById("thanks"); 
const successMessage = 
    document.getElementById("congo"); 

form.addEventListener("submit", function (e) { 
    e.preventDefault(); 
    successMessage.style.display = "block"; 
}); 


// Sample review data
const reviews = [
    { name: "Rahul", review: "This was an amazing experience! Highly recommend it." },
    { name: "Raghav", review: "A wonderful trip! The sights were breathtaking." },
    { name: "Prateek", review: "I had a great time, but the weather could have been better." },
    { name: "Prathiksha", review: "Absolutely loved the food and culture!" },
    { name: "Pravas", review: "An unforgettable journey, I can't wait to go back!" }
];

// Function to display reviews
function displayReviews() {
    const reviewsContainer = document.getElementById('reviews');

    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `<strong>${review.name}</strong><p>${review.review}</p>`;
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Call the function to display reviews on page load
window.onload = displayReviews;