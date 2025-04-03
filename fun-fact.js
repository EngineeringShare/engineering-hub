document.addEventListener("DOMContentLoaded", function () {
    const facts = [
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still safe to eat.",
        "Octopuses have three hearts and blue blood!",
        "Bananas are berries, but strawberries are not.",
        "A day on Venus is longer than a year on Venus.",
        "Sharks predate trees by over 200 million years."
    ];
    
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    
    document.getElementById("fun-fact").innerText = randomFact;
});
