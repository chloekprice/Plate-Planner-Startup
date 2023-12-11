import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
  <div>
    <header>
        <div class="logo"><h1>Plate Planner</h1></div>
        <div class="pages" onclick="navigateToHome()">Home</div>
        <div class="pages" onclick="navigateToCalendar()">Calendar</div>
        <div class="pages" onclick="navigateToList()">Shopping List</div>
    </header>
    <main>App components go here</main>
    <footer>
      <span class="test-reset">Chloe Price</span>
      <a href="https://github.com/chloekprice/startup.git">GitHub</a>
    </footer>
   </div>
  );
}                                                                                                   