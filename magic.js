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