import React from 'react';
import './Product.css';
import { toPrice } from '../../reducer';
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';

function Product(props) {
  const [, dispatch] = useGlobalContext();

  const shortenTitle = (str) => {
    if (str.length > 65) return str.substring(0, 65) + '...';
    return str;
  };

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: { ...props, isBuying: false },
      amount: 1,
    });
  };

  return (
    <div className="product">
      <Link to={`/products/${props.id}`}>
        <div className="img_container">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="product_info">
          <span className="title">{shortenTitle(props.title)}</span>
          <div className="rating">
            {Array(props.rating)
              .fill()
              .map((_, index) => {
                return (
                  <svg
                    key={index}
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    size="14"
                    color="#fdd836"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: 'rgb(253, 216, 54)' }}
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                );
              })}
          </div>
          <p className="price">{toPrice(props.price)} đ</p>
        </div>
      </Link>
      <button className="add-cart" onClick={addToCart}>
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}

export default Product;
