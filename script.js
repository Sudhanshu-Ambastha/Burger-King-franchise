function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 2000;
}

function getRandomOrderId() {
    return Math.floor(Math.random() * 1000) + 100;
}

document.getElementById('orderButton').addEventListener('click', function () {
    const selecteditems = [];
    const checkBoxes = document.getElementsByName('foodItem');

    checkBoxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selecteditems.push(checkbox.value);
        }
    });

    if (selecteditems.length === 0) {
        alert("Please select at least one item");
        return;
    }

    const orderButton = document.getElementById('orderButton');
    orderButton.disabled = true;

    const foodImage = document.getElementById('foodImage');
    const orderIdElement = document.getElementById('orderId');
    const orderIdValueElement = document.getElementById('orderIdValue');

    orderIdElement.style.display = 'none';
    foodImage.style.display = 'none';

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, getRandomTime());
    });

    promise.then(function () {
        const orderId = getRandomOrderId();
        orderIdValueElement.textContent = orderId;
        orderIdElement.style.display = 'block';

        const foodToShow = selecteditems.sort().join(',');

        switch (foodToShow) {
            case 'Burger':
                foodImage.src = './assets/Burger.png';
                break;
            case 'Fries':
                foodImage.src = './assets/Fries.png';
                break;
            case 'Drink':
                foodImage.src = './assets/Drink.png';
                break;
            case 'Burger,Fries':
                foodImage.src = './assets/BurgerFries.png';
                break;
            case 'Fries,Drink':
                foodImage.src = './assets/FriesDrink.png';
                break;
            case 'Burger,Drink':
                foodImage.src = './assets/BurgerDrink.png';
                break;
            case 'Burger,Fries,Drink':
                foodImage.src = './assets/Combo.png';
                break;
            default:
                foodImage.src = './assets/Combo.png';
        }

        foodImage.style.display = 'block';
        orderButton.disabled = false;
    });
});
