import { motion } from 'framer-motion'
import { ToastContainer } from 'react-toastify'
import { Loader } from '../common'
import Footer from './footer'
import Header from './header/Header'
// import Header from './navbar'
// import Head from './header/Head'

const Layout = ({ children }) => {
  return (
    <motion.main className=" font-inter overflow-x-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.3 } }} transition={{ duration: 0.3 }}>
      <Header />
      <div className="w-screen h-[200rem]">{children}</div>
      <Footer />
      <ToastContainer />
      <Loader />
    </motion.main>
  )
}

export default Layout
