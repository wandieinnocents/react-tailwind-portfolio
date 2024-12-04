import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar';
import HomeBanner from './components/HomeBanner';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Clients from './components/Clients';


function App() {

    return (
        <>
            {/* nav */}
            <NavBar />

            {/* hero */}
            <HomeBanner />

            {/* services  */}
            <Services />

            <Testimonials />
            <Clients />
            <Footer />

        </>


    )
}

export default App
