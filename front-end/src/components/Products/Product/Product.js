import React from 'react';
import styles from './Product.module.css';
import { Rating } from '@material-ui/lab';
import { Link } from 'react-router-dom';

const Product = ({ id, image, name, rating, reviews, price }) => {
  return (
    <div className={styles.product}>
      <img src={image} alt='productImage' />
      <Link to={id}>
        <p>{name}</p>
      </Link>
      <div className={styles.rating}>
        <Rating readOnly value={rating} precision={0.5} size='small' />
        <p>{reviews} reviews</p>
      </div>
      <h2>$ {price}</h2>
    </div>
  );
};

export default Product;
