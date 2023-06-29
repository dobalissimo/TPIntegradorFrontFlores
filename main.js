// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the necessary elements
    var button = document.getElementById('buttonres');
    var quantityInput = document.querySelector('input[placeholder="cantidad"]');
    var categorySelect = document.querySelector('select[placeholder="Categoria"]');
    var totalAmountDiv = document.getElementById('totalAmount');

    // Add event listener to the button
    button.addEventListener('click', function(event) {
        event.preventDefault();

        // Get the selected category and quantity
        var selectedCategory = categorySelect.value;
        var quantity = parseInt(quantityInput.value);

        // Calculate the total amount based on the selected category
        var ticketPrice = 200; // Price of each ticket
        var discount = 0; // Discount percentage
        var totalAmount = 0; // Total amount to be calculated

        if (selectedCategory === 'Estudiante') {
            discount = 0.2; // 80% discount
        } else if (selectedCategory === 'Trainee') {
            discount = 0.5; // 50% discount
        } else if (selectedCategory === 'Junior') {
            discount = 0.85; // 15% discount
        }

        totalAmount = ticketPrice * quantity * discount;

        // Display the total amount inside the div element
        totalAmountDiv.textContent = 'El total a pagar es: $ ' + totalAmount;
    });
});
