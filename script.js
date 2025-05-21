function toggleMenu() {
    const menuLinks = document.getElementById('menuLinks');
    menuLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                button.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    const colorButtons = document.querySelectorAll('.color-btn');
    const selectedColorText = document.getElementById('selectedColor');
    
    if (colorButtons.length > 0 && selectedColorText) {
        colorButtons.forEach(button => {
            button.addEventListener('click', () => {
                colorButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const colorName = button.getAttribute('data-color');
                selectedColorText.textContent = colorName;
            });
        });
    }
    
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const quantityInput = document.getElementById('quantity');
    
    if (minusBtn && plusBtn && quantityInput) {
        minusBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });
        
        plusBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            quantityInput.value = value + 1;
        });
    }

    function changeImage(src) {
        const mainImage = document.getElementById('mainImage');
        if (mainImage) {
            mainImage.src = src;
            
            // Update active thumbnail
            const thumbnails = document.querySelectorAll('.thumbnail');
            thumbnails.forEach(thumb => {
                if (thumb.getAttribute('onclick').includes(src)) {
                    thumb.classList.add('active');
                } else {
                    thumb.classList.remove('active');
                }
            });
        }
    }

    window.changeImage = changeImage;
});

function addToCart(productId, quantity = 1) {
    console.log(`Added product ID ${productId} to cart. Quantity: ${quantity}`);
    alert('Produk telah ditambahkan ke keranjang!');
}
function updateCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    const cartCountElement = document.getElementById('cartCount');
    
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = urlParams.get('id');
            const quantity = document.getElementById('quantity').value;
            addToCart(productId, quantity);
        });
    }

    const buyNowBtn = document.querySelector('.buy-now-btn');
    
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = urlParams.get('id');
            const quantity = document.getElementById('quantity').value;
            addToCart(productId, quantity);
            alert('Redirecting to checkout page...');
        });
    }
});