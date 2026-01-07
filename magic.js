// Function to Open Modal
function openModal(button) {
    // .closest() for the nearest parent with class 'place-card'
    const card = button.closest('.magic-card');
    
    // 2. Extract the data in the HTML attributes
    const name = card.getAttribute('data-name');
    const imgSrc = card.getAttribute('data-img');
    const desc = card.getAttribute('data-desc');

    // 3. Inject into the Modal HTML elements
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-desc').innerText = desc;

    // visible banata hai
    document.getElementById('place-modal').style.display = "flex";
}

function closeModal() {
    document.getElementById('place-modal').style.display = "none";
}

// Function to Close Modal when clicking outside the box
window.onclick = function(event) {
    const modal = document.getElementById('place-modal');
    // Checks if click kiya hua target black bg hai 
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function checkSearch() {
    // 1. Get the user input
    let input = document.getElementById('searchBox').value.trim().toLowerCase();

    // 2. Get all elements with your NEW class name "magic-card"
    let cards = document.getElementsByClassName('magic-card');
    
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