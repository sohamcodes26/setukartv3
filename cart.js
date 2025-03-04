// Function to load cart items from localStorage
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartBadge = document.getElementById('badge');
    
    // Update cart badge count - show the number of unique items
    if (cartBadge) {
        cartBadge.innerText = cartItems.length;
    }

    // Get cart content container
    const cartContent = document.getElementById('cartContent');
    
    // If cart is empty, show empty cart message
    if (cartItems.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <a href="index2.html">Continue Shopping</a>
            </div>
        `;
        return;
    }

    // Calculate cart totals
    let subtotal = 0;
    let totalItems = 0;

    // Create cart items HTML
    let cartItemsHTML = '<div class="cart-items">';
    
    cartItems.forEach((item, index) => {
        // Get numerical price value for calculations
        const priceText = item.price;
        const priceMatch = priceText.match(/(\d+)Rs/);
        const priceValue = priceMatch ? parseInt(priceMatch[1]) : 0;
        
        // Add to subtotal
        const itemTotal = priceValue * item.quantity;
        subtotal += itemTotal;
        totalItems += item.quantity;
        
        cartItemsHTML += `
            <div class="cart-item" data-index="${index}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-company">${item.company}</div>
                    <div class="cart-item-price">${item.price}</div>
                    <div class="cart-item-quantity">
                        <span>Quantity:</span>
                        <button class="quantity-btn decrease-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn increase-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        <button class="cart-item-remove" onclick="removeItem(${index})">Remove</button>
                    </div>
                </div>
                <div class="cart-item-total">${priceValue * item.quantity}Rs</div>
            </div>
        `;
    });
    
    cartItemsHTML += '</div>';
    
    // Calculate shipping (just for demo - 5% of subtotal)
    const shipping = Math.round(subtotal * 0.05);
    const taxes = Math.round(subtotal * 0.18); // 18% tax for example
    const total = subtotal + shipping + taxes;
    
    // Add cart summary
    cartItemsHTML += `
        <div class="cart-summary">
            <div class="cart-summary-row">
                <div class="cart-summary-label">Subtotal (${totalItems} items):</div>
                <div class="cart-summary-value">${subtotal}Rs</div>
            </div>
            <div class="cart-summary-row">
                <div class="cart-summary-label">Shipping & Handling:</div>
                <div class="cart-summary-value">${shipping}Rs</div>
            </div>
            <div class="cart-summary-row">
                <div class="cart-summary-label">Taxes (18%):</div>
                <div class="cart-summary-value">${taxes}Rs</div>
            </div>
            <div class="cart-summary-row cart-summary-total">
                <div class="cart-summary-label">Order Total:</div>
                <div class="cart-summary-value">${total}Rs</div>
            </div>
        </div>
        
        <div class="cart-actions">
            <a href="index.html" class="continue-shopping">Continue Shopping</a>
            <button class="checkout-btn" onclick="checkout()">Proceed to Checkout</button>
        </div>
    `;
    
    // Set cart content
    cartContent.innerHTML = cartItemsHTML;
}

// Function to update quantity
function updateQuantity(index, change) {
    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Update quantity
    cartItems[index].quantity += change;
    
    // Make sure quantity is at least 1
    if (cartItems[index].quantity < 1) {
        cartItems[index].quantity = 1;
    }
    
    // Save updated cart
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Reload cart
    loadCart();
}

// Function to remove item
function removeItem(index) {
    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Remove item at index
    cartItems.splice(index, 1);
    
    // Save updated cart
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Reload cart
    loadCart();
}

// Function for checkout
function checkout() {
    alert("Order placed successfully!");
    
    // Clear the cart after checkout
    localStorage.removeItem('cartItems');
    
    // Redirect to confirmation page (if it exists)
    // window.location.href = 'orderPlaced.html';
    
    // Or reload the current page to show empty cart
    window.location.reload();
}

// Load cart when page loads
document.addEventListener('DOMContentLoaded', loadCart);