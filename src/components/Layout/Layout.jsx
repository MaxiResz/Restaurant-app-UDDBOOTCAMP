import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../../Routes/Footer/Footer'
import Navegation from '../../Routes/Navegation'

const Layout = () => {
  return (
    <div>
        <Navegation />
        <Footer />
        <Outlet />
    </div>
  )
}

export default Layout