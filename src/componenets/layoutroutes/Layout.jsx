import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Service from '../services/Service'


const Layout = () => {
  return (
     <Router>
        <Header/>
            <Routes>
                <Route exact path='/' element={<Home/> }/>
                <Route path='/About' element={<About/>}/>
                <Route path='/services' element={<Service/>}/>
            </Routes>
        <Footer/>
     </Router>
  )
}

export default Layout
