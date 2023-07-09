import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function CusRegister() {

  const navigate = useNavigate();
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [address, setAddress] = useState('')
  const [contactno, setContactno] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isErr, setIsErr] = useState('')

  // navigate("/login/cuslogin");
  const checkValidation = (e) => {
    setConfirmPassword(e.target.value)
    if (password.password !== confirmPassword) {
      // alert("Password not matched");
      // setIsErr("Password are not matched");
      console.log(isErr)
      console.log(password.password)
      console.log(confirmPassword)
    } else {
      setIsErr('')
    }
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    const user = {
      username: fname,
      password,
      role: 'buyer' 
    }

    try{
      console.log(user);
      axios.post("http://localhost:5000/api/auth/register", user).then(() => {
        console.log('User Registered Successfully');
        navigate('/login/cuslogin');
      }).catch((err) => {
        console.log(err)
      })

      // if (content.success === true) {
      //   window.location.href = '/login/cuslogin'
      // }
    } catch(error){
      console.log(error);
    }

  }

  return (
    <div className="cusreg">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="bg-gray-50 dark: cusregsec">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 cusregcard">
          <a href="/register" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white regtext">
            <img className="w-10 h-10 mr-2 regimg" src="https://i.ibb.co/dKgfxZQ/cus.png" alt="logo" />
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Register As A Customer</span>
            </h1>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-l xl:p-0 dark:bg-gray-800 dark:border-gray-700 cusregform">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create and account</h1>
              <form
                className="space-y-4 md:space-y-6"
                autocomplete="off"
                onSubmit={handleSubmit}
              >
                {/* name  */}
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      First name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      onChange={(e) => setFname(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      onChange={(e) => setLname(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/* address name */}
                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Address
                  </label>
                  <input
                    type="text"
                    name="adddress"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="No. 134, Main Road, Colombo"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                {/* contactno */}
                <div>
                  <label htmlFor="contactno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contact No
                  </label>
                  <input
                    type="text"
                    name="contactno"
                    id="contactno"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="011-2364567"
                    onChange={(e) => setContactno(e.target.value)}
                    required
                  />
                </div>
                {/* email */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@mail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  {/* password */}
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
                      onChange={(e) => setPassword(e.target.value)}
                      // value = {password}
                      required
                    />
                  </div>
                  {/* confirm password */}
                  <div>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={confirmPassword}
                      onChange={(e) => checkValidation(e)}
                      required
                    />
                  </div>
                </div>

                {/* <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Upload Profile Picture
                    </label>
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-red-600">
                      {isErr}
                    </label>
                  </div>
                </div>
                image */}
                {/* <div>
                  <div>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="default_size"
                      type="file"
                      name="image"
                      onChange={(e) => {
                        setImgurl(e.target.files[0])
                      }}
                      required
                    />
                  </div>
                </div> */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                      I accept the{' '}
                      <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </div>
  )
}
