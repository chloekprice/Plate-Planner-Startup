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
        html += food[t];
        html += '</li';
        const add = document.getElementsByTagName('p')[0];
        add.insertAdjacentHTML("beforebegin", html);
    }
}

function addToShoppingList() {
    let new_item = document.getElementById("new_item").value;
    if (localStorage.getItem('list') == '') {
        firstItem = [new_item];
        new_list = JSON.stringify(firstItem);
        localStorage.setItem('list', new_list);
        displayShoppingList();
    } else {
        let list = JSON.parse(localStorage.getItem('list'));
        list.push(new_item);
        for (let h = 0; h < list.length; h++) {
            console.log(list[h]);
        }
        new_list = JSON.stringify(list);
        console.log(new_list);
        localStorage.setItem('list', new_list);
        clearList((list.length - 1));
        displayShoppingList();
    }
}

function clearList(p1) {
    for (let w = 0; w < p1; w++) {
        let rid = document.getElementsByTagName('li')[0];
        rid.remove();
    }
}

function resetList() {
    console.log('reset');
    clearList(JSON.parse(localStorage.getItem('list')).length);
    localStorage.setItem('list', '');
}

function addManyItems() {
    console.log('add');
    
}

function deleteItems() {
    console.log('delete');
}