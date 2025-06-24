
// ========= PROMISE VERSION ==========

let items = [
    { id: 1, name: "Mobile", cost: 12000 },
    { id: 2, name: "Headset", cost: 500 },
    { id: 3, name: "Laptop", cost: 60000 },
    { id: 4, name: "Tab", cost: 6000 },
    { id: 5, name: "AirCooler", cost: 14000 }
];

let bag = [];
let balance = 90000;
let totalCost = 0;

function pickItem(pid) {
    return new Promise((res, rej) => {
        const found = items.find(p => p.id === pid);
        if (found) {
            bag.push(found);
            console.log(found.name + " inserted in bag");
            res();
        } else {
            rej("No such product exists.");
        }
    });
}

function showBag() {
    return new Promise(resolve => {
        const names = bag.map(i => i.name);
        console.log("Bag contains:", names);
        resolve();
    });
}

function billOrder() {
    return new Promise(resolve => {
        const listing = bag.map(it => it.name + " ₹" + it.cost);
        console.log("Order Summary:", listing);
        totalCost = bag.reduce((a, b) => a + b.cost, 0);
        console.log("Final Amount: ₹" + totalCost);
        resolve();
    });
}

function doPayment() {
    return new Promise((resolve, reject) => {
        if (totalCost <= balance) {
            balance -= totalCost;
            console.log("Transaction Done. Balance Left: ₹" + balance);
            bag = [];
            resolve();
        } else {
            reject("Insufficient funds for full order.");
        }
    });
}

function suggestProducts() {
    return new Promise(resolve => {
        const list = items.filter(it => it.cost <= balance);
        const suggest = list.map(i => i.name + " ₹" + i.cost);
        console.log("You can consider:", suggest);
        resolve();
    });
}

console.log("\n---- PROMISE FLOW START ----");

pickItem(3)
    .then(() => pickItem(2))
    .then(() => pickItem(5))
    .then(() => showBag())
    .then(() => billOrder())
    .then(() => doPayment())
    .then(() => suggestProducts())
    .then(() => console.log("---- PROMISE FLOW END ----"))
    .catch(err => console.log("Error:", err));