// ==========================================================================
// WIZPEDIA CHARACTERS CAROUSEL & SEARCH ENGINE
// ==========================================================================

// Global character database for redirecting search queries
const CHARACTER_DB = {
    // 1. Trio
    "harry potter": "trio.html#hp",
    "harry": "trio.html#hp",
    "potter": "trio.html#hp",
    "hermione granger": "trio.html#hg",
    "hermione": "trio.html#hg",
    "granger": "trio.html#hg",
    "ron weasley": "trio.html#rw",
    "ron": "trio.html#rw",
    "weasley": "trio.html#rw",
    // 2. Staff
    "albus dumbledore": "staff.html#ad",
    "albus": "staff.html#ad",
    "dumbledore": "staff.html#ad",
    "minerva mcgonagall": "staff.html#mm",
    "minerva": "staff.html#mm",
    "mcgonagall": "staff.html#mm",
    "severus snape": "staff.html#ss",
    "severus": "staff.html#ss",
    "snape": "staff.html#ss",
    "filius flitwick": "staff.html#ff",
    "filius": "staff.html#ff",
    "flitwick": "staff.html#ff",
    "pomona sprout": "staff.html#ps",
    "pomona": "staff.html#ps",
    "sprout": "staff.html#ps",
    "sybill trelawney": "staff.html#st",
    "sybill": "staff.html#st",
    "trelawney": "staff.html#st",
    "horace slughorn": "staff.html#hs",
    "horace": "staff.html#hs",
    "slughorn": "staff.html#hs",
    "rubeus hagrid": "staff.html#rh",
    "rubeus": "staff.html#rh",
    "hagrid": "staff.html#rh",
    "argus filch": "staff.html#af",
    "argus": "staff.html#af",
    "filch": "staff.html#af",
    "quirinus quirrell": "staff.html#qq",
    "quirinus": "staff.html#qq",
    "quirrell": "staff.html#qq",
    "gilderoy lockhart": "staff.html#gl",
    "gilderoy": "staff.html#gl",
    "lockhart": "staff.html#gl",
    "madam hooch": "staff.html#mh",
    "hooch": "staff.html#mh",
    "firenze": "staff.html#fir",
    "aurora sinistra": "staff.html#aurora-sinistra",
    "sinistra": "staff.html#aurora-sinistra",
    "septima vector": "staff.html#septima-vector",
    "vector": "staff.html#septima-vector",
    "bathsheda babbling": "staff.html#bathsheda-babbling",
    "babbling": "staff.html#bathsheda-babbling",
    "charity burbage": "staff.html#charity-burbage",
    "burbage": "staff.html#charity-burbage",
    "cuthbert binns": "staff.html#cuthbert-binns",
    "binns": "staff.html#cuthbert-binns",
    "silvanus kettleburn": "staff.html#silvanus-kettleburn",
    "kettleburn": "staff.html#silvanus-kettleburn",
    "wilhelmina grubbly-plank": "staff.html#wilhelmina-grubbly-plank",
    "grubbly-plank": "staff.html#wilhelmina-grubbly-plank",
    "amycus carrow": "staff.html#amycus-carrow",
    "amycus": "staff.html#amycus-carrow",
    "alecto carrow": "staff.html#alecto-carrow",
    "alecto": "staff.html#alecto-carrow",
    "madam pince": "staff.html#madam-pince",
    "pince": "staff.html#madam-pince",
    "poppy pomfrey": "staff.html#poppy-pomfrey",
    "pomfrey": "staff.html#poppy-pomfrey",
    "ogg": "staff.html#ogg",
    // 3. Students
    "oliver wood": "students.html#olw",
    "oliver": "students.html#olw",
    "draco malfoy": "students.html#dm",
    "draco": "students.html#dm",
    "vincent crabbe": "students.html#vc",
    "crabbe": "students.html#vc",
    "gregory goyle": "students.html#gg",
    "goyle": "students.html#gg",
    "pansy parkinson": "students.html#pp",
    "pansy": "students.html#pp",
    "cormac mclaggen": "students.html#cm",
    "mclaggen": "students.html#cm",
    "cedric diggory": "students.html#cd",
    "cedric": "students.html#cd",
    "fleur delacour": "students.html#fd",
    "fleur": "students.html#fd",
    "viktor krum": "students.html#vk",
    "viktor": "students.html#vk",
    "krum": "students.html#vk",
    "romilda vane": "students.html#romilda-vane",
    "romilda": "students.html#romilda-vane",
    "demelza robins": "students.html#demelza-robins",
    "demelza": "students.html#demelza-robins",
    "jimmy peakes": "students.html#jimmy-peakes",
    "peakes": "students.html#jimmy-peakes",
    "ritchie coote": "students.html#ritchie-coote",
    "coote": "students.html#ritchie-coote",
    "blaise zabini": "students.html#blaise-zabini",
    "blaise": "students.html#blaise-zabini",
    "theodore nott": "students.html#theodore-nott",
    "nott": "students.html#theodore-nott",
    "millicent bulstrode": "students.html#millicent-bulstrode",
    "bulstrode": "students.html#millicent-bulstrode",
    "marcus flint": "students.html#marcus-flint",
    "flint": "students.html#marcus-flint",
    "adrian pucey": "students.html#adrian-pucey",
    "pucey": "students.html#adrian-pucey",
    "terence higgs": "students.html#terence-higgs",
    "higgs": "students.html#terence-higgs",
    "penelope clearwater": "students.html#penelope-clearwater",
    "clearwater": "students.html#penelope-clearwater",
    "roger davies": "students.html#roger-davies",
    "davies": "students.html#roger-davies",
    "marcus belby": "students.html#marcus-belby",
    "belby": "students.html#marcus-belby",
    "marietta edgecombe": "students.html#marietta-edgecombe",
    "edgecombe": "students.html#marietta-edgecombe",
    "zacharias smith": "students.html#zacharias-smith",
    "justin finch-fletchley": "students.html#justin-finch-fletchley",
    "wayne hopkins": "students.html#wayne-hopkins",
    "megan jones": "students.html#megan-jones",
    // 4. Dumbledore's Army
    "neville longbottom": "da.html#nl",
    "neville": "da.html#nl",
    "longbottom": "da.html#nl",
    "ginny weasley": "da.html#gw",
    "ginny": "da.html#gw",
    "luna lovegood": "da.html#ll",
    "luna": "da.html#ll",
    "lovegood": "da.html#ll",
    "fred weasley": "da.html#fgw",
    "george weasley": "da.html#fgw",
    "fred and george": "da.html#fgw",
    "cho chang": "da.html#cc",
    "cho": "da.html#cc",
    "dean thomas": "da.html#dean-thomas",
    "seamus finnigan": "da.html#seamus-finnigan",
    "seamus": "da.html#seamus-finnigan",
    "lavender brown": "da.html#lavender-brown",
    "lavender": "da.html#lavender-brown",
    "parvati patil": "da.html#parvati-patil",
    "parvati": "da.html#parvati-patil",
    "lee jordan": "da.html#lee-jordan",
    "colin creevey": "da.html#colin-creevey",
    "colin": "da.html#colin-creevey",
    "dennis creevey": "da.html#dennis-creevey",
    "alicia spinnet": "da.html#alicia-spinnet",
    "angelina johnson": "da.html#angelina-johnson",
    "katie bell": "da.html#katie-bell",
    "padma patil": "da.html#padma-patil",
    "michael corner": "da.html#michael-corner",
    "terry boot": "da.html#terry-boot",
    "anthony goldstein": "da.html#anthony-goldstein",
    "hannah abbott": "da.html#hannah-abbott",
    "susan bones": "da.html#susan-bones",
    "ernie macmillan": "da.html#ernie-macmillan",
    // 5. Order
    "sirius black": "order.html#sb",
    "sirius": "order.html#sb",
    "black": "order.html#sb",
    "remus lupin": "order.html#rl",
    "remus": "order.html#rl",
    "lupin": "order.html#rl",
    "alastor moody": "order.html#am",
    "mad-eye moody": "order.html#am",
    "moody": "order.html#am",
    "nymphadora tonks": "order.html#nt",
    "tonks": "order.html#nt",
    "kingsley shacklebolt": "order.html#ks",
    "kingsley": "order.html#ks",
    "shacklebolt": "order.html#ks",
    "arthur weasley": "order.html#aw",
    "arthur": "order.html#aw",
    "molly weasley": "order.html#mw",
    "molly": "order.html#mw",
    "olympe maxime": "order.html#ow",
    "madame maxime": "order.html#ow",
    "bill weasley": "order.html#bw",
    "bill": "order.html#bw",
    "charlie weasley": "order.html#cw",
    "charlie": "order.html#cw",
    "james potter": "order.html#james-potter",
    "lily potter": "order.html#lily-potter",
    "frank longbottom": "order.html#frank-longbottom",
    "alice longbottom": "order.html#alice-longbottom",
    "mundungus fletcher": "order.html#mundungus-fletcher",
    "mundungus": "order.html#mundungus-fletcher",
    "arabella figg": "order.html#arabella-figg",
    "elphias doge": "order.html#elphias-doge",
    "emmeline vance": "order.html#emmeline-vance",
    "sturgis podmore": "order.html#sturgis-podmore",
    "hestia jones": "order.html#hestia-jones",
    "dedalus diggle": "order.html#dedalus-diggle",
    // 6. Death Eaters
    "lord voldemort": "death-eaters.html#lv",
    "voldemort": "death-eaters.html#lv",
    "tom riddle": "death-eaters.html#lv",
    "bellatrix lestrange": "death-eaters.html#bl",
    "bellatrix": "death-eaters.html#bl",
    "lucius malfoy": "death-eaters.html#lm",
    "lucius": "death-eaters.html#lm",
    "narcissa malfoy": "death-eaters.html#nm",
    "narcissa": "death-eaters.html#nm",
    "barty crouch jr": "death-eaters.html#bcj",
    "barty crouch jr.": "death-eaters.html#bcj",
    "regulus black": "death-eaters.html#reg",
    "peter pettigrew": "death-eaters.html#ppg",
    "wormtail": "death-eaters.html#ppg",
    "fenrir greyback": "death-eaters.html#fg",
    "greyback": "death-eaters.html#fg",
    "antonin dolohov": "death-eaters.html#antonin-dolohov",
    "dolohov": "death-eaters.html#antonin-dolohov",
    "yaxley": "death-eaters.html#yaxley",
    "augustus rookwood": "death-eaters.html#augustus-rookwood",
    "rookwood": "death-eaters.html#augustus-rookwood",
    "rodolphus lestrange": "death-eaters.html#rodolphus-lestrange",
    "rabastan lestrange": "death-eaters.html#rabastan-lestrange",
    "scabior": "death-eaters.html#scabior",
    "igor karkaroff": "death-eaters.html#igor-karkaroff",
    "karkaroff": "death-eaters.html#igor-karkaroff",
    "evan rosier": "death-eaters.html#evan-rosier",
    "wilkes": "death-eaters.html#wilkes",
    // 7. Ministry
    "cornelius fudge": "ministry.html#cf",
    "fudge": "ministry.html#cf",
    "rufus scrimageour": "ministry.html#rs",
    "rufus": "ministry.html#rs",
    "scrimgeour": "ministry.html#rs",
    "pius thicknesse": "ministry.html#pius-thicknesse",
    "thicknesse": "ministry.html#pius-thicknesse",
    "dolores umbridge": "ministry.html#du",
    "umbridge": "ministry.html#du",
    "barty crouch sr": "ministry.html#bc",
    "barty crouch sr.": "ministry.html#bc",
    "ludo bagman": "ministry.html#lbg",
    "bagman": "ministry.html#lbg",
    "percy weasley": "ministry.html#pw",
    "percy": "ministry.html#pw",
    "amos diggory": "ministry.html#amos-diggory",
    "broderick bode": "ministry.html#broderick-bode",
    "mafalda hopkirk": "ministry.html#mafalda-hopkirk",
    "reginald cattermole": "ministry.html#reginald-cattermole",
    "mary cattermole": "ministry.html#mary-cattermole",
    "albert runcorn": "ministry.html#albert-runcorn",
    // 8. Ghosts
    "nearly headless nick": "ghosts.html#nh",
    "nick": "ghosts.html#nh",
    "bloody baron": "ghosts.html#bb",
    "baron": "ghosts.html#bb",
    "grey lady": "ghosts.html#gl",
    "helena ravenclaw": "ghosts.html#gl",
    "fat friar": "ghosts.html#ffr",
    "moaning myrtle": "ghosts.html#mmg",
    "myrtle": "ghosts.html#mmg",
    "peeves": "ghosts.html#pv",
    "wailing widow": "ghosts.html#wailing-widow",
    // 9. Legends
    "merlin": "legends.html#mer",
    "godric gryffindor": "legends.html#godric-gryffindor",
    "helga hufflepuff": "legends.html#helga-hufflepuff",
    "rowena ravenclaw": "legends.html#rowena-ravenclaw",
    "salazar slytherin": "legends.html#salazar-slytherin",
    "morgan le fay": "legends.html#morgan-le-fay",
    "bathilda bagshot": "legends.html#bbg",
    "nicolas flamel": "legends.html#nf",
    "flamel": "legends.html#nf",
    "perenelle flamel": "legends.html#perenelle-flamel",
    "gellert grindelwald": "legends.html#ggw",
    "grindelwald": "legends.html#ggw",
    "antioch peverell": "legends.html#antioch-peverell",
    "cadmus peverell": "legends.html#cadmus-peverell",
    "ignotus peverell": "legends.html#ignotus-peverell",
    "bowman wright": "legends.html#bowman-wright",
    "ignatia wildsmith": "legends.html#ignatia-wildsmith",
    // 10. Residents
    "aberforth dumbledore": "residents.html#abd",
    "aberforth": "residents.html#abd",
    "garrick ollivander": "residents.html#go",
    "ollivander": "residents.html#go",
    "xenophilius lovegood": "residents.html#xl",
    "xenophilius": "residents.html#xl",
    "rita skeeter": "residents.html#rsk",
    "rita": "residents.html#rsk",
    "skeeter": "residents.html#rsk",
    "madam rosmerta": "residents.html#madam-rosmerta",
    "rosmerta": "residents.html#madam-rosmerta",
    "tom": "residents.html#tom-leaky-cauldron",
    "florean fortescue": "residents.html#florean-fortescue",
    "fortescue": "residents.html#florean-fortescue",
    "mr borgin": "residents.html#mr-borgin",
    "mr. borgin": "residents.html#mr-borgin",
    "borgin": "residents.html#mr-borgin",
    "fat lady": "residents.html#fat-lady",
    "sir cadogan": "residents.html#sir-cadogan",
    "cadogan": "residents.html#sir-cadogan",
    "walburga black": "residents.html#walburga-black",
    "ariana dumbledore": "residents.html#ariana-dumbledore",
    "vernon dursley": "residents.html#vernon-dursley",
    "vernon": "residents.html#vernon-dursley",
    "petunia dursley": "residents.html#petunia-dursley",
    "petunia": "residents.html#petunia-dursley",
    "dudley dursley": "residents.html#dudley-dursley",
    "dudley": "residents.html#dudley-dursley",
    "marge dursley": "residents.html#marge-dursley",
    "marge": "residents.html#marge-dursley",
    "mr granger": "residents.html#mr-granger",
    "mrs granger": "residents.html#mrs-granger",
    "frank bryce": "residents.html#frank-bryce",
    "stan shunpike": "residents.html#stan-shunpike",
    "shunpike": "residents.html#stan-shunpike",
    "ernie prang": "residents.html#ernie-prang",
    "shrunked head": "residents.html#shrunken-head",
    // 11. Beings
    "dobby": "beings.html#dob",
    "kreacher": "beings.html#kr",
    "griphook": "beings.html#gri",
    "winky": "beings.html#winky",
    "hokey": "beings.html#hokey",
    "aragog": "beings.html#aragog",
    "buckbeak": "beings.html#buckbeak",
    "fawkes": "beings.html#fawkes",
    "nagini": "beings.html#nagini",
    "hedwig": "beings.html#hedwig",
    "crookshanks": "beings.html#crookshanks",
    "scabbers": "beings.html#scabbers",
    "fang": "beings.html#fang",
    "fluffy": "beings.html#fluffy"
};

// Global search engine implementation
function checkSearch() {
    let input = document.getElementById('searchBox').value.trim().toLowerCase();
    if (!input) {
        alert("Please enter a character name to search.");
        return;
    }
    
    // 1. Direct key match
    if (CHARACTER_DB[input]) {
        window.location.href = CHARACTER_DB[input];
        return;
    }
    
    // 2. Partial search matching
    for (let key in CHARACTER_DB) {
        if (key.includes(input) || input.includes(key)) {
            window.location.href = CHARACTER_DB[key];
            return;
        }
    }
    
    // 3. Fallback: search words individually
    let words = input.split(/\s+/);
    for (let word of words) {
        if (word.length > 2) {
            for (let key in CHARACTER_DB) {
                if (key.includes(word)) {
                    window.location.href = CHARACTER_DB[key];
                    return;
                }
            }
        }
    }
    
    alert(`No character named "${input}" found in the archives.`);
}

// Support hitting 'Enter' inside the search input box
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchBox");
    if (searchInput) {
        searchInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                checkSearch();
            }
        });
    }
    
    // Initialize Carousel
    initCarousel();
});


// ==========================================================================
// HORIZONTAL CENTERED CAROUSEL SYSTEM
// ==========================================================================

let currentIndex = 0;
let cards = [];
let track = null;
let viewport = null;
let activeLabel = null;

function initCarousel() {
    track = document.getElementById("carouselTrack");
    viewport = document.getElementById("carouselViewport");
    activeLabel = document.getElementById("active-group-name");
    
    if (!track || !viewport) return;
    
    cards = Array.from(track.getElementsByClassName("carousel-card"));
    if (cards.length === 0) return;
    
    // Prevent default anchor clicks for carousel sliding behavior
    cards.forEach((card, index) => {
        card.addEventListener("click", (event) => {
            // If the card is not the active centered card, slide to it and prevent navigation
            if (index !== currentIndex) {
                event.preventDefault();
                currentIndex = index;
                updateCarousel();
            }
            // If it is active, let the link follow through naturally to open the page
        });
    });
    
    // Setup resize listener to keep it centered on window resize
    window.addEventListener("resize", updateCarousel);
    
    // Initial display
    updateCarousel();
}

// Shifts the slide by +1 or -1
function moveSlide(direction) {
    currentIndex = (currentIndex + direction + cards.length) % cards.length;
    updateCarousel();
}

// Main update logic for track position, scaling, active state classes, and label
function updateCarousel() {
    if (cards.length === 0 || !track || !viewport) return;
    
    const viewportWidth = viewport.offsetWidth;
    const activeCard = cards[currentIndex];
    
    // Get card width and gap dynamically (flex values from CSS)
    const cardWidth = activeCard.offsetWidth;
    const cardLeft = activeCard.offsetLeft;
    
    // Math to center the card inside the viewport:
    // Offset = (Viewport Center) - (Card Position on Track relative to its start) - (Half of Card Width)
    const offset = (viewportWidth / 2) - cardLeft - (cardWidth / 2);
    
    // Apply translation using CSS transform for smooth animation
    track.style.transform = `translateX(${offset}px)`;
    
    // Set active/inactive classes and labels
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });
    
    // Update the group name below the active card
    if (activeLabel) {
        const activeName = activeCard.getAttribute("data-name");
        activeLabel.textContent = activeName;
        
        // Retrigger the fade-in animation
        activeLabel.style.animation = 'none';
        activeLabel.offsetHeight; /* trigger reflow */
        activeLabel.style.animation = null;
    }
}