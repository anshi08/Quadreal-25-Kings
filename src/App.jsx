import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { Container } from '@mui/material'

const App = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); 

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App