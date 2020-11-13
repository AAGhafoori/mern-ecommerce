import React from 'react';
import styles from './Footer.module.css';
import { Copyright } from '@material-ui/icons';

const Footer = () => {
  return (
    <div className={styles.copyright}>
      <p>
        Copyright <Copyright /> 2020
      </p>
    </div>
  );
};

export default Footer;
