import React from 'react';

import Navigation from './Navigation';
import AuthContext from '../../../ExampleContext/auth-context';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
      <header className={classes['main-header']}>
        <h1>Teaching Channel</h1>
        <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
      </header>
  );
};

export default MainHeader;
