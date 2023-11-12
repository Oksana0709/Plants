import React from "react";
import Card from "../components/Card/Card";
import axios from "axios";
import AppContext from "../context";



function Orders () {
  const {onAddtoFavorite, onAddToCart} = React.useContext(AppContext)
  const [orders, setOrders ] =  React.useState([]);

  React.useEffect(() => {
    (async () => {
      try { 
      
  const { data } = await axios.get('https://654503c45a0b4b04436d73f3.mockapi.io/orders');
 
  setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      } catch (error) {
        alert('Eroor')
      }
  })();
}, []);

  return (
    <div className="content">
      <div className="search__block">
        <h1 className="plants">My orders</h1>
      </div>
      <div className="cards__plants">
        {orders.map((item, index) => (
          <Card
          key={index}
          onFavorite={(obj) => onAddtoFavorite(obj)}
          onPluse={(obj) => onAddToCart(obj)}
          {...item}
          />
        ))}
      
      </div>
    </div>
  );
}

export default Orders;


