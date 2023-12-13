import React from 'react';
import { Button } from 'react-bootstrap';
import './login.css';

export function Login() {
  return (
    <section className="slide">
      <main>
          <div className="login">
            <div className="box">
              <h2>Welcome</h2>
              <p>Login to Plan Your Plate!</p>
              <form>
                <div className="mb-3">
                  <label for="exampleInputName1" className="form-label">Name</label>
                  <input type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className='btn-controls'>
                  <Button type="submit" className="btn btn-dark">Login</Button>
                  <Button type="submit" className="btn btn-dark">Create</Button>
                </div>
              </form>
            </div>
        </div> 
      </main>
    </section>
  );
}