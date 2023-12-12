import React from 'react';
import './shopping_list.css';
import { Button } from 'react-bootstrap';


export function ShoppingList() {
  const [userList, setList] = React.useState([]);

  React.useEffect(()=> {
    fetch('api/grocery_list')
      .then((response) => response.json())
      .then((userList) => {
        setList(userList);
        localStorage.setItem('list', JSON.stringify(userList));
      })
      .catch(() => {
        const listText = localStorage.getItem('list');
        if (listText) {
          setList(JSON.parse(listText));
        }
      });
  }, []);

  const shopping_list = [];
  if (userList.length) {
    for (const [i, item] of userList.entries()) {
      shopping_list.push (
          <li key={i}>{userList}</li>
      );
    }
  } else {
    shopping_list.push (
        <li key='0'>Empty List</li>
    );
  }

  function resetList() {
    
  }

  function deleteItem() {

  }

  function addItem() {

  }

  
  return (
    <main>
      <div className="Shopping_List">
        <h2>Shopping List:</h2>
        <ul>{shopping_list}</ul>
        <div class="input-group input-group-sm mb-3">
          <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        <div className='actions'>
          <Button variant='dark' onClick={() => deleteItem()}>Delete Item</Button>
          <Button variant='dark' onClick={() => addItem()}>Add Item</Button>
        </div>
      </div>

      <aside>
        <h2 for="Actions">Actions: </h2>
        <div className="btn-group">
          <Button variant='dark' onClick={() => resetList()}>Reset List</Button>
        </div>
        <div id="player-messages"></div>
      </aside>
    </main>
  );
}