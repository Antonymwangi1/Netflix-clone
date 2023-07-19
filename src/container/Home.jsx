import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Enjoy from '../components/Enjoy/Enjoy'
import Download from '../components/Download/Download'
import Watch from '../components/Watch/Watch'
import Profile from '../components/Profile/Profile'
import Questions from '../components/Questions/Questions'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Enjoy />
      <Download />
      <Watch />
      <Profile />
      <Questions />
      <Footer />
    </div>
  )
}

export default Home