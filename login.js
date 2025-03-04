// Get the login button
const loginBtn = document.getElementById('loginBtn');

// Function to create the login popup card dynamically
function createLoginPopup() {
    // Create the overlay background
    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    
    // Create the popup card
    const popupCard = document.createElement('div');
    popupCard.classList.add('popup-card');
    
    // Create the close button
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';
    
    // Create the form
    const form = document.createElement('form');
    
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.innerHTML = 'Email Address:';
    
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('required', '');
    
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.innerHTML = 'Password:';
    
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('id', 'password');
    passwordInput.setAttribute('name', 'password');
    passwordInput.setAttribute('required', '');
    
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'Login';
    
    // Append elements to form
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);
    
    // Append form and close button to the popup card
    popupCard.appendChild(closeButton);
    popupCard.appendChild(form);
    
    // Append popup card to overlay
    overlay.appendChild(popupCard);
    
    // Append overlay to the body
    document.body.appendChild(overlay);
    
    // Close popup when the close button is clicked
    closeButton.onclick = function() {
        overlay.remove();
    };
    
    // Submit the form and remove the popup (just for demo purposes)
    form.onsubmit = function(e) {
        e.preventDefault(); // Prevent form submission for demo
        alert('Logged in!'); // Show login success message
        overlay.remove(); // Remove the popup card
        window.location.href = 'index2.html';
    };
    
    // Close the popup if the user clicks outside the popup content
    overlay.onclick = function(event) {
        if (event.target === overlay) {
            overlay.remove();
        }
    };
}

// Event listener to show the login popup when the "Login" button is clicked
loginBtn.addEventListener('click', createLoginPopup);
