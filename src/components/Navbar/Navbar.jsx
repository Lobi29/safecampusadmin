import React from 'react';

import Container from '../Container/Container';
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';

// styles
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.level1}>
      <div className={classes.level2}>

        <Container>
          <div className={classes.container}>

            <Logo />
            <NavItems />

          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar;