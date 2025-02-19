// Get elements
const signInButton = document.querySelector('.signinbutton-front');
const popup = document.getElementById('loginpopup');
const closePopupBtn = document.getElementById('closePopupBtn');
const layoutPage = document.querySelector('.layout-page');

// Function to open popup and dim the background
function openPopup() {
    popup.classList.add('active'); // Show the popup
    layoutPage.style.opacity = 0.5; // Dim the background
    layoutPage.style.pointerEvents = 'none'; // Disable interactions with the background
}

// Function to close popup and restore background
function closePopup() {
    popup.classList.remove('active'); // Hide the popup
    layoutPage.style.opacity = 1; // Restore background opacity
    layoutPage.style.pointerEvents = 'auto'; // Re-enable interactions with the background
}

// Event listener for the "Sign In" button
signInButton.addEventListener('click', openPopup);

// Event listener for the close button in the popup
closePopupBtn.addEventListener('click', closePopup);

// Prevent closing when clicking inside the popup content
popup.addEventListener('click', (event) => {
    // If the click target is the popup background (not the content)
    if (event.target === popup) {
        closePopup();
    }
});

// Prevent the popup from closing if you click inside the content
popup.querySelector('.form').addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the event from propagating to the background
});
