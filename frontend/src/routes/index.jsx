import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useAuth } from '../hooks'
import Home from '../pages/home'
import NotFound from '../pages/404'
import Cart from '../pages/cart'
import Payment from '../pages/payment'
import Additems from '../pages/additems'
import Displayitems from '../pages/displayitems'
import Addreview from '../pages/addreview'

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
        <Route path="/addreview" element={<Addreview />} /> 
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
