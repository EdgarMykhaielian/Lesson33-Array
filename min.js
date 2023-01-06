const shoppingList = [
    { name: 'apple', quantity: 3, price: 0.99 },
    { name: 'banana', quantity: 5, price: 0.79 },
    { name: 'orange', quantity: 4, price: 0.59 },
    { name: 'grapes', quantity: 2, price: 1.99 }
];
// count sum
shoppingList.forEach(item => {
    item.sum = item.quantity * item.price;
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
setAvailabilityToTrue('banana')
showUnavailableFirst();
