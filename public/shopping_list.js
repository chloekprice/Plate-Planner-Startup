// Initialize 
let list = [];
let socket;
// Event messages
const AddShoppingList = 'listAddedTo';
const ResetShoppingList = 'listReset';
function initializeShoppingList() {
    list = JSON.parse(localStorage.getItem('list'));
    this.displayShoppingList();
    this.configureWebSocket();  

}

// Member functions
function getUser() {
    return localStorage.getItem('user');
}
function getListStr() {
    return localStorage.getItem("list");
}
function getList() {
    return JSON.parse(localStorage.getItem('list'));
}
async function loadList() {
    let userINFO = this.getUser();
    let link = '/api/grocery_list?name=' + userINFO
    // let link = 'https://startup.plateplanner.click/api/grocery_list?name=' + userINFO
    try {
        let response = await fetch(link, {
            Method: 'GET',
            Headers: {
                'content-type': 'application/json',
            },
        });
        const updatedList = await response.json();
        localStorage.setItem('list', JSON.stringify(updatedList));
        list = updatedList;
    } catch {
        console.log('returning locally saved list');
        const listStr = localStorage.getItem('list');
        if (listStr) {
            list = JSON.parse(listStr);
        }
    }
}
function displayShoppingList() {
    list = JSON.parse(localStorage.getItem('list'));
    for (let t = 0; t < list.length; t++) {
        let html = '<li>';
        html += list[t];
        html += '</li>';
        let add = document.getElementsByTagName('p')[0];
        add.insertAdjacentHTML("beforebegin", html);
    }
}
async function saveUpdatedList() {
    let userInfo = {
      "userName": this.getUser(),
      "userList": this.getList(),
    }
    console.log("saving ingredients");
    try {
      let response = await fetch('/api/save_list', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const created = await response.json();
      console.log(created);
    } catch {
      // If there was an error then just track scores locally
      console.log("could not save the shopping list on the database");
    } finally {
      this.saveListLocally();
    }
}
function saveListLocally() {
    localStorage.setItem('list', JSON.stringify(list));
    list = localStorage.getItem('list');
}


// Options
function addToShoppingList() {
    let new_item = document.getElementById("new_item").value;
    if (localStorage.getItem('list') == '') {
        firstItem = [new_item];
        let new_list = JSON.stringify(firstItem);
        localStorage.setItem('list', new_list);
        list = JSON.parse(localStorage.getItem('list'));
        this.saveUpdatedList();
        this.displayShoppingList();
    } else {
        list = JSON.parse(localStorage.getItem('list'));
        list.push(new_item);
        localStorage.setItem('list', JSON.stringify(list));
        this.saveUpdatedList();
        this.clearList((list.length - 1));
        this.displayShoppingList();
    }
    // Let other users know a shopping list has been added to
    this.broadcastEvent(this.getUser(), AddShoppingList, new_item);
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
        list = JSON.parse(localStorage.getItem('list'));
        this.saveUpdatedList();
        this.clearList((list.length + 1));
        this.displayShoppingList();
    }

}
function resetList() {
    console.log('reset');
    list = JSON.parse(localStorage.getItem('list'));
    clearList(list.length);
    localStorage.setItem('list', '');
    list = [];
    this.emptyList();
    // Let other players know the list was reset
    this.broadcastEvent(this.getUser(), ResetShoppingList, {});
}
function clearList(t) {
    list = JSON.parse(localStorage.getItem('list'));
    console.log(list);
    for (let w = 0; w < t; w++) {
        let rid = document.getElementsByTagName('li')[0];
        rid.remove();
    }
}
async function emptyList() {
    let userInfo = {
      "userName": this.getUser(),
    }
    console.log("clearing ingredients");
    try {
      let response = await fetch('/api/clear_list', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const created = await response.json();
      console.log(created);
    } catch {
      // If there was an error then just track scores locally
      console.log("could not clear the shopping list on the database");
    } finally {
      this.saveListLocally();
    }
}

// Peer-to-Peer Communication
function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
      this.displayMsg('system', 'user', 'connected');
      console.log('opening');
    };
    socket.onclose = (event) => {
      this.displayMsg('system', 'user', 'disconnected');
      console.log('closing')
    };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === ResetShoppingList) {
        this.displayMsg('system', msg.from, `reset their shopping list`);
      } else if (msg.type === AddShoppingList) {
        this.displayMsg('system', msg.from, `added ${msg.value} to their shopping list`);
      } 
    };
}

function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}

function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    console.log("sending")
    socket.send(JSON.stringify(event));
}

