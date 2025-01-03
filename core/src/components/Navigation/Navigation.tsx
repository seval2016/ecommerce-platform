import React from 'react';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation-bar">
      <a href="/">Anasayfa</a>
      <a href="/about">Hakkımızda</a>
      <a href="/contact">İletişim</a>
    </nav>
  );
};

export default Navigation;
