let shopping_list = [];
// Member functions
function getUserName() {
  return localStorage.getItem('user');
}
function setUserName() {
  const userWeek = document.getElementsByTagName('h1')[1];
  const userName = localStorage.getItem('user');
  userWeek.innerText = userName + "'s Week";

  //initialize shopping list
  this.getSavedList();
}
async function getSavedList() {
  let userINFO = this.getUserName();
  let link = '/api/grocery_list?name=' + userINFO
  // let link = 'https://startup.plateplanner.click/api/grocery_list?name=' + userINFO
  try {
      let response = await fetch(link, {
          Method: 'GET',
          Headers: {
              'content-type': 'application/json',
          },
      });
      const savedList = await response.json();
      localStorage.setItem('list', JSON.stringify(savedList));
      shopping_list = savedList;
  } catch {
      console.log('returning locally saved list');
      const listStr = localStorage.getItem('list');
      if (listStr) {
          shopping_list = JSON.parse(listStr);
      }
  }
}
function getItemsStr() {
  let list_str = '';
  let temp = JSON.parse(localStorage.getItem('list'))
  for (let i = 0; i < temp.length; i ++) {
    list_str = list_str + temp[i];
  }
  return temp;
}
function getItemsList() {
  return JSON.parse(localStorage.getItem('list'));
}
function displayMeals() {
  for (let i = 3; i < 24; i++) {
      let data = 'meal'
      let x = (i - 2);
      data = data + x.toString();
      let meal = document.getElementsByTagName('td')[i];
      meal.innerHTML = localStorage.getItem(data);
  }
}
function saveListLocally() {
  localStorage.setItem('list', JSON.stringify(shopping_list));
}

// Adding to List
function addToList() {
  console.log('adding to List');
  shopping_list = JSON.parse(localStorage.getItem('list'));
  if (shopping_list === null) {
    shopping_list = [];
  }
  let add_list = this.getMeals();
  console.log(add_list);
  for (let i = 0; i < add_list.length; i++) {
    shopping_list.push(add_list[i]);
  }
  localStorage.setItem('list', JSON.stringify(shopping_list));
  this.saveIngredients();
  setTimeout(() => { window.location.href = 'shopping_list.html' }, 1000)
}
function getMeals() {
  let meals = []
  let new_list = [];
  let mon_breakfast = document.getElementById("meal1").value;
  let mon_lunch = document.getElementById("meal2").value;
  let mon_dinner = document.getElementById("meal3").value;
  let tues_breakfast = document.getElementById("meal4").value;
  let tues_lunch = document.getElementById("meal5").value;
  let tues_dinner = document.getElementById("meal6").value;
  let wed_breakfast = document.getElementById("meal7").value;
  let wed_lunch = document.getElementById("meal8").value;
  let wed_dinner = document.getElementById("meal9").value;
  let thurs_breakfast = document.getElementById("meal10").value;
  let thurs_lunch = document.getElementById("meal11").value;
  let thurs_dinner = document.getElementById("meal12").value;
  let fri_breakfast = document.getElementById("meal13").value;
  let fri_lunch = document.getElementById("meal14").value;
  let fri_dinner = document.getElementById("meal15").value;
  let sat_breakfast = document.getElementById("meal16").value;
  let sat_lunch = document.getElementById("meal17").value;
  let sat_dinner = document.getElementById("meal18").value;
  let sun_breakfast = document.getElementById("meal19").value;
  let sun_lunch = document.getElementById("meal20").value;
  let sun_dinner = document.getElementById("meal21").value;

  meals.push(mon_breakfast)
  meals.push(mon_lunch)
  meals.push(mon_dinner)
  meals.push(tues_breakfast)
  meals.push(tues_lunch)
  meals.push(tues_dinner)
  meals.push(wed_breakfast)
  meals.push(wed_lunch)
  meals.push(wed_dinner)
  meals.push(thurs_breakfast)
  meals.push(thurs_lunch)
  meals.push(thurs_dinner)
  meals.push(fri_breakfast)
  meals.push(fri_lunch)
  meals.push(fri_dinner)
  meals.push(sat_breakfast)
  meals.push(sat_lunch)
  meals.push(sat_dinner)
  meals.push(sun_breakfast)
  meals.push(sun_lunch)
  meals.push(sun_dinner)
  
  localStorage.setItem('meal1', mon_breakfast);
  localStorage.setItem('meal2', mon_lunch);
  localStorage.setItem('meal3', mon_dinner);
  localStorage.setItem('meal4', tues_breakfast);
  localStorage.setItem('meal5', tues_lunch);
  localStorage.setItem('meal6', tues_dinner);
  localStorage.setItem('meal7', wed_breakfast);
  localStorage.setItem('meal8', wed_lunch);
  localStorage.setItem('meal9', wed_dinner);
  localStorage.setItem('meal10', thurs_breakfast);
  localStorage.setItem('meal11', thurs_lunch);
  localStorage.setItem('meal12', thurs_dinner);
  localStorage.setItem('meal13', fri_breakfast);
  localStorage.setItem('meal14', fri_lunch);
  localStorage.setItem('meal15', fri_dinner);
  localStorage.setItem('meal16', sat_breakfast);
  localStorage.setItem('meal17', sat_lunch);
  localStorage.setItem('meal18', sat_dinner);
  localStorage.setItem('meal19', sun_breakfast);
  localStorage.setItem('meal20', sun_lunch);
  localStorage.setItem('meal21', sun_dinner);

  for (let i = 0; i < meals.length; i++) {
    let meal = meals[i];
    let count = 0;
    for (let x = 0; x < meal.length; x++) {
      let ingredient_start = x - count;
      if (meal.slice(x, (x + 1)) == ",") {
        new_list.push(meal.slice(ingredient_start, x));
        count = -1;
      }
      if (x == meal.length - 1) {
        new_list.push(meal.slice(ingredient_start, meal.length));
      }
      count += 1;
    }
  }
  return new_list;
}
async function saveIngredients() {
  let userInfo = {
    "userName": this.getUserName(),
    "userList": this.getItemsList(),
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
    // If there was an error then just track scores locally
    console.log("could not save the shopping list on the database");
  } finally {
    this.saveListLocally();
  }
}

// Clearing List
function emptyPlates() {
  let mon_breakfast = "";
  let mon_lunch = "";
  let mon_dinner = "";
  let tues_breakfast = "";
  let tues_lunch = "";
  let tues_dinner = "";
  let wed_breakfast = "";
  let wed_lunch = "";
  let wed_dinner = "";
  let thurs_breakfast = "";
  let thurs_lunch = "";
  let thurs_dinner = "";
  let fri_breakfast = "";
  let fri_lunch = "";
  let fri_dinner = "";
  let sat_breakfast = "";
  let sat_lunch = "";
  let sat_dinner = "";
  let sun_breakfast = "";
  let sun_lunch = "";
  let sun_dinner = "";
  
  localStorage.setItem('meal1', mon_breakfast);
  localStorage.setItem('meal2', mon_lunch);
  localStorage.setItem('meal3', mon_dinner);
  localStorage.setItem('meal4', tues_breakfast);
  localStorage.setItem('meal5', tues_lunch);
  localStorage.setItem('meal6', tues_dinner);
  localStorage.setItem('meal7', wed_breakfast);
  localStorage.setItem('meal8', wed_lunch);
  localStorage.setItem('meal9', wed_dinner);
  localStorage.setItem('meal10', thurs_breakfast);
  localStorage.setItem('meal11', thurs_lunch);
  localStorage.setItem('meal12', thurs_dinner);
  localStorage.setItem('meal13', fri_breakfast);
  localStorage.setItem('meal14', fri_lunch);
  localStorage.setItem('meal15', fri_dinner);
  localStorage.setItem('meal16', sat_breakfast);
  localStorage.setItem('meal17', sat_lunch);
  localStorage.setItem('meal18', sat_dinner);
  localStorage.setItem('meal19', sun_breakfast);
  localStorage.setItem('meal20', sun_lunch);
  localStorage.setItem('meal21', sun_dinner);

  shopping_list = []
  localStorage.setItem("list", JSON.stringify(shopping_list));

}
function addInput() {
  let num = 1
  for (let y = 3; y < 24; y++) {
      let temp = '<input type="text" id="meal'
      let number = num.toString();
      temp += number;
      temp += '" placeholder="enter meal here">'
      const data = document.getElementsByTagName("td")[y];
      let html = temp;
      data.insertAdjacentHTML("beforeend", html);
      num += 1;
  }
}
function clearPlates() {
  console.log('clearing plates');
  this.emptyPlates();
  this.displayMeals();
  this.addInput();
}

module.exports = { getUserName, getItemsStr, getItemsList };