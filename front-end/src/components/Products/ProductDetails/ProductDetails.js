import { Alert, AlertTitle, Rating } from '@material-ui/lab';
import React, { useEffect } from 'react';
import styles from './ProductDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../../actions/productActions';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const history = useHistory();

  const { product, loading, error } = productDetails;
  const {
    image,
    name,
    description,
    price,
    countInStock,
    rating,
    numReviews,
  } = product;

  useEffect(() => {
    dispatch(listProductDetails(match.params.productId));
  }, [dispatch, match]);

  const goBack = () => {
    history.push('/');
  };

  const p = loading ? (
    <CircularProgress />
  ) : error ? (
    <Alert severity='error'>
      <AlertTitle>Error</AlertTitle>
      {error}
    </Alert>
  ) : (
    <div className={styles.productDetails}>
      <button onClick={goBack}>GO BACK</button>
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

  return p;
};

export default ProductDetails;
