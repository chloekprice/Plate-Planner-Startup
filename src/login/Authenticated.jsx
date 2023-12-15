import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

// import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='playerName'>{props.userName}'s Plate Planner</div>
      <div className='options'>
        <Button variant='dark' onClick={() => navigate('/calendar')}>
          Plan Your Plate!
        </Button>
        <Button variant='dark' onClick={() => logout()}>
          Logout :/
        </Button>
      </div>
    </div>
  );
}