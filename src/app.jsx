import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Calendar } from './calendar/calendar';
import { ShoppingList } from './shopping_list/shopping_list';


export default function App() {
  return (
  <BrowserRouter>
    <div>
        <header>
            <div className="logo"><h1>Plate Planner</h1></div>
            {/* <div class="pages" onclick="navigateToHome()">Home</div>
            <div class="pages" onclick="navigateToCalendar()">Calendar</div>
            <div class="pages" onclick="navigateToList()">Shopping List</div> */}
            <div className='pages'>
                <NavLink to=''>Home</NavLink>
                <NavLink to='calendar'>Calendar</NavLink>
                <NavLink to='shopping_list'>Shopping List</NavLink>
            </div>
        </header>
        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/shopping_list' element={<ShoppingList />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <footer>
        <span className="test-reset">Chloe Price</span>
        <a href="https://github.com/chloekprice/startup.git">GitHub</a>
        </footer>
    </div>
  </BrowserRouter>
  );
} 

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }