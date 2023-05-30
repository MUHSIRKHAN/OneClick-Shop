import React from 'react'
import Header from '../components/Layout/Header'
import Hero from '../components/Routes/Hero/Hero'
import Categories from '../components/Routes/Categories/Categories'
import BestDeals from '../components/Routes/BestDeals/BestDeals'
import FeaturedProduct from '../components/Routes/FeaturedProduct/FeaturedProduct'
import Events from '../components/Routes/Events/Events'
import Sponserd from '../components/Routes/Sponserd/Sponserd'
import Footer from '../components/Layout/Footer'

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero/>
        <Categories/>
        <BestDeals/>
        <Events/>
        <FeaturedProduct/>
        <Sponserd/>
        <Footer/>
    </div>
  )
}

export default HomePage