import React from 'react';
import styles from './Products.module.css';
import Product from './Product/Product';
import productList from '../../products';

const Products = () => {
  return (
    <div className={styles.products}>
      {productList.map(product => (
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
};

export default Products;
