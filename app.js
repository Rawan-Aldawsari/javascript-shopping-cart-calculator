
const cart = [
    {
        name: "Keyboard",
        price: 50,
        quantity: 2
    },
    {
        name: "Mouse",
        price: 25,
        quantity: 1
    },
    {
        name: "Headphones",
        price: 30,
        quantity: 1
    }
];

function calculateSubtotal() {
    let subtotal = 0;

    for (const item of cart) {
        subtotal += item.price * item.quantity;
    }

    return subtotal;
}

function applyDiscount(subtotal) {
    if (subtotal >= 100) {
        return subtotal * 0.90;
    }

    return subtotal;
}

const subtotal = calculateSubtotal();
const total = applyDiscount(subtotal);

console.log("Subtotal:", subtotal);
console.log("Total:", total);