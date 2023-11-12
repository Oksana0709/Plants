import React from "react";
import styles from './Card.module.scss';
import AppContext from "../../context";


const Card = ({id, title, imageUrl, price, onPlus, onFavorite, favorited = false}) => {

const {isItemAdded} = React.useContext(AppContext);
const [isFavorite, setIsFavorite] = React.useState(favorited);

const onClickPlus = () => {
  onPlus({id, title, imageUrl, price});
};

const onClickFavorite = () => {
  onFavorite({id, title, imageUrl, price});
  setIsFavorite(!isFavorite)
}

    return (
     
      <div className={styles.card}>
        <div onClick={onClickFavorite}> 
        <img className={styles.img__favorite}
        src={ isFavorite ? "/img/heart.png" : "/img/heartWhite.png"} alt="Favorite" />
        </div>
    
            <img
              className={styles.img__card__1}
              src={imageUrl}
              alt="plant"/>
            <h5 className={styles.card__name}>{title}</h5>
            <div className={styles.card__buttom}>
              <div className={styles.card__price}>
                <span>Prise:</span>
                <b>{price} dollars</b>
              </div>
              {onPlus && 
              <img className={styles.img__button} src={isItemAdded(id) ? "/img/button.png" : "/img/buttonAdd.png"} 
              alt="button" onClick={onClickPlus}/>}
            </div>
          </div>
    )
        
}

export default Card;






