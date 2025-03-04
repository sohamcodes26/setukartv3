// Get the register button
const registerBtn = document.getElementById('registerBtn'); // Assuming you have a register button

// Function to create the registration popup card dynamically
function createRegisterPopup() {
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
    
    // Add OTP Field
    const otpLabel = document.createElement('label');
    otpLabel.setAttribute('for', 'otp');
    otpLabel.innerHTML = 'OTP (One-Time Password):';
    
    const otpInput = document.createElement('input');
    otpInput.setAttribute('type', 'text');
    otpInput.setAttribute('id', 'otp');
    otpInput.setAttribute('name', 'otp');
    otpInput.setAttribute('required', '');
    
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'Register';
    
    // Append elements to form
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(otpLabel);  // Append OTP label
    form.appendChild(otpInput);  // Append OTP input
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
    
    // Submit the form and remove the popup, then show the OTP input form
    form.onsubmit = function(e) {
        e.preventDefault(); // Prevent form submission for demo
        alert('Registered!'); // Show registration success message
        overlay.remove(); // Remove the popup card

        // Show OTP verification (you can replace this with actual OTP validation)
        window.location.href = 'form.html';
    };
    
    // Close the popup if the user clicks outside the popup content
    overlay.onclick = function(event) {
        if (event.target === overlay) {
            overlay.remove();
        }
    };
}

// Function to create OTP verification form
function createOTPVerification() {
    // Create the overlay background
    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    
    // Create the popup card for OTP verification
    const popupCard = document.createElement('div');
    popupCard.classList.add('popup-card');
    
    // Create the close button
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';

    // Create OTP form
    const form = document.createElement('form');
    
    const otpLabel = document.createElement('label');
    otpLabel.setAttribute('for', 'otp');
    otpLabel.innerHTML = 'Enter OTP:';
    
    const otpInput = document.createElement('input');
    otpInput.setAttribute('type', 'text');
    otpInput.setAttribute('id', 'otp');
    otpInput.setAttribute('name', 'otp');
    
    
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'Verify OTP';
    
    // Append elements to form
    form.appendChild(otpLabel);
    form.appendChild(otpInput);
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
    
    // Handle OTP form submission
    form.onsubmit = function(e) {
        e.preventDefault(); // Prevent form submission for demo
        alert('OTP Verified!'); // Show OTP verification success message
        overlay.remove(); // Remove the popup card
        // Redirect to a new page or perform further actions
        window.location.href = 'welcome.html'; // Example redirect
    };
    
    // Close the popup if the user clicks outside the popup content
    overlay.onclick = function(event) {
        if (event.target === overlay) {
            overlay.remove();
        }
    };
}

// Event listener to show the registration popup when the "Register" button is clicked
registerBtn.addEventListener('click', createRegisterPopup);
