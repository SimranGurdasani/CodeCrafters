document.addEventListener("DOMContentLoaded", function() {
    // Select all cards with the class "card"
    const cards = document.querySelectorAll(".card");

    // Iterate over each card
    cards.forEach(card => {
        // Extract relevant information from the card
        const name = card.querySelector(".card-title").textContent;
        const experience = card.querySelector(".card-text:nth-child(2)").textContent.split(": ")[1];
        const flexibility = card.querySelector(".card-text:nth-child(3)").textContent.split(": ")[1];
        const age = card.querySelector(".card-text:nth-child(4)").textContent.split(": ")[1];
        const stars = card.querySelectorAll(".rating i").length; // Count the number of stars for rating

        // Construct an object with the extracted information
        const serviceProvider = {
            name: name,
            experience: experience,
            flexibility: flexibility,
            age: age,
            stars: stars
        };

        // Convert the object to a JSON string
        const jsonData = JSON.stringify(serviceProvider);

        // Store the JSON string in local storage under a unique key for each service provider
        localStorage.setItem(name, jsonData);
    });
});
