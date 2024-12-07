import React from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {

    return (


        <Router>
            <div>
                {/* Navigation Menu */}
                <NavBar />
               

                {/* Route Configurations */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                

                 {/* Footer */}
                 <Footer />
            </div>
        </Router>





    )
}

export default App
