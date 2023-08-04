import { Container } from '@mui/material'
import Header from 'components/header/Header'
import React, { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <Container style={{ padding: '0'}}>
            <Header />
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            <Toaster position='bottom-right' reverseOrder={false} />
        </Container>
  )
}

export default Layout