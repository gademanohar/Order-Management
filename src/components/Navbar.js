import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/account' className='nav-links' onClick={closeMobileMenu}>
              Account <i className="fas fa-angle-down"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/recentlyViewed'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Recently Viewed <i className="fas fa-angle-down"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/orderStatus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Order Status <i className="fas fa-angle-down"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/savedItems'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Saved Items <i className="fas fa-angle-down"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
