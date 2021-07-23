import React, { useState, useEffect } from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { toPrice, getAmountItems } from '../../reducer';
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';

function Checkout() {
  const [{ cart }, dispatch] = useGlobalContext();
  const [isBuyingAll, setIsBuyingAll] = useState(false);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    dispatch({ type: 'BUYING_ALL', isBuyingAll: isBuyingAll });
    // eslint-disable-next-line
  }, [isBuyingAll]);

  useEffect(() => {
    setAmount(getAmountItems(cart));
  }, [cart]);

  const updateAmount = (type, id) => {
    if (type === 'INC') {
      dispatch({ type: 'INCREASE_ITEM', id: id });
    } else if (type === 'DEC') {
      dispatch({ type: 'DECREASE_ITEM', id: id });
    }
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id: id });
  };

  const removeAll = () => {
    dispatch({ type: 'REMOVE_ALL' });
  };

  const buyItem = (id) => {
    dispatch({ type: 'BUYING_ITEM', id: id });
  };

  return (
    <div className="checkout">
      {amount !== 0 ? (
        <>
          <div className="checkout_left">
            <h3>Giỏ hàng</h3>
            <div className="cart">
              <div className="form-controller">
                <input
                  type="checkbox"
                  name="all"
                  id="all"
                  checked={isBuyingAll}
                  onChange={(e) => {
                    setIsBuyingAll(e.target.checked);
                  }}
                />
                <label htmlFor="all">
                  Tất cả ({getAmountItems(cart)} sản phẩm)
                </label>
              </div>
              <span>Đơn giá</span>
              <span>Số lượng</span>
              <span>Thành tiền</span>
              <button className="delete-btn" onClick={() => removeAll()}>
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                  alt=""
                />
              </button>
            </div>
            {cart.map((item) => {
              return (
                <div className="cart checkout-product" key={item.id}>
                  <div className="form-controller">
                    <input
                      type="checkbox"
                      name={item.title}
                      id={item.id}
                      checked={item.isBuying}
                      onChange={() => buyItem(item.id)}
                    />
                    <img src={item.image} alt="" />
                    <label htmlFor={item.title}>{item.title}</label>
                  </div>

                  <span className="price">{toPrice(item.price)}đ</span>
                  <div className="number">
                    <div className="number-tool">
                      <button
                        className="number-btn"
                        onClick={() => updateAmount('DEC', item.id)}
                      >
                        -
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className="number-btn"
                        onClick={() => updateAmount('INC', item.id)}
                      >
                        +
                      </button>
                    </div>
                    <span>
                      Số lượng: <strong>{item.amount}</strong>
                    </span>
                  </div>

                  <span className="price total-price">
                    {toPrice(item.price * item.amount)}đ
                  </span>
                  <button
                    className="delete-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    <img
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                      alt=""
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="checkout_right">
            <Subtotal />
          </div>
        </>
      ) : (
        <>
          <div className="checkout-container">
            <img
              src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"
              alt=""
            />
            <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
            <Link to="/">
              <button className="secondary-btn">Tiếp tục mua sắm</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
