import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {MessageDialog} from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [userEmail, setEmail] = React.useState('');
  const [userPassword, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  const navigate = useNavigate();

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ userName: userName, email: userEmail, password: userPassword }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response.ok) {
        localStorage.setItem('user', userName);
        props.onLogin(userName);
        navigate('/calendar');
  } else {
        const body = await response.json();
        console.log("sorry, there has been an error");
        setDisplayError(`⚠ Error: That login has been taken.`);
      }
  }

  return (
    <>
      <div className="box">
        <h2>Welcome</h2>
        <p>Login to Plan Your Plate!</p>
        <form>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className='form-control'
              type='text'
              // value={props.userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder='your name'
            /> 
        </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
            className='form-control'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='your@email.com'
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input
            className='form-control'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            />
        </div>
        <div className='btn-controls'>
            <Button className="btn btn-dark" onClick={() => loginUser()}>Login</Button>
            <Button className="btn btn-dark" onClick={() => createUser()}>Create</Button>
        </div>
        <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </form>
    </div>
    </>
  );
}