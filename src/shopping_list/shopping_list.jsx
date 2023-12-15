import React from 'react';
import './shopping_list.css';
import { Button } from 'react-bootstrap';


export function ShoppingList() {
  let [groceries, setGroceries] = React.useState([]);
  let [newItem, setNewItem] = React.useState([]);
  let userINFO = getUser();
  let link = '/api/grocery_list?name=' + userINFO

  function getUser() {
    return localStorage.getItem('user');
  }

  function getList() {
    return JSON.parse(localStorage.getItem('list'));
  }

  function saveListLocally() {
    localStorage.setItem('list', JSON.stringify(groceries));
  } 

  React.useEffect(() => {
    fetch(link, {
      Method: 'GET',
      Headers: {
        'content-type': 'application/json',
      },
    })
      .then((response => response.json()))
      .then((groceries) => {
        setGroceries(groceries);
        localStorage.setItem('list', JSON.stringify(groceries));
      })
      .catch(() => {
        const groceriesText = localStorage.getItem('list');
        if (groceriesText) {
          setGroceries(JSON.parse(groceriesText));
        }
      });
  }, []);

  const groceriesList = [];
  if (groceries.length) {
    for (let i = 0; i < groceries.length; i++) {
      groceriesList.push(
        <li key={i}>
          {groceries[i]}
        </li>
      );
    }
  } else {
    groceriesList.push(
      <li key='0'>the list is currently empty</li>
    );
  }

  async function saveIngredients() {
    let userInfo = {
      "userName": getUser(),
      "userList": getList(),
    }
    console.log("saving ingredients");
    console.log(userInfo);
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
      console.log("could not save the shopping list on the database");
    } finally {
      saveListLocally();
    }
  }

  function resetList() {
    setGroceries([]);
    localStorage.setItem('list', JSON.stringify([]));
    saveIngredients();
  }

  function addItem() {
    groceries.push(newItem);
    localStorage.setItem('list', JSON.stringify(groceries));
    saveIngredients();
    setGroceries(groceries);
  }

  function deleteItem() {
    if (localStorage.getItem('list') == '') {
      console.log('');
    } else {
        for (let h = 0; h < groceries.length; h++) {
            if (groceries[h] == newItem) {
                if (h == (groceries.length - 1)) {
                    groceries.pop();
                } else {
                    for (let r = h; r < (groceries.length - 1); r++) {
                        groceries[r] = groceries[(r + 1)];
                    }
                    groceries.pop();
                }
            }
        }
        localStorage.setItem('list', JSON.stringify(groceries));
        saveIngredients();
        setGroceries(groceries);
    }
  }

  return (
    <main>
      <div className="Shopping_List">
        <h2 className='title'>Shopping List:</h2>
        <ul>{groceriesList}</ul>
        <form>
          <div className="input-group input-group-sm mb-3">
            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setNewItem(e.target.value)}/>
          </div>
          <div className='actions'>
            <Button variant='dark' onClick={() => deleteItem()}>Delete Item</Button>
            <Button variant='dark' onClick={() => addItem()}>Add Item</Button>
            <p>Please refresh to see changes.</p>
          </div>
        </form>
      </div>

      <aside>
        <h2 className='actions'>Actions: </h2>
        <div className="btn-group">
          <Button variant='dark' onClick={() => resetList()}>Reset List</Button>
        </div>
        <div id="player-messages"></div>
      </aside>
    </main>
  );
}