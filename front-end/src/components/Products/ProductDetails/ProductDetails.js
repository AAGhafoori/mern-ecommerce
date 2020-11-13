import { Rating } from '@material-ui/lab';
import React from 'react';
import styles from './ProductDetails.module.css';
import productList from '../../../products';

const ProductDetails = ({ match }) => {
  const product = productList.find(
    product => product._id === match.params.productId
  );
  const {
    image,
    name,
    description,
    price,
    countInStock,
    rating,
    numReviews,
  } = product;
  return (
    <div className={styles.productDetails}>
      <button>GO BACK</button>
      <div className={styles.main}>
        <img src={image} alt='productImage' />
        <div className={styles.details}>
          <h3>{name}</h3>
          <div className={styles.rating}>
            <Rating readOnly value={rating} precision={0.5} size='medium' />
            <p>{numReviews} reviews</p>
          </div>
          <p>Price: $ {price}</p>
          <p>{description}</p>
        </div>
        <div className={styles.summary}>
          <p>
            <span>Price:</span>
            <span>$ {price}</span>
          </p>
          <p>
            <span>Status:</span>
            <span>{countInStock === 0 ? 'Out of Stock' : 'In Stock'}</span>
          </p>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
