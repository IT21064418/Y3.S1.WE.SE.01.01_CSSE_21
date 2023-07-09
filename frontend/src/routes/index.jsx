import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useAuth } from '../hooks'
import Home from '../pages/home.jsx'
import NotFound from '../pages/404'
import Cart from '../pages/cart'
import Payment from '../pages/payment'
import Additems from '../pages/additems'
import Displayitems from '../pages/displayitems'
import Addreview from '../pages/addreview'
import Login from '../pages/login/loginselect'
import Cuslogin from '../pages/login/cuslogin'
import Emplogin from '../pages/login/emplogin'
import Adminlogin from '../pages/login/adminlogin'
import Register from '../pages/register/regselect'
import CusRegister from '../pages/register/cusregister'
import EmpRegister from '../pages/register/empregister'
import CusDash from '../pages/cusdash/dash'
import CusUpdate from '../pages/cusdash/cusupdate'
import CusDanger from '../pages/cusdash/cusdanger'
import EmpDash from '../pages/empdash/dash'
import EmpUpdate from '../pages/empdash/empupdate'
import EmpDanger from '../pages/empdash/empdanger'
import AdminDash from '../pages/admindash/dash'
import AdminDashboard from '../pages/AdminDashboard'



const AnimatedRoutes = () => {
  // useAuth()

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/additems" element={<Additems />} /> 
        <Route path="/displayitems" element={<Displayitems />} /> 
        <Route path="/addreview/:id" element={<Addreview />} /> 

        {/* Login Selection */}
					<Route path="/login" element={<Login />} />
					<Route path="/login/cuslogin" element={<Cuslogin />} />
					<Route path="/login/emplogin" element={<Emplogin />} />
					<Route path="/login/adminlogin" element={<Adminlogin />} />

          {/* Register Selection */}
					<Route path="/register" element={<Register />} />
					<Route path="/register/cusregister" element={<CusRegister />} />
					<Route path="/register/empregister" element={<EmpRegister />} />

					{/* Seller Dashboard */}
					<Route path="/empdash" element={<EmpDash />} />
					<Route path="/empdash/empupdate/:id" element={<EmpUpdate/>}/> 
					<Route path="/empdash/empdanger/:id" element={<EmpDanger/>}/> 

					{/* Customer Dashboard */}
					<Route path="/cusdash" element={<CusDash />} />
					<Route path="/cusdash/cusupdate/:id" element={<CusUpdate />} />
					<Route path="/cusdash/cusdanger" element={<CusDanger />} />
          
					{/* Admin Dashboard */}
					<Route path="/admindash" element={<AdminDash />} />
          <Route path='/admin' element={<AdminDashboard/>}/>

      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
