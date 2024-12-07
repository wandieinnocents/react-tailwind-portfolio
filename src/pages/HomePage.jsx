import { useState } from 'react'
import HomeBanner from '../components/HomeBanner';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Clients from '../components/Clients';


function HomePage() {

    return (
        <>
            {/* nav */}
            {/* <NavBar /> */}

            {/* hero */}
            <HomeBanner />

            {/* services  */}
            <Services />

            <Testimonials />
            <Clients />


        </>


    )
}

export default HomePage
