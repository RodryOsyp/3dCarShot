import React from "react";
import style from "./Header.module.css";
const Header = ({children}) => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.logo}>TimCar</div>
        <ul>
          <li>Vehicles</li>
          <li>Shopping Assist</li>
          <li>Inventory</li>
        </ul>
        {children}
      </nav>
    </header>
  );
};

export default Header;
