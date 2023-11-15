let list = []


function initializeShoppingList() {
    list = JSON.parse(localStorage.getItem('list'));
    console.log(list);
    this.displayShoppingList(list);
}

function displayShoppingList() {
    console.log(list);
    for (let t = 0; t < list.length; t++) {
        let html = '<li>';
        html += list[t];
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
        list = JSON.parse(localStorage.getItem('list'));
        displayShoppingList();
    } else {
        let list = JSON.parse(localStorage.getItem('list'));
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
    list = JSON.parse(localStorage.getItem('list'));
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
        clearList((list.length +  1));
        displayShoppingList();
    }

}

async function loadList() {
    let list = [];
    try {
      const response = await fetch('/api/list');
      list = await response.json();
  
      // Save the list in case we go offline in the future
      localStorage.setItem('list', JSON.stringify(list));
    } catch {
      // If there was an error then just use the last saved list
      const listText = localStorage.getItem('list');
      if (listText) {
        list = JSON.parse(listText);
      }
    }
  
    displayShoppingList();
  }