import React, { useState, useEffect } from 'react'
//import { storage } from "../../firebase";
//import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useParams, useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function EmpUpdate() {
  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageList , setImageList] = useState([]);

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const token = localStorage.getItem('authToken');
  console.log(token);
  // const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      axios.get(`http://localhost:5001/api/users/${params.id.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((getData) => {
        console.log(getData.data);
      })

      setUsername(getData.username)
      setPassword(getData.password)

      setForm(record)
    }
    fetchData()

    return
  }, [params.id, navigate])

  return (
    <div className="cusupdate">
      <section className="bg-gray-50 dark: ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 cusregcard">
          <a href="/register" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white regtext">
            <img className="w-10 h-10 mr-2 regimg" src="https://i.ibb.co/dKgfxZQ/cus.png" alt="logo" />
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Update Seller Profile</span>
            </h1>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-l xl:p-0 dark:bg-gray-800 dark:border-gray-700 cusregform">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form
                className="space-y-4 md:space-y-6"
                autoComplete="off"
                onSubmit={async (e) => {
                  e.preventDefault()

                  const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`

                  console.log(imgurl.name == null)

                  // if (address === "") { console.log("address is empty"); }

                  const storageRef = ref(storage, `customer/${Image.name + v4()}`)

                  await uploadBytes(storageRef, imgurl)
                    .then(() => {
                      console.log('uploaded')
                    })
                    .catch((err) => {
                      console.log(err)
                    })

                  await getDownloadURL(storageRef)
                    .then(async (url) => {
                      setImgurl(url)

                      console.log('url ' + url)

                      console.log('imgurl ' + imgurl + ' end')

                      if (Image.name == null) {
                        setImgurl(localStorage.getItem('imgurl'))
                      }

                      if (imgurl === ' ') {
                        console.log('imgurl is null')
                        setImgurl(localStorage.getItem('imgurl'))
                      }

                      const editedCustomer = {
                        fname,
                        lname,
                        contact,
                        position: localStorage.getItem('empPosition'),
                        email,
                        imgurl: url,
                        totalsaletoday: localStorage.getItem('empTotalSales'),
                        totalappointments: localStorage.getItem('empTotalAppoinments'),
                        totalservices: localStorage.getItem('empTotalServices'),
                      }

                      console.log('Image : ' + imgurl)

                      const response = await fetch(`${BASE_URL}/employee/update/${params.id}`, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(editedCustomer),
                      }).catch((err) => {
                        window.alert(err)
                        // return;
                      })
                      const content = await response.json()
                      console.log(content)

                      localStorage.setItem('empFname', fname)
                      localStorage.setItem('empLname', lname)
                      // localStorage.setItem("cusAddress", address);
                      localStorage.setItem('empContactno', contact)
                      localStorage.setItem('empEmail', email)
                      localStorage.setItem('empImgurl', url)

                      Swal.fire({
                        icon: 'success',
                        title: 'Successful...',
                        text: 'Profile Updated Successfully!',
                        footer: '<a href="/empdash">Go to Dashboard</a>',
                      }).then((result) => {
                        if (result.isConfirmed) {
                          window.location.href = '/empdash'
                        }
                      })
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                }}
              >
                {/* name  */}
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Username
                    </label>
                    <input
                      type="text"
                      id="lname"
                      value={username}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      onChange={(e) => setUsername(e.target.value)}
                      defaultValue={form.lname}
                      required
                    />
                  </div>
                </div>
                {/* contactno */}
                <div>
                  <label htmlFor="contactno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="text"
                    name="contactno"
                    id="contactno"
                    value={password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="011-2364567"
                    onChange={(e) => setPassword(e.target.value)}
                    defaultValue={form.contact}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  // onClick={(e) => {
                  // 	if(document.getElementById("file").value === ""){

                  // 	}
                  // }}
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
