import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { getAmountItems } from '../../reducer';

function Header() {
  const [{ cart }] = useGlobalContext();

  return (
    <div className="header">
      <Link to="/" className="header_logo">
        <img
          src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
          alt=""
        />
      </Link>
      <div className="menu_button">
        <img
          src="https://salt.tikicdn.com/ts/upload/96/d1/77/e499ea39b0773a337d2217ad473fcb97.png"
          alt=""
          className="menu_item"
        />
        <div className="menu_info">
          <span className="menu_infoLineOne">Danh mục</span>
          <span className="menu_infoLineTwo">Sản phẩm</span>
        </div>
      </div>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <button className="header_searchButton">
          <img
            src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
            alt=""
          />
          <span>Tìm kiếm</span>
        </button>
      </div>
      <div className="menu_button">
        <img
          src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
          alt=""
        />
        <div className="menu_info">
          <span className="menu_infoLineOne">Tài khoản</span>
          <span className="menu_infoLineTwo">Bùi Ngọc Thịnh</span>
        </div>
      </div>
      <Link to="/checkout" className="menu_button basket">
        <img
          src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
          alt=""
        />
        <small className="basket_count">{getAmountItems(cart)}</small>
        <div className="menu_info ">
          <span className="menu_infoLineTwo">Giỏ hàng</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
