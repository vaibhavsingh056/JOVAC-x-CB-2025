// ========== DATA ==========

const store = [
    { id: 1, name: "Mobile", cost: 12000 },
    { id: 2, name: "Headset", cost: 500 },
    { id: 3, name: "Laptop", cost: 60000 },
    { id: 4, name: "Tab", cost: 6000 },
    { id: 5, name: "AirCooler", cost: 14000 }
];

// ========= CALLBACK VERSION ==========

let cartItems = [];
let walletBalance = 90000;
let billAmount = 0;

function addItemToCart(itemId, nextStep) {
    const item = store.find(obj => obj.id === itemId);
    if (item) {
        cartItems.push(item);
        console.log(item.name + " added to basket");
        nextStep();
    } else {
        console.log("Item Not Available");
    }
}

function displayCart(nextStep) {
    const names = cartItems.map(it => it.name);
    console.log("Items in Cart:", names);
    nextStep();
}

function createInvoice(nextStep) {
    const lines = cartItems.map(it => it.name + " ₹" + it.cost);
    console.log("Order Details:", lines);
    billAmount = cartItems.reduce((acc, item) => acc + item.cost, 0);
    console.log("Total Bill: ₹" + billAmount);
    nextStep();
}

function processPayment(nextStep) {
    if (billAmount <= walletBalance) {
        walletBalance -= billAmount;
        console.log("Payment Done. Left: ₹" + walletBalance);
        cartItems = [];
        nextStep();
    } else {
        console.log("Not Enough Balance. Showing Options...");
        nextStep();
    }
}

function showAffordable() {
    const filtered = store.filter(p => p.cost <= walletBalance);
    const available = filtered.map(p => p.name + " ₹" + p.cost);
    console.log("You Can Still Afford:", available);
}

// Run callback flow:
console.log("---- CALLBACK FLOW START ----");

addItemToCart(3, function () {
    addItemToCart(2, function () {
        addItemToCart(5, function () {
            displayCart(function () {
                createInvoice(function () {
                    processPayment(function () {
                        showAffordable();
                        console.log("---- CALLBACK FLOW END ----");
                    });
                });
            });
        });
    });
});


