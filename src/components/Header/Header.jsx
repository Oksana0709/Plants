import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { UseCart } from "../../Hooks/UseCart";

const Header = (props) => {
  const { totalPrice } = UseCart();
  return (
    <header className={styles.header__section}>
      <Link to="/">
        <div className={styles.header__left}>
          <img
            className={styles.img__logo}
            src="/img/logo/logo.jpg"
            alt="logo"
          />
          <div className={styles.header__info}>
            <h3>REACT STORE</h3>
            <p className={styles.store}>Store beautiful plants</p>
          </div>
        </div>
      </Link>
      <ul className={styles.header__right}>
        <li onClick={props.onClickCart}>
          <img
            className={styles.img__basket}
            src="/img/basket.png"
            alt="Basket"
          />
          <span>{totalPrice} dollars</span>
        </li>

        <li>
          <Link to="/favorites">
            <img
              className={styles.img__heart}
              src="/img/heartWhite.png"
              alt="Heart"
            />
          </Link>
        </li>

        <li>
          <Link to="/orders">
            <img className={styles.img__user} src="/img/user.png" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
