import React, { useEffect, useState } from 'react'
import './CartPage.css'
const Cart_page = (props) => {

  const [quanArr , setquanArr] = useState([...Array(props.data.length).fill(1)])
  const [totalBill , settotalBill] = useState(0)

 

  const changeQuantity = (e) =>{
    let operation = e.target.innerText;
    let ind = e.target.value;
    let tempArr = quanArr
    if(operation==='+') tempArr[ind]++
    else if(tempArr[ind]>=2)   tempArr[ind]--
    setquanArr([...tempArr])
  }

  

  const items = props.data.map((item , index) =>
      <tr key={index}>
        <td><img src={item['image']} alt='img'></img></td>
        <td>{item['name']}</td>
        <td>${item['price']}</td>
        <td>
          <button value={index} onClick={changeQuantity}>-</button> 
            {quanArr[index]}
          <button value={index} onClick={changeQuantity}>+</button>
        </td>
        <td>${Number(item['price']) * quanArr[index]}</td>
        <td><button className='del' onClick={()=>props.deleteItem(index)}><i  class="fa-solid fa-trash-can"></i></button></td>
      </tr>
  )

  // console.log(quanAr
  useEffect(() =>{
    let bill = 0;
    props.data.map((item , index) =>(
      bill+=Number(item['price'])*quanArr[index]
    ))
    settotalBill(bill)
  })
  
  if(props.data.length===0){
    return <div id='cart-page'><h1 style={{color: 'Red'}}>Your Cart is Empty !</h1></div>
  }
  
  return (
    <div id='cart-page'>
      <table id='item_table'><thead><tr><th>Image</th><th>Name</th><th>Price</th><th>Quantity</th><th>Total Price</th><th>Action</th></tr></thead><tbody>
        {
          items.map(item => item)
        }
        <tr>
          <td colspan={6}><button id='clear' onClick={props.clearCart}>Clear Cart</button></td>
        </tr>
      </tbody></table>
      <div id='bill'>
        <h3>Bill:</h3>
        <table>
          <tbody>
            <tr>
              <td>Total items: </td>
              <td>{props.data.length}</td>
            </tr>
            <tr>
              <td>Total amount:</td>
              <td>${totalBill}/only</td>
            </tr>
            <tr>
              <td colSpan={2}><button>Checkout</button> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart_page