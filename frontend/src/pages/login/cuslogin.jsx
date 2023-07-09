import React from 'react'
import jwt_decode from 'jwt-decode'
import Swal from 'sweetalert2'
import axios from 'axios'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'

export default function Cuslogin() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [role, setRole] = React.useState('buyer')

  async function cusLogin(event) {
    event.preventDefault()

    const User = {
      username: email,
      password
    }

    const response = await axios.post(`http://localhost:5000/api/auth/login`, User);
    const content = response.data;
    const user = content.user;
    const authToken = content.token;
    console.log("this is content",content);
    console.log("this is User",user);

    if (content.message === 'Logged in successfully.') {

      localStorage.setItem('session', 'yes')
      localStorage.setItem('buyerID', user._id)
      localStorage.setItem('buyerUsername', user.username)
      localStorage.setItem('buyerPassword', user.password)
      localStorage.setItem('authToken', authToken)
      localStorage.setItem('user', 'buyer')
      console.log(localStorage.getItem('session'))
      console.log(localStorage.getItem('user'))

      Swal.fire({
        icon: 'success',
        title: 'Successful...',
        text: 'Login Successful as a Customer!',
        footer: '<a href="/cusdash">Go to Dashboard</a>',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/cusdash'
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Email & Passoword Again!!!',
      })
    }
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="logincredcard">
        <section className="bg-gray-50 dark:bg-gray-900 glass glasscus">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link to="/cuslogin" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black">
              <b>Login As A Customer</b>
            </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 card">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
                <form className="space-y-4 md:space-y-6" onSubmit={cusLogin} autocomplete="off">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@mail.com"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 dark:text-black">
                    Don’t have an account yet?{' '}
                    <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
