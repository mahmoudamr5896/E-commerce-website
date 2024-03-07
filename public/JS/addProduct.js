// Wait for the document to be fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form element
    const form = document.querySelector("form");

    // Add an event listener for form submission
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get values from form fields
        const productName = document.getElementById("product-name").value;
        const productDescription = document.getElementById("product-description").value;
        const productPrice = document.getElementById("product-price").value;
        const productImage = document.getElementById("product-image").files[0]; // Assuming a single file upload

        // Perform any additional validation here if needed

        // Create a FormData object to send form data
        const formData = new FormData();
        formData.append("product-name", productName);
        formData.append("product-description", productDescription);
        formData.append("product-price", productPrice);
        formData.append("product-image", productImage);

        // You can send the form data to a server using fetch or XMLHttpRequest
        // Example using fetch:
        fetch("add_product.php", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                // Product added successfully, you can show a success message
                alert("Product added successfully!");
                form.reset(); // Clear the form
            } else {
                // Handle errors, e.g., display an error message
                alert("An error occurred while adding the product.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while adding the product.");
        });
    });
});
