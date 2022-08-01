import './App.css';
import Card from './Card';
import Header from './Header';
import Data from './Data';
import { useState } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Cart_page from './Cart_page';

function App() {
  const [cart , setCart] = useState([])

  const add_to_cart = (e) => {
    let ind = e.target.value
    if(cart.indexOf(Data[ind])===-1) {
      setCart([...cart , Data[ind]])
    }
  }
  const clearCart =() => {
    setCart([])
  }

  const deleteItem = (ind) => {
    console.log(ind)
    let temp = cart;
    temp.splice(ind , 1)
    setCart([...temp])
  }

  // console.log(cart)

  return (
    // <div className="App">
    //   <Header cart_size ={cart.length}></Header>
    //   <Card data={Data}  add_to_cart={add_to_cart}></Card>
    // </div>
    <Routes>
      <Route path='/' element={<Header cart_size ={cart.length}></Header>}>
        <Route index element={<Card data={Data}  add_to_cart={add_to_cart} ></Card>}></Route>
        <Route path='cart' element={<Cart_page data={cart} clearCart={clearCart} deleteItem = {deleteItem}></Cart_page>}></Route>
      </Route>
    </Routes>
  )
}

export default App;
