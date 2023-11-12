import React from "react";
import Card from '../../src/components/Card/Card';


function Home({items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
}) {


    return (
         <div className="content">
        <div className="search__block">
          <h1 className="plants">All plants</h1>
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."></input>
          {searchValue && (<img onClick={() => setSearchValue ('')}
                className="clear"
                src="/img/buttonAdd.png"
                alt="Clear"
              />)}
        </div>
        <div className="cards__plants">
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
            key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}                     
      
        </div>
      </div> 
    )
}

export default Home;