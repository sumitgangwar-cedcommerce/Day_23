import React from 'react'
import './Card.css'

const Card = (props) => {
  let products = props.data.map((data , i) => 
            <div className="card-item" key={i}>
                <p><img src={data['image']} alt='img'></img></p>
                <p>Name: {data['name']}</p>
                <p>Price :${data['price']}</p>
                <p><button value={i} onClick={props.add_to_cart}>Add to cart</button></p>
            </div>  
  )
//   console.log(products)
  return(
      <div id="card">   
          {products}
      </div>
  )
}

export default Card