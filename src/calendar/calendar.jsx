import React from 'react';
import './calendar.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function DisplayUser() {
  let user = localStorage.getItem('user');
  let display = user + '\'s Week';
  return <h2>{display}</h2>;
}

export function Calendar() {
  const navigate = useNavigate();
  const [meal1, setMeal1] = React.useState('');
  const [meal2, setMeal2] = React.useState('');
  const [meal3, setMeal3] = React.useState('');
  const [meal4, setMeal4] = React.useState('');
  const [meal5, setMeal5] = React.useState('');
  const [meal6, setMeal6] = React.useState('');
  const [meal7, setMeal7] = React.useState('');
  const [meal8, setMeal8] = React.useState('');
  const [meal9, setMeal9] = React.useState('');
  const [meal10, setMeal10] = React.useState('');
  const [meal11, setMeal11] = React.useState('');
  const [meal12, setMeal12] = React.useState('');
  const [meal13, setMeal13] = React.useState('');
  const [meal14, setMeal14] = React.useState('');
  const [meal15, setMeal15] = React.useState('');
  const [meal16, setMeal16] = React.useState('');
  const [meal17, setMeal17] = React.useState('');
  const [meal18, setMeal18] = React.useState('');
  const [meal19, setMeal19] = React.useState('');
  const [meal20, setMeal20] = React.useState('');
  const [meal21, setMeal21] = React.useState('');
  const shopping_list = [];

  function getUserName() {
    return localStorage.getItem('user');
  }

  function getItemsList() {
    return JSON.parse(localStorage.getItem('list'));
  }

  function saveListLocally() {
    localStorage.setItem('list', JSON.stringify(shopping_list));
  } 

  function getMeals() {
    let mealList = []
    if (meal1 != '') {
      mealList.push(meal1);
    }
    if (meal2 != '') {
      mealList.push(meal2);
    }
    if (meal3 != '') {
      mealList.push(meal3);
    }
    if (meal4 != '') {
      mealList.push(meal4);
    }
    if (meal5 != '') {
      mealList.push(meal5);
    }
    if (meal6 != '') {
      mealList.push(meal6);
    }
    if (meal7 != '') {
      mealList.push(meal7);
    }
    if (meal8 != '') {
      mealList.push(meal8);
    }
    if (meal9 != '') {
      mealList.push(meal9);
    }
    if (meal10 != '') {
      mealList.push(meal10);
    }
    if (meal11 != '') {
      mealList.push(meal11);
    }
    if (meal12 != '') {
      mealList.push(meal12);
    }
    if (meal13 != '') {
      mealList.push(meal13);
    }
    if (meal14 != '') {
      mealList.push(meal14);
    }
    if (meal15 != '') {
      mealList.push(meal15);
    }
    if (meal16 != '') {
      mealList.push(meal16);
    }
    if (meal17 != '') {
      mealList.push(meal17);
    }
    if (meal18 != '') {
      mealList.push(meal18);
    }
    if (meal19 != '') {
      mealList.push(meal19);
    }
    if (meal20 != '') {
      mealList.push(meal20);
    }
    if (meal21 != '') {
      mealList.push(meal21);
    }

    return mealList;
  } 

  async function saveIngredients() {
    let userInfo = {
      "userName": getUserName(),
      "userList": getItemsList(),
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

  function addToList() {
    const meals = getMeals();
    const new_list = [];
    console.log(meals);

    for (let i = 0; i < meals.length; i++) {
      let ingredients = meals[i];
      let count = 0;
      for (let x = 0; x < ingredients.length; x++) {
        let ingredient_start = x - count;
        if (ingredients.slice(x, (x + 1)) == ",") {
          new_list.push(ingredients.slice(ingredient_start, x));
          count = -1;
        }
        if (x == ingredients.length - 1) {
          new_list.push(ingredients.slice(ingredient_start, ingredients.length));
        }
        count += 1;
      }
    }
    for (let x = 0; x < new_list.length; x++) {
      shopping_list.push(new_list[x]);
    }
    saveListLocally();
    saveIngredients();
    setTimeout(() => { navigate('/shopping_list') }, 1000)
  }
  
  return (
    <main>
      <div className='calendar'>
        <><DisplayUser /></>      
        <p className="instruction">Please enter the ingredients needed for each meal.  Each ingredient should be separated by a comma (,).</p>
        <form>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Breakfast</th>
                <th scope="col">Lunch</th>
                <th scope="col">Dinner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Monday</th>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal1(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal2(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal3(e.target.value)}/></td>
              </tr>
              <tr>
                <th scope="row">Tuesday</th>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal4(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal5(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal6(e.target.value)}/></td>
              </tr>
              <tr>
                <th scope="row">Wednesday</th>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal7(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal8(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal9(e.target.value)}/></td>
              </tr>
              <tr>
                <th scope="row">Thursday</th>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal10(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal11(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal12(e.target.value)}/></td>
              </tr>
              <tr>
                <th scope="row">Friday</th>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal13(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal14(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal15(e.target.value)}/></td>
              </tr>
              <tr>
                <th scope="row">Saturday</th>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal16(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal17(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal18(e.target.value)}/></td>
              </tr>
              <tr>
                <th scope="row">Sunday</th>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal19(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal20(e.target.value)}/></td>
                <td><input type="text" className="form-control" id='meals' onChange={(e) => setMeal21(e.target.value)}/></td>
              </tr>
            </tbody>
          </table> 
        
          <div className="btn-group">
              <Button variant='dark' onClick={() => addToList()}>Add To List</Button>
          </div>
        </form>
      </div>
    </main>
  );
}