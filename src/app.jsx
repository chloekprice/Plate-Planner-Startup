import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { AuthState } from './login/authState';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Calendar } from './calendar/calendar';
import { ShoppingList } from './shopping_list/shopping_list';


export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
  <BrowserRouter>
    <div>
        <header>
            <div className="logo"><h1>Plate Planner</h1></div>
            <div className='pages'>
                <NavLink to=''>Home</NavLink>
                {authState === AuthState.Authenticated && (
                  <NavLink to='calendar'>Calendar</NavLink>
                )}
                {authState === AuthState.Authenticated && (
                  <NavLink to='shopping_list'>Shopping List</NavLink>
                )}
            </div>
        </header>
        <Routes>
            <Route path='/' element={
              <Login 
              userName={userName}
              authState={authState}
              onAuthChange={(userName, authState) => {
                setAuthState(authState);
                setUserName(userName);
              }}
              />} 
              exact />
            <Route path='/calendar' element={<Calendar userName={ userName } />} />
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
