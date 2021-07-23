import React from 'react';
import './Home.css';
import products from '../../data';
import Product from '../Product/Product';

function Home() {
  return (
    <div className="home">
      <div className="home_banner">
        <img
          src="https://salt.tikicdn.com/cache/w824/ts/banner/36/a6/e8/3374427ab0b746f46d961c22d1fc46c5.png.jpg"
          alt="Banner 1"
          className="banner"
        />

        <img
          src="https://salt.tikicdn.com/cache/w408/ts/banner/69/9a/36/dcff148edf2a3918a8ac974d4b75cb20.png"
          alt="Banner 2"
          className="banner"
        />
      </div>
      <div className="products_container">
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
