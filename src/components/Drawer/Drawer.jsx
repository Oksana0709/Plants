import React from "react";
import { UseCart } from "../../Hooks/UseCart";
import styles from "./Drawer.module.scss";

const Drawer = ({ onClose, onRemuve, items = [] }) => {
  const { totalPrice } = UseCart();

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>
          Basket
          <div close__button>
            <img
              onClick={onClose}
              className={styles.close__button}
              src="/img/buttonClose.png"
              alt="Remove"
            />
          </div>
        </h2>

        <div className={styles.order}>
          <div className={styles.items}>
            {items.map((obj) => (
              <div key={obj.id} className={styles.cart__item}>
                <div
                  className={styles.cart__item__img}
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                ></div>
                <div className={styles.card__info}>
                  <p>{obj.title}</p>
                  <b>{obj.price} dollars</b>
                </div>
                <div className={styles.remove}>
                  <img
                    onClick={() => onRemuve(obj.id)}
                    className={styles.remove__button}
                    src="/img/buttonAdd.png"
                    alt="Remove"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='card__total__block'>
            <ul>
              <li>
                <span> Amount: </span>
                <div> </div>
                <b>{totalPrice} dollars</b>
              </li>
              <li>
                <span> Fix 5%: </span>
                <div> </div>
                <b>{(totalPrice / 100) * 5} dollars</b>
              </li>
            </ul>
            <button className='green__button'>
              Сheckout
              <img
                className='arrow'
                src="/img/pointer.png"
                alt="Arrow"
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Drawer;
