document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const minusButton = product.querySelector('.minus');
        const plusButton = product.querySelector('.plus');
        const heartButton = product.querySelector('.heart');
        const quantityDisplay = product.querySelector('.quantity');
        let quantity = parseInt(quantityDisplay.textContent, 10);

        minusButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });

        plusButton.addEventListener('click', () => {
            quantity++;
            quantityDisplay.textContent = quantity;
        });

        heartButton.addEventListener('click', () => {
            heartButton.classList.toggle('active');
        });
    });
});
