function toggleLanguage() {
    // Get the current language
    const currentLanguage = document.documentElement.lang;

    // Determine the new language to switch to
    const newLanguage = currentLanguage === 'en' ? 'kh' : 'en';

    // Update the lang attribute in the HTML tag
    document.documentElement.lang = newLanguage;

    // Select all elements with data-en and data-kh attributes
    const translatableElements = document.querySelectorAll('[data-en][data-kh]');

    // Loop through each element and update its text content based on the new language
    translatableElements.forEach(el => {
        el.textContent = el.getAttribute(`data-${newLanguage}`);
    });

    // Update the text on the language toggle button
    const languageToggleButton = document.getElementById('language-toggle');
    languageToggleButton.textContent = newLanguage === 'en' ? 'ភាសាខ្មែរ' : 'English';
}

function openPDF(filePath) {
    window.open(filePath, '_blank');
}
function showPopup() {
    const searchBar = document.getElementById('search-bar');
    const popup = document.getElementById('popup');
    
    if (searchBar.value.trim() === '') {
        popup.classList.add('hidden'); // Hide popup if search bar is empty
    } else {
        popup.classList.remove('hidden'); // Show popup when there's text
        // You can add logic to populate the popup with search results here
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}
document.getElementById("home").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("content").innerHTML = "<h1></h1><p></p>";
    const menu = document.querySelector('.menu-content');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
