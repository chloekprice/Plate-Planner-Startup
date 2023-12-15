import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import './login.css';

import { Unauthenticated } from './Unauthenticated';
import { Authenticated } from './Authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <section className="slide">
      <main>
        <div className="login">
          {authState === AuthState.Authenticated && (
            <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
          )}
          {authState === AuthState.Unauthenticated && (
            <Unauthenticated
              userName={userName}
              onLogin={(loginUserName) => {
                onAuthChange(loginUserName, AuthState.Authenticated);
              }}
            />
          )}
        </div>
      </main>
    </section>
  );
}