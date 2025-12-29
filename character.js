
function checkSearch() {
    // 1. Get the user input
    let input = document.getElementById('searchBox').value.trim().toLowerCase();
    
    // 2. Get all elements with your NEW class name "chrc"
    let cards = document.getElementsByClassName('chrc');
    
    // 3. Loop through them
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        
        // Find the <h3> inside the card (where the name is)
        let nameElement = card.getElementsByTagName('h3')[0];
        
        if (nameElement) {
            let nameText = nameElement.innerText.toLowerCase();

            // 4. The Logic: Show if match, Hide if no match
            if (nameText.includes(input)) {
                card.style.display = "";      // Show it
            } else {
                card.style.display = "none";  // Hide it
            }
        }
    }
}