import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../layout/Navbar.tsx'
import Footer from './Footer.tsx'
import { SpeedInsights } from "@vercel/speed-insights/react"


const MainLayout = () =>{
    return(
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <SpeedInsights />
            <Footer />
        </div>
    )
}

export default MainLayout;
