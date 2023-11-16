let list = []


function initializeShoppingList() {
    list = JSON.parse(localStorage.getItem('list'));
    console.log(list);
    this.loadList();
}

function getListStr() {
    return localStorage.getItem("list");
}

function getList() {
    return JSON.parse(localStorage.getItem('list'));
}

function displayShoppingList() {
    console.log(list);
    for (let t = 0; t < list.length; t++) {
        let html = '<li>';
        html += list[t];
        html += '</li';
        let add = document.getElementsByTagName('p')[0];
        add.insertAdjacentHTML("beforebegin", html);
    }
}

function addToShoppingList() {
    let new_item = document.getElementById("new_item").value;
    if (localStorage.getItem('list') == '') {
        firstItem = [new_item];
        let new_list = JSON.stringify(firstItem);
        localStorage.setItem('list', new_list);
        list = JSON.parse(localStorage.getItem('list'));
        displayShoppingList();
    } else {
        list = JSON.parse(localStorage.getItem('list'));
        list.push(new_item);
        localStorage.setItem('list', JSON.stringify(list));
        clearList((list.length - 1));
        list = JSON.parse(localStorage.getItem('list'));
        displayShoppingList();
    }
}

function clearList(t) {
    list = JSON.parse(localStorage.getItem('list'));
    for (let w = 0; w < t; w++) {
        let rid = document.getElementsByTagName('li')[0];
        rid.remove();
    }
}

function resetList() {
    console.log('reset');
    clearList(list.length);
    localStorage.setItem('list', '');
    list = [];
}

function addManyItems() {
    console.log('add');
}

function deleteItems() {
    console.log('delete');
    let delete_item = document.getElementById("delete_item").value;
    if (localStorage.getItem('list') == '') {
        return;
    } else {
        list = JSON.parse(localStorage.getItem('list'));
        for (let h = 0; h < list.length; h++) {
            if (list[h] == delete_item) {
                if (h == (list.length - 1)) {
                    list.pop();
                } else {
                    for (let r = h; r < (list.length - 1); r++) {
                        list[r] = list[(r + 1)];
                    }
                    list.pop();
                }
            }
        }
        localStorage.setItem('list', JSON.stringify(list));
        clearList((list.length + 1));
        displayShoppingList();
    }

}

async function loadList() {
    const response = await fetch("/grocery_list");
    const food_list = await response.json();
    for (n = 0; n < food_list.length; n++) {
        list.push(food_list[n]);
    }
    localStorage.setItem('list', JSON.stringify(list));
    clearList(list.length - food_list.length);
    displayShoppingList();
}