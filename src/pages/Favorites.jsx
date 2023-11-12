import React from "react";
import Card from "../components/Card/Card";
import AppContext from '../context';




function Favorites() {
const {favorites, onAddToFavorite} = React.useContext(AppContext)

  return (
    <div className="content">
      <div className="search__block">
        <h1 className="plants">Favorites</h1>
      </div>
      <div className="cards__plants">
        {favorites.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites;
