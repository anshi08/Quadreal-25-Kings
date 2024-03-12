import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { Container } from '@mui/material'

const App = () => {
  return (
    <>
    <Container maxWidth='xl'>
    <Header />
    <Outlet />
    <Footer />
    </Container>
    </>
  )
}

export default App