function initializeShoppingList() {
    let shopping_list = ['apples', 'chicken', 'beef', 'tomatoes'];
    let items = JSON.stringify(shopping_list);
    localStorage.setItem('list', items);
    displayShoppingList()
}

function displayShoppingList() {
    let food = JSON.parse(localStorage.getItem('list'));
    for (let t = 0; t < food.length; t++) {
        let html = '<li>';
        console.log(food[t]);
        console.log(food[1]);
        console.log(food[2]);
        html += food[t];
        html += '</li';
        const add = document.getElementsByTagName('p')[0];
        add.insertAdjacentHTML("beforebegin", html);
    }
}

function addToShoppingList() {
    let new_item = document.getElementById("new_item").value;
    let list = JSON.parse(localStorage.getItem('list'));
    list.push(new_item);
    for (let h = 0; h < list.length; h++) {
        console.log(list[h]);
    }
    new_list = JSON.stringify(list);
    console.log(new_list);
    localStorage.setItem('list', new_list);
    clearList(list.length);
    displayShoppingList();
}

function clearList(p1) {
    for (let w = 0; w < (p1 - 1); w++) {
        let rid = document.getElementsByTagName('li')[0];
        rid.remove();
    }
}

function resetList() {
    console.log('reset');
}

function addManyItems() {
    console.log('add');
}

function deleteItems() {
    console.log('delete');
}