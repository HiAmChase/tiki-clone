import React, { useEffect, useState } from 'react';
import './Subtotal.css';
import { getTotalCart, toPrice } from '../../reducer';
import { useGlobalContext } from '../../context';

function Subtotal() {
  const [{ cart }] = useGlobalContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(getTotalCart(cart));
  }, [cart]);

  return (
    <div className="subtotal">
      <div className="total">
        <span>Tổng cộng</span>
        <span style={{ color: 'red' }}>{toPrice(total)}đ</span>
      </div>
      <button className="primary-btn">Mua hàng</button>
    </div>
  );
}

export default Subtotal;
