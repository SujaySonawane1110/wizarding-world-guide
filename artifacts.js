function openModal(card) {
    const name = card.getAttribute('data-name');
    const imgSrc = card.getAttribute('data-img');
    const desc = card.getAttribute('data-desc');
    const link = card.getAttribute('data-link');

    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('modal-link').href = link || '#';

    document.getElementById('artifact-modal').style.display = "flex";
}

function closeModal() {
    document.getElementById('artifact-modal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('artifact-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function filterArtifacts() {
    let input = document.getElementById('searchBox').value.trim().toLowerCase();
    let cards = document.getElementsByClassName('place-card');
    
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let nameElement = card.getElementsByTagName('h3')[0];
        
        if (nameElement) {
            let nameText = nameElement.innerText.toLowerCase();
            if (nameText.includes(input)) {
                card.style.display = "";      
            } else {
                card.style.display = "none";  
            }
        }
    }
}
