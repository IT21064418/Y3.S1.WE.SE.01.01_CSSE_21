import React from 'react'
import './empdash.css'

export default function card() {
  return (
    <div>
      <div className="cusdashcard">
        <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 cuscardx">
          <img className="rounded-lg object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={localStorage.getItem('empImgurl')} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
              {localStorage.getItem('empFname')} {localStorage.getItem('empLname')}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">{localStorage.getItem('empContactNo')}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">{localStorage.getItem('empEmail')}</p>
          </div>
        </a>
        <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 cuscardx">
          <div className="color">
            <div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <span class="font-medium">Seller Position - {localStorage.getItem('empPosition')}</span>
            </div>
            {/* <div class="cardbutton btn1">
              <a href="/reqloan">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Request a Loan
                </button>
              </a>
            </div> */}
            <div class="cardbutton mt-0.5">
              <a href={`./empdash/empupdate/${localStorage.getItem('sellerID')}`}>
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2">
                  Update Profile
                </button>
              </a>
              <a href={`/empdash/empdanger/${localStorage.getItem('sellerID')}`}>
                <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2">
                  Danger Zone
                </button>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

// <a href = "/reqloan"><button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Request a Loan</button></a>
