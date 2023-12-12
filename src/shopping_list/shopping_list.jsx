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

  function deleteList() {

  }

  
  return (
    <main>
      <div className="Shopping_List">
        <h2>Shopping List:</h2>
        <ul>{shopping_list}</ul>
      </div>
      <aside>
        <h2 for="Actions">Actions: </h2>
        <div className="btn-group">
        <Button variant='dark' onClick={() => resetList()}>Reset List</Button>
        <Button variant='dark' onClick={() => deleteList()}>Delete List</Button>
        </div>
        <div id="player-messages"></div>
      </aside>
    </main>
  );
}