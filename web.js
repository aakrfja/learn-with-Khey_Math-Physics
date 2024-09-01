function toggleLanguage() {
    const currentLanguage = document.documentElement.lang;
    const newLanguage = currentLanguage === 'en' ? 'kh' : 'en';

    document.documentElement.lang = newLanguage;

    const translatableElements = document.querySelectorAll('[data-en][data-kh]');

   
    translatableElements.forEach(el => {
        el.textContent = el.getAttribute(`data-${newLanguage}`);
        if (el.hasAttribute('placeholder')) {
            el.setAttribute('placeholder', el.getAttribute(`data-${newLanguage}`));
        }
    });

    const languageToggleButton = document.getElementById('language-toggle');
    languageToggleButton.textContent = newLanguage === 'en' ? 'ភាសាខ្មែរ' : 'English';
}

function openPDF(filePath) {
    window.open(filePath, '_blank');
}

function showPopup() {
    const searchBar = document.getElementById('searchInput');
    const popup = document.getElementById('popup');
    
    if (searchBar.value.trim() === '') {
        popup.classList.add('hidden'); // Hide popup if search bar is empty
    } else {
        popup.classList.remove('hidden'); // Show popup when there's text
        // Populate the popup with search results if needed
    }
}


function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}


document.getElementById("home").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("content").innerHTML = "<h1>Home</h1><p>Welcome to the home page.</p>";
    const menu = document.querySelector('.menu-content');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', function() {
    // Get the search query
    const searchQuery = document.getElementById('searchInput').value.trim();

    // Define a mapping between search terms and HTML files
    const searchMappings = {
        "លំហាត់": "lomhat.html",
        "សៀវភៅពុម្ព": "Textbook_Physics_8.html",
        "សៀវភៅកិច្ចការផ្ទះ": "Homework_Book.html",
        // Add more mappings as needed
    };

    // Check if the search query matches any keys in the mapping
    if (searchMappings[searchQuery]) {
        // Redirect to the corresponding HTML file
        window.location.href = searchMappings[searchQuery];
    } else {
        // If no match is found, show an alert
        alert('No results found for ' + searchQuery);
    }
});

