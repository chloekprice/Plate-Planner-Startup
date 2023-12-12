import React from 'react';
import './calendar.css';
import { Button } from 'react-bootstrap';

export function Calendar() {

  function displayUser() {
    return 'User';
  }

  function addToList() {

  }

  function clearPlates() {

  }
  
  return (
    <main>
      <div>
        <h2>{displayUser}User's Week</h2>      
        <p>Please enter the ingredients needed for each meal.  Each ingredient should be separated by a comma (,).</p>

        <table class="table table-bordered">
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
              <td><input type="text" class="form-control" className='meals'/></td>
              <td><input type="text" class="form-control" className='meals'/></td>              
              <td><input type="text" class="form-control" className='meals'/></td>
            </tr>
            <tr>
              <th scope="row">Tuesday</th>
              <td><input type="text" class="form-control" className='meals'/></td>
              <td><input type="text" class="form-control" className='meals'/></td>              
              <td><input type="text" class="form-control" className='meals'/></td>
            </tr>
            <tr>
              <th scope="row">Wednesday</th>
              <td><input type="text" class="form-control" className='meals'/></td>
              <td><input type="text" class="form-control" className='meals'/></td>              
              <td><input type="text" class="form-control" className='meals'/></td>
            </tr>
            <tr>
              <th scope="row">Thursday</th>
              <td><input type="text" class="form-control" className='meals'/></td>
              <td><input type="text" class="form-control" className='meals'/></td>              
              <td><input type="text" class="form-control" className='meals'/></td>
            </tr>
            <tr>
              <th scope="row">Friday</th>
              <td><input type="text" class="form-control" className='meals'/></td>
              <td><input type="text" class="form-control" className='meals'/></td>              
              <td><input type="text" class="form-control" className='meals'/></td>
            </tr>
            <tr>
              <th scope="row">Saturday</th>
              <td><input type="text" class="form-control" className='meals'/></td>
              <td><input type="text" class="form-control" className='meals'/></td>              
              <td><input type="text" class="form-control" className='meals'/></td>
            </tr>
            <tr>
              <th scope="row">Sunday</th>
              <td><input type="text" class="form-control" className='meals'/></td>
              <td><input type="text" class="form-control" className='meals'/></td>              
              <td><input type="text" class="form-control" className='meals'/></td>
            </tr>
          </tbody>
        </table> 
      
        <div className="btn-group">
            <Button variant='dark' onClick={() => addToList()}>Add To List</Button>
            <Button variant='dark' onClick={() => clearPlates()}>Clear Plates</Button>
        </div>
      </div>
    </main>
  );
}