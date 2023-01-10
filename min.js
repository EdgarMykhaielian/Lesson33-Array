const shoppingList = [
    { name: 'apple', quantity: 3, price: 0.99 },
    { name: 'banana', quantity: 5, price: 0.79 },
    { name: 'orange', quantity: 4, price: 0.59 },
    { name: 'grapes', quantity: 2, price: 1.99 }
];

// count sum
shoppingList.forEach(item => {
    item.sum = +(item.quantity * item.price).toFixed(2);
});

// random availability 
shoppingList.forEach(item => {
    item.availability = Math.random() < 0.5;
});

//show items that are not available first in the array
function showUnavailableFirst() {
    const sortedList = shoppingList.sort((a, b) => a.availability - b.availability);
    sortedList.forEach(item => console.log(item));
}
//buyItem
function setAvailabilityToTrue(name) {
    shoppingList.forEach(item => {
        if (item.name === name && !item.availability) {
            item.availability = true;
        }
    });
}

//remove item from the list
function removeItemByName(name) {
    const newList = shoppingList.filter(item => item.name !== name);
    return newList;
}
const updatedList = removeItemByName('orange');

//add item to the list
function addItem(name, quantity, price) {
    const index = shoppingList.findIndex(item => item.name === name);
    if (index !== -1) {
        shoppingList[index].quantity += quantity;
    } else {
        shoppingList.push({ name, quantity, price });
    }
}

//total sum of all items
function calculateTotal() {
    let total = 0;
    shoppingList.forEach(item => {
        total += item.sum;
    });
    return total;
}
const total = calculateTotal();

//sum of unbought items
function calculateUnavailable() {
    const newList = shoppingList.filter(item => item.availability === false);
    let totalUnavailable = 0;
    newList.forEach(item => {
        totalUnavailable += item.sum;
    })
    return totalUnavailable;
}
const totalUnavailable = calculateUnavailable()

//show list items depending on the sum
function showItemsDependingOnSum(order) {
    const sortedList = shoppingList.sort((a, b) => {
        if(order === 'low'){
            return a.sum - b.sum;
        }else if(order === 'high'){
            return b.sum - a.sum;
        }
    })
    sortedList.forEach(item => console.log(item));
}
showItemsDependingOnSum('low')