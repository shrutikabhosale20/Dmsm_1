const products = [
    { name: "iPhone 14", category: "mobile", price: 799, image: "./iphone.avif" },
    { name: "Samsung Galaxy S23", category: "mobile", price: 699, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf" },
    { name: "Dell Laptop", category: "laptop", price: 999, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { name: "HP Laptop", category: "laptop", price: 899, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3" },
    { name: "Wireless Earbuds", category: "accessory", price: 99, image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46" },
    { name: "Bluetooth Speaker", category: "accessory", price: 129, image: "./speaker.avif" }
];

const productContainer = document.getElementById("productContainer");

function displayProducts(list) {
    productContainer.innerHTML = "";

    if (list.length === 0) {
        productContainer.innerHTML = "<p>No products found</p>";
        return;
    }

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}">
            <div class="content">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p class="price">$${product.price}</p>
                <button class="shop-btn" onclick="shopNow('${product.name}')">Shop Now</button>
            </div>
        `;

        productContainer.appendChild(card);
    });
}

function applyFilters() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const priceFilter = document.getElementById("filterDropdown").value;

    let filtered = products.filter(p => {
        const matchText =
            p.name.toLowerCase().includes(searchText) ||
            p.category.toLowerCase().includes(searchText) ||
            searchText === "" ||
            searchText === "electronic" ||
            searchText === "electronics";

        const matchCategory = category === "all" || p.category === category;

        return matchText && matchCategory;
    });

    if (priceFilter === "low-high") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (priceFilter === "high-low") {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

function shopNow(productName) {
    alert("You selected: " + productName);
}

/* Initial Load */
displayProducts(products);