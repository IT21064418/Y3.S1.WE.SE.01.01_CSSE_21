/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'

export default function Cardset() {
  const goto = 'See more'
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="containerr">
        <div className="row">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cards">
            <a href="/managecus">
              <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/synthetic-dealz.appspot.com/o/empdash%2Fcustomer.jpg?alt=media&token=bb73c69a-2e84-4dd1-baa3-f6bf900e5dbc" alt="" />
            </a>
            <div className="p-5">
              <a href="/managecus">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Customer Management</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Manage all the customers, Loyalty privileges of the Customers. Get the report of Customers' Behavior.</p>
              <a href="/managecus" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {goto}
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cards">
            <a href="/managehr">
              <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/synthetic-dealz.appspot.com/o/empdash%2Femployee.jpg?alt=media&token=692215b4-956c-4faa-9619-c38d63657f33" alt="" />
            </a>
            <div className="p-5">
              <a href="/managehr">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Seller Management</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Manage all the Sellers. Get the report of Sellers' Behavior.</p>
              <a href="/managehr" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {goto}
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cards">
            <a href="#">
              <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/synthetic-dealz.appspot.com/o/empdash%2Ffinance.jpg?alt=media&token=4f45400d-488c-43a2-b29c-7b0c3ab77dc8" alt="" />
            </a>
            <div className="p-5">
              <a href="/managefinance">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Financial Management</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Manage all the Payement Details. Get reports of Payment Details</p>
              <a href="/managefinance" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {goto}
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cards">
            <a href="/stockhome">
              <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/synthetic-dealz.appspot.com/o/empdash%2Fstocks.png?alt=media&token=2d911e7a-83d8-4f63-8ed3-8fad9cbcc01e" alt="" />
            </a>
            <div className="p-5">
              <a href="/stockhome">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Stock Management</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Manage all the Stocks and Brands Details. Get a report about the demands of the Items and the Brands.</p>
              <a href="/stockhome" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {goto}
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <br />

        <div className="cont">
          <div className="row">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cards">
              <a href="/managestocks">
                <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/synthetic-dealz.appspot.com/o/empdash%2Fpur.jpg?alt=media&token=8b6f84f4-6815-4b5b-9e88-b4fc64d4a1fc" alt="" />
              </a>
              <div className="p-5">
                <a href="/managepurchase">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purchase Management</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Manage all the details of the purchases done by the system. Generate a report of top Purchase details .</p>
                <a href="/managepurchase" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  {goto}
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
