import React from 'react'
import Hero from '../layouts/components/Hero'
import Products from '../layouts/components/Products'
import ContactSection from '../layouts/components/Contact'
import About from '../layouts/components/About'
import Footer from '../layouts/components/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Products/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default Home