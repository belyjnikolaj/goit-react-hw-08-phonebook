import AppBar from 'components/appBar'
import React, { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            <Toaster position='bottom-right' reverseOrder={false} />
        </div>
  )
}

export default Layout