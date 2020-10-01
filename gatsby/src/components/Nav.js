import React from 'react';
import { Link, navigate } from 'gatsby';

function goToSlicematers() {
  setTimeout(() => {
    console.log('Go to slicers!!!');
    navigate('/slicemaster', { replace: true });
  }, 2000);
}

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
        <li>
          <button type="button" onClick={goToSlicematers}>
            Click me to see slicemaster after 2 seconds
          </button>
        </li>
      </ul>
    </nav>
  );
}
