import React, { useState } from 'react'
// import logo from "../../components/assets/images/logo.svg"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'



const Navbar = ( ) => {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  // fixed Header
  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search')
    search.classList.toggle('pb-[5rem]')
    search.classList.toggle('active', window.scrollY > 36)
  })

  // Toogle Menu
  const [userMenue, setUserMenue] = useState(false)

  const handleClick = () => {
    setUserMenue(!userMenue)
  }

  const navLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Products',
      path: '/displayitems',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ]

  return (
    <>
      <section className="search ">
        <div className="container c_flex">
          {/* <div className="logo width ">
            <h1 className="text-2xl text-green-800 font-bold">WellnessRoots</h1>
          </div> */}

          <div className="navlink">
            <ul className="link f_flex capitalize ">
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              {navLinks.map((link, index) => (
                <li className="mr-10">
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <div className="cart">
              <button onClick={handleClick}>
                <i className="fa  fa-user icon-circle"></i>
              </button>
            </div>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle icon-circle"></i>
                <span>{cartItems.length === 0 ? '' : cartItems.length}</span>
              </Link>
            </div>
          </div>
          {/* mobile nav */}
          <div className={`50 ${userMenue ? '' : 'hidden'}  absolute right-12  top-28 z-30 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown`}>
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="cusdash" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Earnings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
