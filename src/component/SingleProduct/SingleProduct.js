import React, { useState, useEffect } from 'react';
import './SingleProduct.css';
import { useParams } from 'react-router-dom';
import products from '../../data';
import { useGlobalContext } from '../../context';

function SingleProduct() {
  const { id } = useParams();
  const [, dispatch] = useGlobalContext();
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(0);

  const getProduct = () => {
    const product = products.find((product) => product.id.toString() === id);

    setProduct(product);
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, []);

  const addToCart = () => {
    if (amount !== 0) {
      dispatch({
        type: 'ADD_TO_CART',
        item: { ...product, isBuying: false },
        amount,
      });
    }
  };

  return (
    <div className="single-product">
      <img src={product.image} alt="" />
      <div className="details">
        <h4 className="title">{product.title}</h4>
        <h2 className="price">{product.price}đ</h2>
        <div className="number-tool">
          <button
            className="number-btn"
            onClick={() => {
              if (amount > 0) setAmount(amount - 1);
            }}
          >
            -
          </button>
          <span>{amount}</span>
          <button
            className="number-btn"
            onClick={() => {
              setAmount(amount + 1);
            }}
          >
            +
          </button>
        </div>
        <button className="primary-btn w-300" onClick={() => addToCart()}>
          Chọn Mua
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
