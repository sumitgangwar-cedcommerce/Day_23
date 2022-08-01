import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import './Header.css'
const Header = (props) => {
  return (
    <>
        <div id='head'>
            <h1><Link to='/'>React Shopping cart</Link></h1>
            <p><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link><span>{props.cart_size}</span></p>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Header