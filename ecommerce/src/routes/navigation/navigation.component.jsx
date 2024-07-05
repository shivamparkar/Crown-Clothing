import { React, Fragment } from "react";

import { Outlet, Link } from "react-router-dom";

import './navigation.styles.scss';


import { ReactComponent as CrownLogo } from '../../assets/Logo/crown.svg'

const Navigation = () => {


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
         <CrownLogo className="logo" />
        </Link>
       
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          </div>

        <div className="nav-links-container">
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
