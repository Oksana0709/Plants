import React from "react";
import "./App.css";
import "./index";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import axios from 'axios';
import { Routes, Route} from "react-router-dom"; 
import Favorites from "./pages/Favorites";
import AppContext from './context';
import Orders from "./pages/Orders";



function App() {
  const [items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  

  React.useEffect( () => {
async function fetchData() {
const cartResponse = await axios.get('http://6540cf2345bedb25bfc2a8c7.mockapi.io/cart');
const favoritesResponse = await axios.get('https://654503c45a0b4b04436d73f3.mockapi.io/favorites');
const itemsResponse = await axios.get('http://6540cf2345bedb25bfc2a8c7.mockapi.io/items');


setCartItems(cartResponse.data);
setFavorites(favoritesResponse.data);
setItems(itemsResponse.data);
}
fetchData() 
}, 
[]);

  const onAddToCart = (obj) => { 
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))){
      axios.delete(`http://6540cf2345bedb25bfc2a8c7.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
    axios.post('http://6540cf2345bedb25bfc2a8c7.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj]);
  }};


  const onRemuveItem = (id) => {
    axios.delete(`http://6540cf2345bedb25bfc2a8c7.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

const onAddToFavorite = async (obj) => {
  try{
  if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
  axios.delete(`https://654503c45a0b4b04436d73f3.mockapi.io/favorites/${obj.id}`);
  setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
} else {
  const { data } = await axios.post('https://654503c45a0b4b04436d73f3.mockapi.io/favorites', obj);
  setFavorites((prev) => [...prev, data]);
} }
catch (error) {
alert('Failed to add to favorites!')
}}

const onChangeSearchInput= (event) => [
    setSearchValue(event.target.value)
  ];

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }



  return (
    <AppContext.Provider 
    value={{ 
    items, 
    favorites, 
    cartItems, 
    isItemAdded, 
    onAddToFavorite, 
    setCartOpened, 
    setCartItems, 
    onAddToCart }}>
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemuve={onRemuveItem}/>}
      
      {<Header onClickCart={() => setCartOpened(true)} />}


            <Routes>
            <Route 
          path="/" exact
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route 
          path="/favorites" exact
          element={
            <Favorites />
          }
        />
          <Route 
          path="/orders" exact
          element={
            <Orders />
          }
        />

</Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;



        
  
  

