import React from 'react';
import styles from './Header.module.css';
import { Person, ShoppingCart } from '@material-ui/icons';

const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className='header__logo'>MYSHOP</h3>
      <div className={styles.icons}>
        <div className={styles.iconsCart}>
          <ShoppingCart /> <span>CART</span>
        </div>
        <div className={styles.iconsSignIn}>
          <Person /> <span>SIGN IN</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
