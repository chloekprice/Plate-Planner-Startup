let list = []

function initializeShoppingList() {
    this.loadList();
}

function getUser() {
    return localStorage.getItem('user');
}

function getListStr() {
    return localStorage.getItem("list");
}

function getList() {
    return JSON.parse(localStorage.getItem('list'));
}

function displayShoppingList() {
    list = JSON.parse(localStorage.getItem('list'));
    for (let t = 0; t < list.length; t++) {
        let html = '<li>';
        html += list[t];
        html += '</li>';
        console.log(html);
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
    let userINFO = {
        "userName": this.getUser(),
    };
    try {
        console.log("trying this");
        let response = await fetch('/api/grocery_list', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userINFO),
        });
        const updatedList = await response.json();
        console.log(updatedList);
        localStorage.setItem('list', JSON.stringify(updatedList));
    } catch {
        console.log('returning locally saved list');
        const listStr = localStorage.getItem('list');
        if (listStr) {
            list = JSON.parse(listStr);
        }
    }
  }