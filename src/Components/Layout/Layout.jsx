import React from 'react'
import Navbaar from '../Navbaar/Navbaar'
import Footer from '../Footer/Footer'
import Navbaar2 from '../Navbaar/Navbaar2'

const Layout = ({children}) => {
  return (
   <>
     <Navbaar2/>
     {children}
     <Footer/>
   </>
  )
}

export default Layout