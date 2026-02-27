import React from 'react'
import Banner from './Banner'
import Service from './Service'
import Whychose from './Whychose'
import Solutions from './Solutions'
import GoogleCloudPartner from './GoogleCloudPartner'
import GoogleWorkSpace from './GoogleWorkSpace'
import GoogleAds from './GoogleAds'
import Contact from './Contact'
import Blog from '../Blogs/Blog'

const Home = () => {
  return (
   <>
     <Banner/>
     <Service/>
     <Whychose/>
     <GoogleCloudPartner/>
     <GoogleAds/>
     <Solutions/>
     <GoogleWorkSpace/>
     <Blog/>
     <Contact/>
   </>
  )
}

export default Home
