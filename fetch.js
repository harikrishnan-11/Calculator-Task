// DOM Selection
const productContainer = document.getElementById("product-container");
const errorMessage = document.getElementById("error-message");

// Fetch Products
function fetchProducts() {

    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        })
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            showError(error.message);
        });
}

// Display Products
function displayProducts(products) {

    productContainer.innerHTML = ""; // Clean DOM

    products.forEach(product => {

        // Create elements
        const card = document.createElement("div");
        const title = document.createElement("h3");
        const image = document.createElement("img");

        // Add content
        title.textContent = product.title;
        image.src = product.image;
        image.alt = product.title;

        // Append elements
        card.appendChild(image);
        card.appendChild(title);
        productContainer.appendChild(card);
    });
}

// Show Error
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
}

// Call Function
fetchProducts();