import React, { useEffect } from 'react';
import styles from './Products.module.css';
import Product from './Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import { CircularProgress } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);

  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const p = loading ? (
    <CircularProgress />
  ) : error ? (
    <Alert severity='error'>
      <AlertTitle>Error</AlertTitle>
      {error}
    </Alert>
  ) : (
    <div className={styles.products}>
      {products.map(product => (
        <Product
          key={product._id}
          id={product._id}
          name={product.name}
          image={product.image}
          rating={product.rating}
          reviews={product.numReviews}
          price={product.price}
        />
      ))}
    </div>
  );

  return p;
};

export default Products;
