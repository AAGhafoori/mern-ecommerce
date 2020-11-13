import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Products from './components/Products/Products';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route path='/products/:productId' component={ProductDetails} />
        <Route path='/products'>
          <main>
            <h1>LATEST PRODUCTS</h1>
            <Products />
          </main>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
