import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">E-Ticaret Platformu</div>
      <nav className="navigation">
        <a href="/product-list">Ürünler</a>
        <a href="/shopping-cart">Sepetim</a>
        <a href="/order-history">Siparişlerim</a>
        <a href="/user-authentication">Giriş Yap</a>
      </nav>
    </header>
  );
};

export default Header;
