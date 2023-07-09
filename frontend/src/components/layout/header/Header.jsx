import React from 'react'
import './Header.css'
import Head from './Head'

import Navbar from './Navbar'

const Header = ({ CartItem }) => {
  return (
    <div className="">
      <Head />
      <Navbar CartItem={CartItem} />
    </div>
  )
}

export default Header
